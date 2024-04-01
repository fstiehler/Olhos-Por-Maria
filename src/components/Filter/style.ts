import styled from 'styled-components/macro';

import CB from 'commons/Checkbox';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Checkbox = styled(CB)`
  display: inline-block;
  label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 90px;
    height: 55px;
    font-size: 0.8em;
    margin-bottom: 8px;
    margin-right: 8px;
    border-radius: 10%;
    line-height: 35px;
    text-align: center;

    &:hover input ~ .checkmark {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    input:focus-visible ~ .checkmark {
      box-sizing: border-box;
      line-height: 30px;
      border: 3px solid ${({ theme }) => theme.colors.secondary};
    }

    /* When the checkbox is checked, add the primary color to background */
    & input:checked ~ .checkmark {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ececec;
    }

    & input:checked ~ .checkmark:after {
      display: block;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      width: 90px;
      height: 35px;
      font-size: 8px;
      border-radius: 15%;
      box-sizing: border-box;
      line-height: 35px;
      text-align: center;
      color: ${({ theme }) => theme.colors.tertiary};
      background: ${({ theme }) => theme.colors.filters};
      border: 2px solid transparent;
    }
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    label {
      width: 72px;
      height: 40px;
    }
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
    width: 90%;
    align-items: center;
    text-align: center;
    display: flex;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {  
    width: 100%;
    align-items: center;
    text-align: center;
    display: inline-block;
  }
`;

export const Title = styled.h4`
  margin-top: 2px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`;
