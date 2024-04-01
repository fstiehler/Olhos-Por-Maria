import styled from 'styled-components/macro';

export const ScrollingTextContainer = styled.div`
  width: 100%; /* largura do contêiner */
  height: 35px; /* altura do contêiner */
  align-items: center;
  overflow: hidden; /* esconde o conteúdo que excede a altura do contêiner */
  background: ${({ theme }) => theme.colors.black};
`;

export const scrollingText = styled.div`
color: ${({ theme }) => theme.colors.white};
margin-top: 8px;
animation: scroll 25s linear infinite; /* define a animação de rolagem */
white-space: nowrap; /* impede que o texto quebre em várias linhas */

@media only screen and (max-width: ${({ theme: { breakpoints } }) =>
  breakpoints.mobile}) {
  animation: scroll 15s linear infinite; /* define a animação de rolagem */

  100% {
    transform: translateX(-50%); /* termina a rolagem do texto da esquerda para a direita */
  }
}

@keyframes scroll {
  0% {
    transform: translateX(100%); /* inicia a rolagem do texto da direita para a esquerda */
  }
  100% {
    transform: translateX(-100%); /* termina a rolagem do texto da esquerda para a direita */
  }
`;

export const Span = styled.span`
  margin-right: 500px; /* Adiciona margem à direita de cada palavra */
`;
