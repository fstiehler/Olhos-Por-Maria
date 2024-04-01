import React, { useEffect, useState } from 'react';
import * as S from './style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon01 from '../../static/icons/icon01.png';
import Icon02 from '../../static/icons/icon02.png';
import Icon03 from '../../static/icons/icon03.png';
import Icon04 from '../../static/icons/icon04.png';
import Icon05 from '../../static/icons/icon05.png';
import Icon06 from '../../static/icons/icon06.png';
import Icon07 from '../../static/icons/icon07.png';
import Icon08 from '../../static/icons/icon08.png'; 
import Icon09 from '../../static/icons/icon09.png';
import Icon10 from '../../static/icons/icon10.png';

const Soluctions = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  if (!isMobile) {
    // Se não for um celular, não renderiza o carousel
    return (
      <S.Container id="carts">
        <S.Header>
          <div>
            <img style={{ height: '75px' }} src={Icon01} alt="01" />
            <S.P>Cuide-se</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon02} alt="02" />
            <S.P>Ofertas</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon03} alt="01" />
            <S.P>Medicamentos</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon04} alt="02" />
            <S.P>Mais Vendidos</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon05} alt="01" />
            <S.P>Cupons</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon06} alt="02" />
            <S.P>WhatsApp</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon07} alt="01" />
            <S.P>Vacinas</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon08} alt="02" />
            <S.P>Mamãe e bebê</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon09} alt="01" />
            <S.P>Beleza</S.P>
          </div>
          <div>
            <img style={{ height: '75px' }} src={Icon10} alt="02" />
            <S.P>Localização</S.P>
          </div>
        </S.Header>
      </S.Container>
    );
  }

  return (
    <S.Container id="carts">
      <S.Header>
        <Slider {...settings}>
          <div>
            <img style={{ height: '70' }} src={Icon01} alt="01" />
            <S.P>Cuide-se</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon02} alt="02" />
            <S.P>Ofertas</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon03} alt="01" />
            <S.P>Medicamentos</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon04} alt="02" />
            <S.P>Mais Vendidos</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon05} alt="01" />
            <S.P>Cupons</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon06} alt="02" />
            <S.P>WhatsApp</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon07} alt="01" />
            <S.P>Vacinas</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon08} alt="02" />
            <S.P>Mamãe e bebê</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon09} alt="01" />
            <S.P>Beleza</S.P>
          </div>
          <div>
            <img style={{ height: '70' }} src={Icon10} alt="02" />
            <S.P>Localização</S.P>
          </div>
        </Slider>
      </S.Header>
    </S.Container>
  );
};

export default Soluctions;
