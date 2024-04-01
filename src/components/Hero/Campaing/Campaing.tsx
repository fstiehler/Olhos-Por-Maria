import * as S from './style';

const Campaing: React.FC = () => {
  const words = [
    'GANHE "10%" OFF NA SUA "1ª" COMPRA COM O CUPOM: FARMSANTREGINA2024.',
    'CADASTRE-SE E RECEBA NOVIDADES COM EXCLUSIVIDADE.',
    'FRETE GRÁTIS PARA O SUDESTE NAS COMPRAS ACIMA DE R$49,00.',
  ];

  return (
    <S.ScrollingTextContainer>
      <S.scrollingText>
        {words.map((word, index) => (
          <>
            <S.Span key={index}>{word}</S.Span>
          </>
        ))}
      </S.scrollingText>
    </S.ScrollingTextContainer>
  );
};

export default Campaing;
