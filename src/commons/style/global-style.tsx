import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    --dl-color-gray-500: #595959;
    --dl-color-gray-700: #999999;
    --dl-color-gray-900: #d9d9d9;
    --dl-size-size-large: 144px;
    --dl-size-size-small: 48px;
    --dl-color-danger-300: #a22020;
    --dl-color-danger-500: #bf2626;
    --dl-color-danger-700: #e14747;
    --dl-color-gray-black: #000000;
    --dl-color-gray-white: #ffffff;
    --dl-size-size-medium: 96px;
    --dl-size-size-xlarge: 192px;
    --dl-size-size-xsmall: 16px;
    --dl-space-space-unit: 16px;
    --dl-color-primary-100: #003eb3;
    --dl-color-primary-300: #0074f0;
    --dl-color-primary-500: #14a9ff;
    --dl-color-primary-700: #85dcff;
    --dl-color-success-300: #199033;
    --dl-color-success-500: #32a94c;
    --dl-color-success-700: #4cc366;
    --dl-size-size-xxlarge: 288px;
    --dl-size-size-maxwidth: 1400px;
    --dl-radius-radius-round: 50%;
    --dl-space-space-halfunit: 8px;
    --dl-space-space-sixunits: 96px;
    --dl-space-space-twounits: 32px;
    --dl-radius-radius-radius2: 2px;
    --dl-radius-radius-radius4: 4px;
    --dl-radius-radius-radius8: 8px;
    --dl-space-space-fiveunits: 80px;
    --dl-space-space-fourunits: 64px;
    --dl-color-template-color-bg: #CB6A7D;
    --dl-space-space-sevenunits: 112px;
    --dl-space-space-threeunits: 48px;
    --dl-space-space-oneandhalfunits: 24px;
  }
  .hero-container {
    width: 100%;
    display: flex;
    overflow: auto;
    min-height: 100vh;
    overflow-x: hidden;
    flex-direction: column;
  }
  .button {
    color: var(--dl-color-gray-black);
    display: inline-block;
    padding: 0.5rem 1rem;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    border-radius: 4px;
    background-color: var(--dl-color-gray-white);
  }
  .input {
    color: var(--dl-color-gray-black);
    cursor: auto;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: var(--dl-color-gray-white);
  }
  .textarea {
    cursor: auto;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: var(--dl-color-gray-white);
  }
  .list {
    width: 100%;
    margin: 1em 0px 1em 0px;
    display: block;
    padding: 0px 0px 0px 1.5rem;
    list-style-type: none;
    list-style-position: outside;
  }
  .list-item {
    display: list-item;
  }
  .teleport-show {
    display: flex !important;
    transform: translateX(0) !important;
  }
  .Link {
    cursor: pointer;
    white-space: nowrap;
    margin-right: 1px;
  }
  .Link:hover {
    color: #287A76;
  }
  .metrics {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .title {
    font-size: 56px;
    text-align: Left;
    font-weight: 700;
    line-height: 72px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .sub-title {
    color: rgb(82, 40, 245);
    font-style: normal;
    font-weight: 600;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .template-button {
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    display: flex;
    transition: 0.3s;
    align-items: center;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-twounits);
    border-radius: 56px;
    margin-bottom: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-unit);
    background: ${({ theme }) => theme.colors.tertiary};
  }
  .template-button:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secondary};
  }

  .accordionIcon {
    width: 30px;
    height: 30px;
  }
  .accordionContent {
    width: 100%;
    display: flex;
    user-select: text;
  }
  .Content {
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    line-height: 1.15;
    text-transform: none;
    text-decoration: none;
  }
  .Heading {
    font-size: 32px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    line-height: 1.15;
    text-transform: none;
    text-decoration: none;
  }
  
  @media (max-width: 991px) {
    .testimonal {
      padding-top: var(--dl-space-space-threeunits);
      padding-left: var(--dl-space-space-oneandhalfunits);
      padding-right: var(--dl-space-space-oneandhalfunits);
      padding-bottom: var(--dl-space-space-threeunits);
    }
    .template-button {
      margin-bottom: var(--dl-space-space-twounits);
      width: 80%;
    }
    .title {
      font-size: 48px;
      line-height: 60px;
    }
  }

  @media (max-width: 767px) {
    .card {
      padding-top: var(--dl-space-space-threeunits);
      margin-right: 0px;
      padding-bottom: var(--dl-space-space-threeunits);
    }
    .testimonal {
      max-width: 100%;
    }
    .title {
      font-size: 28px;
      line-height: 36px;
      text-align: left;
    }
  }

  @media (max-width: 479px) {
    .card {
      margin-right: 0px;
      margin-bottom: 0px;
    }
    .pill {
      width: 130px;
      height: 60px;
    }
    .title {
      font-size: 32px;
      line-height: 48px;
      margin-bottom: var(--dl-space-space-unit);
    }
    .template-button {
      padding-left: var(--dl-space-space-oneandhalfunits);
      padding-right: var(--dl-space-space-oneandhalfunits);
      background: ${({ theme }) => theme.colors.secondary};
    }
  }  
`;
export default GlobalStyle;
