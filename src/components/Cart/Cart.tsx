import formatPrice from 'utils/formatPrice';
import CartProducts from './CartProducts';
import { useEffect, useState } from 'react';
import { Modal, Form, Input, Divider } from 'antd';
import { PhoneOutlined, HomeOutlined } from '@ant-design/icons'
import { useCart } from 'contexts/cart-context';
import * as S from './style';
import { isOpenStore } from 'utils/storeStatus';
import { theme } from 'commons/style/theme';

const Cart = () => {
  const { products, total, isOpen, openCart, closeCart } = useCart();
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [form] = Form.useForm();

  const openStore = isOpenStore();

  const linkToCheckout = `${process.env.REACT_APP_MERCADO_PAGO}/checkout/v1/redirect?pref_id=${preferenceId}`;

  const handleProcessDirection = () => {
    form.validateFields().then((values) => {
      try {
        setPhone(values.phone);
        setAddress(values.address);
        setIsModalVisible(true);
      } catch (errorInfo) {
        console.error('Erro de validação:', errorInfo);
      }
    });
  };

  useEffect(() => {
    const createPreference = async () => {
      try {
        const response = await fetch('/api/create-preference', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: products.map((product, index) => ({
              id: product.id || index.toString(),
              title: product.title,
              quantity: product.quantity || 1,
              unit_price: product.price,
            })),
            payer: {
              phone: { area_code: '', number: phone },
              address: { zip_code: '', street_name: address, street_number: null },
            },
          }),
        });

        const data = await response.json();

        if (data && data.preference_id) {
          setPreferenceId(data.preference_id);
        } else {
          console.error('Error creating Mercado Pago preference: Invalid response format');
        }
      } catch (error) {
        console.error('Error creating Mercado Pago preference:', error);
      }
    };

    createPreference();
  }, [products, phone, address]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSendToWhatsapp = (phone: string, address: string) => {
    const productsText = products.map((product) => `${product.title} x${product.quantity || 1}`).join('%0A');
    const totalPrice = products.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);

    const whatsappLink = `https://wa.me/${theme.numbers.whatsapp}/?text=Olá! Gostaria de fazer um pedido:%0A%0A${productsText}%0A%0ATotal: ${totalPrice.toFixed(2)}%0A%0ATelefone: ${phone}%0AEndereço: ${address}`;

    window.location.href = whatsappLink;
  };


  const handleToggleCart = (isOpen: boolean) => () =>
    isOpen ? closeCart() : openCart();

  const commonForm = (
    <Form layout="vertical" form={form}>
      <Form.Item
        name="phone"
        rules={[{ required: true, message: 'Por favor, insira o número de telefone!' }]}
      >
        <Input
          onChange={(e) => setPhone(e.target.value)}
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Telefone"
        />
      </Form.Item>
      <Form.Item
        name="address"
        rules={[{ required: true, message: 'Por favor, insira o endereço!' }]}
      >
        <Input
          onChange={(e) => setAddress(e.target.value)}
          prefix={<HomeOutlined className="site-form-item-icon" />}
          placeholder="Endereço"
        />
      </Form.Item>
    </Form>
  )




  return (
    <S.Container isOpen={isOpen}>
        <S.CartButton onClick={handleToggleCart(isOpen)} isOpen={isOpen}>
          {isOpen ? (
            <span>X</span>
          ) : (
            <S.CartIcon>
              <S.CartQuantity title="Quantidade de produtos no carrinho">
                {total.productQuantity}
              </S.CartQuantity>
            </S.CartIcon>
          )}
        </S.CartButton>
      {isOpen && (
        <S.CartContent>
          <S.CartContentHeader>
            <S.CartIcon large isOpen>
              <S.CartQuantity>{total.productQuantity}</S.CartQuantity>
            </S.CartIcon>
            <S.HeaderTitle>Carrinho</S.HeaderTitle>
          </S.CartContentHeader>

          <CartProducts products={products} />

          <S.CartFooter>
            <S.Sub>SUBTOTAL</S.Sub>
            <S.SubPrice>
              <S.SubPriceValue>{`${total.currency_format} ${formatPrice(
                total.totalPrice,
                total.currency_id
              )}`}</S.SubPriceValue>
              <S.SubPriceInstallment>
                {total.installments ? (
                  <span>
                    {`OU EM ${total.installments} x ${total.currency_format
                      } ${formatPrice(
                        total.totalPrice / total.installments,
                        total.currency_id
                      )}`}
                  </span>
                ) : null}
              </S.SubPriceInstallment>
            </S.SubPrice>

            {preferenceId ? (
              <S.CheckoutButton autoFocus>
                <span style={{ textDecoration: 'none', color: '#fff' }} onClick={handleProcessDirection} > Prosseguir </span>
              </S.CheckoutButton>
            ) : (
              <S.CheckoutButton autoFocus>
                <span style={{ textDecoration: 'none', color: '#fff' }} onClick={handleProcessDirection} > Prosseguir  </span>
              </S.CheckoutButton>
            )}
          </S.CartFooter>
        </S.CartContent>
      )}
      {openStore ? (
        <Modal
          title="Loja Aberta :)"
          open={isModalVisible}
          onOk={() => {
            window.location.href = linkToCheckout;
            setIsModalVisible(false);
          }}
          onCancel={() => {
            handleSendToWhatsapp(phone, address);
            setIsModalVisible(false);
          }}
          okText="Pagar agora"
          cancelText="Enviar via Whatsapp"
          okButtonProps={{ style: { background: theme.colors.quartiary } }}
          cancelButtonProps={{ style: { background: theme.colors.tertiary, color: theme.colors.white } }}
        >
          <p>Mas antes, precisamos de alguns dados para a entrega ;)</p>
          {commonForm}
          <Divider />
          <p>Você será redirecionado para a finalização do pagamento</p>
        </Modal>
      ) : (
        <Modal
          title="Aviso: Loja Fechada"
          open={isModalVisible}
          onOk={() => {
            window.location.href = linkToCheckout;
            setIsModalVisible(false);
          }}
          onCancel={() => {
            handleSendToWhatsapp(phone, address);
            setIsModalVisible(false);
          }}
          okText="Pagar agora"
          cancelText="Enviar via Whatsapp"
          okButtonProps={{ style: { background: theme.colors.quartiary } }}
          cancelButtonProps={{ style: { background: theme.colors.tertiary, color: theme.colors.white } }}
        >
          <p>A loja está fechada no momento, o pedido será entregue no próximo dia útil.</p>
          <p>Mas antes, precisamos de alguns dados para a entrega</p>
          {commonForm}
          <Divider />
          <p>Você será redirecionado para a finalização do pagamento :)</p>
        </Modal>
      )}

    </S.Container>
  );
};

export default Cart;
