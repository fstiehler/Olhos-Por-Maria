import styled from 'styled-components/macro';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: 0px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 100%;
    height: 5vh;
    padding-bottom: 4vh;
    display: flex;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
        display: inline-block;
        background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
        width: 98%;
        margin-left: calc(20% - 30.5%);
        padding: 40px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    display: inline-block;
  }
`;

export const P = styled.p`
  font-size: 14px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    text-align: center;
    font-size: 12.5px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    text-align: center;
    font-size: 12px;
  }
`;
