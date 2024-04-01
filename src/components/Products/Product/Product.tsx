import { KeyboardEvent } from 'react';
import React, { useState } from 'react';
import formatPrice from 'utils/formatPrice';
import confetti from 'canvas-confetti';
import { IProduct } from 'models';
import { Flex, Rate } from 'antd';
import { useCart } from 'contexts/cart-context';
import { ShoppingCartOutlined } from '@ant-design/icons';

import * as S from './style';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
  const {
    sku,
    title,
    price,
    installments,
    currency_id,
    description,
    currency_format,
  } = product;

  const formattedPrice = formatPrice(price, currency_id);
  let productInstallment;

  if (installments) {
    const installmentPrice = price / installments;

    productInstallment = (
      <S.Installment>
        <span>ou {installments} x </span>
        <b>
          {currency_format}
          {formatPrice(installmentPrice, currency_id)}
        </b>
      </S.Installment>
    );
  }

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
    confetti({
      particleCount: 100,
      spread: 70
    });
  };

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Space') {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };

  const desc = ['ruim', 'normal', 'bom', 'ótimo'];
  const [value, setValue] = useState(3);

  return (
    <S.Container onKeyUp={handleAddProductWhenEnter} sku={sku} tabIndex={1}>
      <S.Image alt={title} />
      <Flex gap="middle" vertical>
      <Rate tooltips={desc} onChange={setValue} value={value} />
    </Flex>
      <S.Description>{description}</S.Description>
      <S.Price>
        <S.Val>
          <small>{currency_format}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </S.Val>
        {productInstallment}
      </S.Price>
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1} className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      >
        Adicionar ao carrinho
       <ShoppingCartOutlined />
      </S.BuyButton>
    </S.Container>
  );
};

export default Product;
