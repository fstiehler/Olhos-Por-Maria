import styled from 'styled-components/macro';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-sevenunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-sevenunits);
  background: ${({ theme }) => theme.colors.black};

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 100%;
    padding-top: var(--dl-space-space-fourunits);
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
  border-color: #3b3b3b;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
  justify-content: space-between;
  border-bottom-width: 1px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
  breakpoints.tablet}) {
    width: 90%;
}
`;

export const Heading = styled.div`
  width: 33%;
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-twounits);
  flex-direction: column;
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-threeunits);
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin-left: 15px;
  }
`;

export const DescriptionEmail = styled.span`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-oneandhalfunits);
  border-radius: 50px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 90%;
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    padding-top: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
    margin-left: 10px;
    height: 35px;
    width: 80%;
  }
`;

export const NewsletterInput = styled.input`
  width: 60%;
  font-size: 14px;
  border-width: 0px;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    font-size: 15px;
    color: rgb(207, 207, 207);
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    font-size: 12px;
    padding-left: 10px;
  }
`;

export const Contact = styled.div`
  display: flex;
  margin-top: 52px;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    padding-left: 10px;
  }
`;

export const ContactEmail = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-unit);
`;

export const ContactLink = styled.a`
  color: #c4c4c4;
  font-size: 14px;
  text-decoration: underline;
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablete}) {
    text-decoration: underline none;
  }
`;

export const Buttom1 = styled.div`
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-top: 16px;
  padding-left: 32px;
  border-radius: 56px;
  padding-right: 32px;
  flex-direction: row;
  padding-bottom: 16px;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    padding-top: 12px;
    padding-left: 30px;
    border-radius: 40px;
    padding-right: 30px;
  }
`;

export const Enviar = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const Right = styled.div`
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--dl-space-space-threeunits);
  flex-direction: row;
  justify-content: flex-start;
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    gap: var(--dl-space-space-twounits);
    padding-left: 10px;
    flex-direction: column;
  }
`;

export const TitleCategory = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-unit);
`;

export const Category = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
`;

export const MainCategory = styled.div`
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    gap: var(--dl-space-space-unit);
  }
`;

export const ItemCategory = styled.span`
  color: rgb(196, 196, 196);
  cursor: pointer;
  font-size: 14px;
`;

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: flex-start;
  user-select: none;
  flex-direction: column;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
        width: 90%;
  }  
`;

export const Image = styled.image`
  width: 20px;
  header: 10px;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(95%)
    contrast(100%);
`;

export const TextCopyright = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  line-height: 30px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    font-size: 12px;
    line-height: 25px;
    margin-bottom: 0px;
  }
`;

export const TextPlataform = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  line-height: 30px;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    font-size: 10px;
    line-height: 25px;
    margin-bottom: 0px;
  }
`;

export const Createdy = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  margin-left: 5px;
`;
