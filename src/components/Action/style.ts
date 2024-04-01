import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  height: auto;
  margin: 2% 12%;
  display: flex;

  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    filter: brightness(90%);
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    margin: 5% 0;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    margin: 2% 0%;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
        flex-direction: column;
  }
`;

export const CarrouselItem = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
  breakpoints.desktop}) {
    margin-left: 0px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  transition: transform 0.5s ease; /* Add a smooth transition effect */
  max-width: 100%;
  max-height: 100%;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
        width: 95%;
        height: auto;
        margin-top: 10px;
        &:hover {
          transform: scale(1);
        }
  }
`;

