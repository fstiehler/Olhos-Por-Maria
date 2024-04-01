import styled from 'styled-components/macro';

export const BuyButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 0;
  margin-top: 0px;
  cursor: pointer;
  width: 100%;
  border: 0;
  border-radius: 15px;
  transition: background-color 0.2s;
  
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
  breakpoints.tablet}) {
    font-size: 14px;
}
@media only screen and (max-width: ${({ theme: { breakpoints } }) =>
  breakpoints.mobile}) {
    font-size: 12.5px;
    padding: 8px 0;
    border-radius: 10px;
}
`;

interface IImage {
  alt: string;
}
export const Image = styled.div<IImage>`
margin-bottom: 15px;
`;

interface IContainer {
  sku: number | string;
}

const getImageUrl1 = (sku: any) =>
  process.env.REACT_APP_NODE_ENV === 'production'
    ? `${process.env.REACT_APP_AWS_S3_URL_PREFIX}/${process.env.REACT_APP_COMPANY_ID}-${sku}-1.webp`
    : `${require(`static/products/${sku}-1-product.webp`)}`;

const getImageUrl2 = (sku: any) =>
  process.env.REACT_APP_NODE_ENV === 'production'
    ? `${process.env.REACT_APP_AWS_S3_URL_PREFIX}/${process.env.REACT_APP_COMPANY_ID}-${sku}-2.webp`
    : `${require(`static/products/${sku}-2-product.webp`)}`;

    export const Container = styled.div<IContainer>`
    position: relative;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
    padding: 10px;
    margin-bottom: 35px;
    cursor: default;
    outline: none;
    background: ${({ theme }) => theme.colors.white};
    height: auto;
  
    border-radius: 20px;
    transition: ease-in-out 0.7s;
  
    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.secondary};
    }
  
    @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.tablet}) {
      width: 270px;
    }
  
    ${Image} {
      width: 100%;
      height: 220px;
      border-radius: 0%;
      position: relative;
  
      ${({ sku }) =>
        sku &&
        `background-image: url(${getImageUrl1(sku)});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
  
        ::before {
          content: '';
          display: block;
          position: absolute;
          background: #eee;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
  
        @media only screen and (min-width: ${({
          theme: { breakpoints },
        }: {
          theme: { breakpoints: { tablet: string } };
        }) => breakpoints.tablet}) {
          height: 240px;
        }
      
        @media only screen and (max-width: ${({
          theme: { breakpoints },
        }: {
          theme: { breakpoints: { mobile: string } };
        }) => breakpoints.mobile}) {
          height: 204px;
        }
      `}
    }
  
    &:hover {
      ${Image} {
        ${({ sku }) =>
          sku &&
          `background-image: url(${getImageUrl2(sku)});
          `}
      }
  
      transform: translateY(-10px);
  
      ${BuyButton} {
        background: ${({ theme }) => theme.colors.secondary};
      }
    }
  `;

export const StopperAvailable = styled.div`
  position: absolute;
  color: #ececec;
  top: 10px;
  right: 10px;
  padding: 4px;
  font-size: 0.7em;
  background: ${({ theme }) => theme.colors.agendaments};
  cursor: default;
  z-index: 1;
`;

export const StopperSchedule = styled.div`
position: absolute;
color: #ececec;
top: 10px;
right: 10px;
padding: 5px;
font-size: 0.7em;
background: ${({ theme }) => theme.colors.check};
cursor: default;
z-index: 1;
`;

export const Description = styled.p`
  position: relative;
  font-size: 14.5px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  padding: 0 10px;
  height: 50px;
  line-height: 15px;

  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    height: 50px;
    font-size: 12.5px;
  }
`;

export const Price = styled.div`
  height: 55px;
  .val {
    b {
      font-size: 1.5em;
      margin-left: 5px;
    }
  }
`;

export const Val = styled.p`
  margin: 0;
  b {
    font-size: 1.8em;
    margin-left: 5px;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
  breakpoints.mobile}) {
    font-size: 0.9em;
}
`;

export const Installment = styled.p`
  margin: 0;
  color: #9c9b9b;
`;
