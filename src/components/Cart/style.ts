import styled from 'styled-components/macro';

interface IContainer {
  isOpen: boolean;
}

export const CartButton = styled.button<IContainer>`
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 40px;
  left: 0;
  cursor: pointer;
  z-index: 20;
  cursor: move;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    filter: brightness(85%);
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? '' : 'none')};
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    display: ${({ isOpen }) => (isOpen ? '' : 'none')};
  }
`;

export const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  box-shadow: ${({ isOpen }) =>
    isOpen ? '0px 0px 20px rgba(0, 0, 0, 0.4)' : '0px'};
  z-index: 1;

  transition: right 0.2s;

  ${CartButton} {
    margin-top: ${({ isOpen }) => (isOpen ? '0px' : '20px')};
    border-radius: ${({ isOpen }) => (isOpen ? '0px 0px 10px 0px' : '25px')};
    left: ${({ isOpen }) => (isOpen ? '0px' : '-45px')};
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.primary : theme.colors.primary};
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    ${CartButton} {
      margin-top: ${({ isOpen }) => (isOpen ? '0px' : '12vh')};
      left: ${({ isOpen }) => (isOpen ? '0px' : '-65px')};
    }
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 450px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-450px')};

    ${CartButton} {
      margin-left: ${({ isOpen }) => (isOpen ? '0px' : '-20px')};
    }
  }
`;

interface ICartIcon {
  large?: boolean;
  isOpen?: boolean;
}
export const CartIcon = styled.div<ICartIcon>`
  width: ${({ large }) => (large ? '60px' : '50px')};
  height: ${({ large }) => (large ? '60px' : '50px')};
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  background-image: ${({ isOpen }) =>
    isOpen
      ? `url(${require('static/cart-icon-black.png')})`
      : `url(${require('static/cart-icon.png')})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-size: 60%;
`;

export const CartQuantity = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #fff;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.quartiary};
  position: absolute;
  bottom: 0;
  right: 5px;
`;

export const CartContent = styled.div`
  height: 100%;
  overflow-y: scroll;

  @media screen and (min-width: 640px) {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 3px;
      background-color: ${({ theme }) => theme.colors.tertiary};
      padding: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const CartContentHeader = styled.div`
  color: #ececec;
  box-sizing: border-box;
  text-align: center;
  padding: 45px 0;
`;

export const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.black};
`;

export const Sub = styled.p`
  width: 20%;
  color: ${({ theme }) => theme.colors.black};
  vertical-align: middle;
  display: inline-block;
`;

export const SubPrice = styled.div`
  width: 80%;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
  vertical-align: middle;
  display: inline-block;
`;

export const SubPriceValue = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;
  margin: 0;
`;

export const SubPriceInstallment = styled.p`
  margin: 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.quartiary};
  text-align: center;
  padding: 15px 0;
  margin-top: 20px;
  cursor: pointer;
  outline: none;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CartFooter = styled.div`
  box-sizing: border-box;
  padding: 5%;
  position: absolute;
  border: 1px;
  bottom: 10px;
  width: 100%;
  height: 160px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.white};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-size: 100%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    bottom: 40px;
  }
`;
