import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  height: 70vh;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background: ${({ theme }) => theme.colors.primary};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    margin: 2% 0%;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    margin: 5% 0;
  }
`;

export const Spece = styled.div`
  width: 70%;
  padding-left: 5%;
`;

export const Image = styled.div`
  width: 100%;
  padding-left: 50%;
  margin-top: -17vh;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  width: 40%;
  padding-top: 50px;
  padding-left: 150px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.p`
  width: 28%;
  padding-left: 150px;
  align-items: left;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Buttom = styled.div`
  width: 30%;
  padding-left: 150px;
  align-items: left;
`;
