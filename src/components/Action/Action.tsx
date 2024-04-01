import React from 'react'
import * as S from './style';

const Action = () => {
  return (
    <S.Container>
      <S.CarrouselItem>
        <S.Image src={require('static/banners/banner10.jpeg')} alt="banner1" />
      </S.CarrouselItem>

      <S.CarrouselItem>
        <S.Image src={require('static/banners/banner20.jpeg')} alt="banner2" />
      </S.CarrouselItem>

      <S.CarrouselItem>
        <S.Image src={require('static/banners/banner21.jpeg')} alt="banner3" />
      </S.CarrouselItem>
    
  </S.Container>
  );
}

export default Action
