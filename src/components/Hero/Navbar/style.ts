import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 70%;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    width: 100%;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
  width: 100%;
  height: 90px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Logo = styled.a`
  margin-right: 1rem;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    align-items: center;
  }
`;

export const LogoImage = styled.img`
width: 220px;
height: auto;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
    breakpoints.tablet}) {
    width: 220px;
    margin-right: -70px;
}

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
    breakpoints.mobile}) {
      display: none;
  }
 
`;

export const LogoImageMobile = styled.img`
width: 0px;
height: 0px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
    breakpoints.mobile}) {
      margin-bottom: 5px;
      width: 32vh;
      height: auto;
  }
 
`;

export const Pesquisa = styled.div`
  .ant-input {
    width: 400px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    .ant-input {
      width: 250px;
    }
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    .ant-input {
      width: 220px;
    }
  }
`;

export const AreaIcon = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    padding-bottom: 0px;
    margin-left: calc(85% - 15%);
    flex-direction: column;
    position: absolute;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    padding-bottom: 0px;
    margin-left: calc(100% - 15%);
    flex-direction: column;
    position: absolute;
  }
`;

export const Icone1 = styled.img`
  width: 38px;
  margin-right: 15px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    margin-bottom: 5px;
    margin-right: 20px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    margin-bottom: 5px;
    margin-right: 0;
  }
`;

export const Location = styled.div`
  cursor: pointer;
  display: flex;
  height: 45%;
  transition: 0.3s;
  align-items: center;
  border-radius: 18px;
  flex-direction: center;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  width: auto;
  font-size: 15px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    border-radius: 10px;
    margin-right: 15px;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    height: 50%;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    display: none;
  }
`;

export const LocationIcon = styled.span`
  margin-right: auto;
  padding: auto;
  align-items: center;
  margin-left: 20px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    width: 100%;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
        margin-left: 15px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 0;
  }
`;

export const Store = styled.span`
  color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  border-radius: 5px;
  width: auto;
  font-size: 12px;
  text-align: center;
  text-decoration: none !important;
  pointer-events: none;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    margin-top: 5px;
    width: 100%;
    margin-left: 0px;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    margin-top: 5px;
    width: 100%;
    margin-left: 0px;
    border-radius: 5px;
    font-size: 12px;
    padding: auto;
  }
`;
