export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  numbers:  { [key in keyof typeof numbers]: string };
  breakpoints: { [key in keyof typeof breakpoints]: string };
  links:  { [key in keyof typeof links]: string };
  store:  { [key in keyof typeof store]: number };

}

const colors = {
  primary: '#DD79CE',
  secondary: '#E88FDA',
  tertiary: '#DC8FD1',
  quartiary: '#77b470',
  blackLow: '#515151',
  navLink: '#720455',
  subTitles: '#D68386',
  navBar: '#f5f5f5',
  filters: '#f5f5f5',
  check:'#1CAC21',
  black: '#000',
  gray: '#656565',
  white: '#fff',
  agendaments: '#fdb42b',
};

const numbers = {
  whatsapp: '+5547996277454',
}

const links = {
  instagram: 'santaregina',
  maps: 'https://maps.app.goo.gl/1RXSZkxAZiBSx68M6'
}

const store = {
  open: 8,
  close: 22,
}

const breakpoints = {
  mobile: '480px',
  tablet: '885px',
  desktop: '1440px',
};


const theme: StyleClosetTheme = {
  colors,
  numbers,
  breakpoints,
  links,
  store,
};

export { theme };