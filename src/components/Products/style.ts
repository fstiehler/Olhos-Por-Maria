import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SectionHeader = styled.h1`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    margin-left: 10px;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    font-size: 18px;
    margin-left: 10px;
  }
`;
