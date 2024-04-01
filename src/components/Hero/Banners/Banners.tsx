import * as S from './style';

const Banners = () => {
  return (
    <S.Container>
      <S.CarrouselItem>
        <S.Image src={require('static/banners/banner01.webp')} alt="banner1" />
      </S.CarrouselItem>

      <S.CarrouselItem>
        <S.Image src={require('static/banners/banner02.webp')} alt="banner2" />
      </S.CarrouselItem>

      <S.CarrouselItem>
        <S.Image src={require('static/banners/banner03.webp')} alt="banner3" />
      </S.CarrouselItem>
    
  </S.Container>
  );
};

export default Banners;
