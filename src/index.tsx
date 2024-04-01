import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

/* Antd */
import { ConfigProvider } from "antd";

/* Theme */
import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';
import { ThemeProvider as ThemeProviderMui, createTheme } from '@mui/material/styles';

import GlobalStyle from 'commons/style/global-style';

/* Context Providers */
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from 'components/App';

const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);

const themeMui = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
  },
});

container.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.colors.primary,
          },
        }}
      >
        <ThemeProviderMui theme={themeMui}>
          <GlobalStyle />
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </ThemeProviderMui>
      </ConfigProvider>
    </ThemeProvider>
  </StrictMode>
);
