import formatPrice from 'utils/formatPrice';
import { ICartProduct } from 'models';

import { useCart } from 'contexts/cart-context';

import * as S from './style';

interface IProps {
  product: ICartProduct;
}
const CartProduct = ({ product }: IProps) => {
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCart();
  const {
    sku,
    title,
    price,
    grammage,
    currency_id,
    currency_format,
    available_types,
    quantity,
  } = product;

  const handleRemoveProduct = () => removeProduct(product);
  const handleIncreaseProductQuantity = () => increaseProductQuantity(product);
  const handleDecreaseProductQuantity = () => decreaseProductQuantity(product);

  return (
    <S.Container>
      <S.DeleteButton
        onClick={handleRemoveProduct}
        title="Remover produtos do carrinho"
      />
      <S.Image
        src={process.env.REACT_APP_NODE_ENV === 'production'
          ? `${process.env.REACT_APP_AWS_S3_URL_PREFIX}/${process.env.REACT_APP_COMPANY_ID}-${sku}-1.webp`
          : `${require(`static/products/${sku}-1-cart.webp`)}`}
        alt={title}
      />
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Desc>
          {`${available_types} | ${grammage}`} <br />
          Quantidade: {quantity}
        </S.Desc>
      </S.Details>
      <S.Price>
        <p>{`${currency_format}  ${formatPrice(price, currency_id)}`}</p>
        <div>
          <S.ChangeQuantity
            onClick={handleDecreaseProductQuantity}
            disabled={quantity === 1 ? true : false}
          >
            -
          </S.ChangeQuantity>
          <S.ChangeQuantity onClick={handleIncreaseProductQuantity}>
            +
          </S.ChangeQuantity>
        </div>
      </S.Price>
    </S.Container>
  );
};

export default CartProduct;
