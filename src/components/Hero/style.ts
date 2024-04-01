import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: auto;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    height: auto;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    height: 55vh;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 10vh;
  background: ${({ theme }) => theme.colors.navBar};
  position: relative;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    height: 18vh;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    height: 13vh;
  }
`;

export const ContainerBottomNav = styled.div`
  display: none;
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    display: flex;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    display: flex;
  }
`;

export const Title = styled.h4`
  margin-top: 2px;
  margin-bottom: 20px;
`;
