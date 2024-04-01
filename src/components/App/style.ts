import styled from 'styled-components/macro';

export const Container = styled.div``;

export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: 4fr;
  margin: 0 auto;
  max-width: 1450px;
  margin-top: 0px;
  padding: 20px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    max-width: auto;
    grid-template-columns: 1fr;
    margin-top: 0px;
  }
  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    max-width: auto;
    grid-template-columns: 4fr;
    margin-top: 300px;
    padding: 50px;
  }
`;

export const Side = styled.div`
  padding: 15px;
  box-sizing: border-box;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    justify-content: center;
    align-content: baseline;
  }
`;

export const Main = styled.main``;
