const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const email_username = process.env.EMAIL_USERNAME;
const email_password = process.env.EMAIL_PASSWORD;
const email_destination = process.env.EMAIL_DESTINATION;
const email_host = process.env.EMAIL_HOST;

const app = express();

app.use(cors());
var helmet = require('helmet');
app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", '*'],
      "img-src": ["'self'", "https: data:"]
    },
  })
);


const port = process.env.PORT || 3000;

const mercadopago = require('mercadopago');

const mercadoPagoPublicKey = process.env.MERCADO_PAGO_SAMPLE_PUBLIC_KEY;
if (!mercadoPagoPublicKey) {
  console.log('Error: public key not defined');
  process.exit(1);
}

const mercadoPagoAccessToken = process.env.MERCADO_PAGO_SAMPLE_ACCESS_TOKEN;
if (!mercadoPagoAccessToken) {
  console.log('Error: access token not defined');
  process.exit(1);
}

const emailConfig = {
  pool: true,
  // debug: true,
  //   tls: {
  //     rejectUnauthorized: true
  //   },
  host: email_host,
  port: 587,
  secure: false,
  auth: {
    user: email_username,
    pass: email_password,
  },
};

var expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
app.use(
  session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
      secure: true,
      httpOnly: true,
      domain: 'evoluinfo.com.br',
      path: 'foo/bar',
      expires: expiryDate,
    },
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.static('build'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Endpoint que cria um ID unico no mercado livre para iniciar a trasação de pagamento
app.post('/api/create-preference', async (req, res) => {
  const { body } = req;

  try {
    console.log('Creating Mercado Pago preference with items:', body.items);

    const client = new mercadopago.MercadoPagoConfig({
      accessToken: mercadoPagoAccessToken,
      options: { timeout: 5000 },
    });

    const preference = new mercadopago.Preference(client);
    const response = await preference.create({
      body: {
        items: body.items,
        payer: body.payer,
        back_urls: { success: 'https://allebolofake.evoluinfo.com.br' },
        auto_return: 'approved',
        binary_mode: true,
      },
    });

    res.status(200).json({ preference_id: response.id });
    console.log('Preference created with ID:', response);
  } catch (error) {
    console.error('Error creating Mercado Pago preference:', error);
    res.status(400).json({ error: 'Internal Server Error' });
  }
});

// Função que abstrai a lógica de envio de email
function sendEmail(options, successMessage, errorMessage) {
  try {
    const transporter = nodemailer.createTransport(emailConfig);

    transporter.on('log', (log) => {
      console.log(log.message);
    });

    transporter.sendMail(options, (error, info) => {
      if (error) {
        console.error(`Erro ao enviar o e-mail: ${errorMessage}`, error);
      } else {
        console.log(
          `E-mail enviado com sucesso: ${successMessage}`,
          info.response
        );
      }
    });
  } catch (error) {
    console.error(`Erro ao enviar e-mail: ${errorMessage}`, error);
  }
}

// Endpoint para o mercado livre enviar os dados do pagamento
app.post('/api/notifications', async (req, res) => {
  const { body } = req;

  try {
    const dataId = body.data.id;

    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/${dataId}`,
      {
        headers: {
          Authorization: `Bearer ${mercadoPagoAccessToken}`,
        },
      }
    );

    // Extrair informações relevantes do JSON
    const items = response.data.additional_info.items;
    const payer = response.data.additional_info.payer;
    const transaction_details = response.data.transaction_details;


    const emailBody = `
    🌟 Informações de pagamento chegaram! 🌟
    
    🍰 Itens:
    ${'\n' + items.map(item => `\t- ${item.title}: R$ ${item.unit_price} x${item.quantity}`).join('\n')}

    💵 Recebimento:
    Valor Bruto: ${transaction_details.total_paid_amount}
    Valor Liquido: ${transaction_details.net_received_amount}
    
    👤 Comprador:
    Email: ${response.data.payer.email}
    Telefone para Contato: ${payer.phone.number}
    Endreço para Entrega: ${payer.address.street_name}
    
    📊 Detalhes da Transação:
    Status: ${response.data.status}
    Detalhes do Status: ${response.data.status_detail}
    ID Comprador: ${response.data.payer.id}
    ID da Transação: ${response.data.id}

    💳 Método de Pagamento:
    Tipo: ${response.data.payment_method.type}
    ID: ${response.data.payment_method.id}
    Emissor: ${response.data.payment_method.issuer_id}
    `;

    const emailOptions = {
      from: email_username,
      to: email_destination,
      subject: '💌 Novas Informações de Pagamento Recebidas!',
      text: emailBody,
    };

    sendEmail(
      emailOptions,
      '🚀 Notificação processada com sucesso!',
      'Erro ao criar preferência Mercado Pago'
    );

    res
      .status(200)
      .json({ message: '🎊 Notificação processada com sucesso! 🎊' });
  } catch (error) {
    console.error('Erro ao criar preferência Mercado Pago:', error);
    res
      .status(400)
      .json({ error: 'Algo deu errado! 😟 Internal Server Error' });
  }
});

// Endpoint para assinatura da newsletter
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    const emailOptions = {
      from: email_username,
      to: email_destination,
      subject: 'Novo assinante de newsletter',
      text: `Novo assinante de newsletter: ${email}`,
    };

    sendEmail(
      emailOptions,
      'E-mail cadastrado com sucesso!',
      'Erro ao cadastrar o e-mail'
    );

    res.status(200).json({ message: 'E-mail cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar o e-mail:', error);
    res
      .status(500)
      .json({
        error:
          'Erro ao cadastrar o e-mail. Por favor, tente novamente mais tarde.',
      });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
