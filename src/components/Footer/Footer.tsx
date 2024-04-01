import * as S from './style';
import { Alert } from 'antd';
import { SetStateAction, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState<React.ReactNode | null>(null);

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const handleSubscribeClick = async () => {
    try {
      setAlert(
        <Alert
          message="Aguarde até que o processo se conclua"
          type="info"
          showIcon
          closable
          onClose={closeAlert}
          style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}
        />
      );

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      setTimeout(() => {
        if (response.ok) {
          setAlert(
            <Alert
              message="Cadastro realizado com sucesso!"
              description="Agora você receberá nossas novidades por e-mail."
              type="success"
              showIcon
              closable
              onClose={closeAlert}
              style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}
            />
          );
        } else {
          setAlert(
            <Alert
              message="Erro ao cadastrar o e-mail."
              description="Ocorreu um erro ao se inscrever. Por favor, tente novamente mais tarde."
              type="error"
              showIcon
              closable
              onClose={closeAlert}
              style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}
            />
          );
        }
      }, 3000);
    } catch (error) {
      setAlert(
        <Alert
          message="Erro ao cadastrar o e-mail."
          description="Ocorreu um erro ao se inscrever. Por favor, tente novamente mais tarde."
          type="error"
          showIcon
          closable
          onClose={closeAlert}
          style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}
        />
      );
    }
  };
  return (
    <S.Container>
      {alert}
      <S.Content>
        <S.Heading>
          <S.Title> Inscreva-se em nossa Newsletter </S.Title>
          <S.DescriptionEmail>
            <S.NewsletterInput
              type="email"
              placeholder="Informe o seu melhor e-mail"
              value={email}
              onChange={handleEmailChange}
            />
            <S.Buttom1>
              <S.Enviar onClick={handleSubscribeClick}> Enviar </S.Enviar>
            </S.Buttom1>
          </S.DescriptionEmail>
          <S.SubTitle>
            Ao assinar nossa newsletter você concorda com nossos Termos e
            Condições
          </S.SubTitle>
          <S.Contact>
            <S.ContactEmail> Contato </S.ContactEmail>
            <S.ContactLink
              href="mailto:evoluinfo.com.br?subject=Duvidas"
            >
              template@evoluinfo.com.br
            </S.ContactLink>
          </S.Contact>
        </S.Heading>
        <S.Right>
          <S.Category>
            <S.TitleCategory> Produtos </S.TitleCategory>
            <S.MainCategory>
              <S.ItemCategory>Bolos Fake</S.ItemCategory>
            </S.MainCategory>
          </S.Category>
          <S.Category>
            <S.TitleCategory> Kit festas </S.TitleCategory>
            <S.MainCategory>
              <S.ItemCategory>Aniversario</S.ItemCategory>
              <S.ItemCategory>Mêsversario</S.ItemCategory>
              <S.ItemCategory>Casamentos</S.ItemCategory>
            </S.MainCategory>
          </S.Category>
        </S.Right>
      </S.Content>
      <S.Copyright>
        <S.TextCopyright>
          Copyright © Alle Bolos Fakes - {currentYear}{' '}
        </S.TextCopyright>
        <S.TextPlataform>
          Plataforma criada com tecnologia
          <S.Createdy
            rel="noreferrer"
            href="http://evoluinfo.com.br/platform"
            target="_blank"
          >
            EvoluInfo - Tecnologias
          </S.Createdy>
        </S.TextPlataform>
      </S.Copyright>
    </S.Container>
  );
};

export default Footer;
