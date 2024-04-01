import React from "react";
import { CustomerServiceOutlined, InstagramOutlined, UpCircleOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { theme } from 'commons/style/theme';

const FloadButtonService = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const linkToWhatsapp = `https://api.whatsapp.com/send?phone=${theme.numbers.whatsapp}&text=Olá%20Vim%20através%20do%20site%20Farmácia%20Santa%20Regina.com.br`
  const linkToInstagram = `https://www.instagram.com/${theme.links.instagram}/`

  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ bottom: 70, right: 24, zIndex: 220 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton icon={<InstagramOutlined />} tooltip={<div>Acessar Instagram</div>} href={linkToInstagram} target="_blank" />
      <FloatButton
        icon={<WhatsAppOutlined />}
        tooltip={<div>Acessar Whatsapp</div>}
        href={linkToWhatsapp}
        target="_blank"
      />
      <FloatButton icon={<UpCircleOutlined />} tooltip={<div>Voltar para o Topo</div>}
        onClick={scrollToTop}
      />
    </FloatButton.Group>

  );
};

export default FloadButtonService;

