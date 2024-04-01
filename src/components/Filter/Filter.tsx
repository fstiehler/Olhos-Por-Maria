import React, { useEffect, useState } from 'react';
import { useProducts } from 'contexts/products-context';
import * as S1 from './style1';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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

export const availableTypes = [
  { label: 'Cuide-se', iconUrl: Icon01 },
  { label: 'Ofertas', iconUrl: Icon02 },
  { label: 'Medicamentos', iconUrl: Icon03 },
  { label: 'Mais vendidos', iconUrl: Icon04 },
  { label: 'Cupons', iconUrl: Icon05 },
  { label: 'Insetos', iconUrl: Icon06 },
  { label: 'Vacinas', iconUrl: Icon07 },
  { label: 'Mamãe e bebê', iconUrl: Icon08 },
  { label: 'Localização', iconUrl: Icon09 },
  { label: 'Beleza', iconUrl: Icon10 },
];

interface Type {
  label: string;
  iconUrl: string;
}

const Filter = () => {
  const { filters, filterProducts } = useProducts();
  const selectedCheckboxes = new Set(filters);

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    const filters = Array.from(selectedCheckboxes);
    filterProducts(filters);
  };

  const [isMobile, setIsMobile] = useState(true);
  const [iconsLoaded, setIconsLoaded] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    setTimeout(() => {
      setIconsLoaded(true);
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <S1.Container id="carts">
      <S1.Header>
        {isMobile ? (
          iconsLoaded && (
            
            <Slider {...settings}>
            <div style={{ display: "flex", flexDirection: 'row' }}>
              {availableTypes.map((type: Type) => (
                <div key={type.label} onClick={() => toggleCheckbox(type.label)} style={{ marginRight: '10px' }}>
                  <img
                    style={{ height: '50px' }}
                    src={type.iconUrl}
                    alt={type.label}
                  />
                  <S1.P>{type.label}</S1.P>
                </div>
              ))}
            </div>
          </Slider>
          )
        ) : (
          <>
            {availableTypes.map((type: Type) => (
              <div key={type.label} onClick={() => toggleCheckbox(type.label)}>
                <img
                  style={{ height: '74px' }}
                  src={type.iconUrl}
                  alt={type.label}
                />
                <S1.P>{type.label}</S1.P>
              </div>
            ))}
          </>
        )}
      </S1.Header>
    </S1.Container>
  );
};

export default Filter;
