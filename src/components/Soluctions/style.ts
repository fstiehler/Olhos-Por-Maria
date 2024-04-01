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
    margin-left: 0px;
    display: flex;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 95%;
    margin-left: 10px;
    display: inline-block;
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
    width: 100%;
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

export const P = styled.p`
  font-size: 14px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    margin-right: 12px;
    text-align: center;
    font-size: 12px;
  }
`;
