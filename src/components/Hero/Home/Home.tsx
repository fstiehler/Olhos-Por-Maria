import * as S from './style';
import Modelo from "../../../static/modelo.png"
import { Button } from 'antd';
import { useState } from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';


const Home = () => {
  
  const [size] = useState<SizeType>('large');

  return (
    <S.Container>
      <S.Spece>
     <S.Title/>
     <S.Text/>
        <S.Title>
        <p>Seja Bem Vinda!</p>
        </S.Title>
        <S.Text>
        <p style={{marginTop: "50px", marginBottom: "50px"}}>Ao assinar nossa newsletter você concorda com nossos Termos e CondiçõesAo assinar nossa newsletter você concorda com nossos Termos e Condições!</p>
        </S.Text>
        <S.Buttom>
        <Button style={{background: "#ffff", borderRadius: "15px"}}  size={size}>
            Venha Conferir
          </Button>
        </S.Buttom>
      <S.Image>
        <img src={Modelo} alt="Modelo" />
      </S.Image>
      </S.Spece>
    </S.Container>
  );
};

export default Home;
