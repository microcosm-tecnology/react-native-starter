export const theme = {
  colors: {
    primary: '#F83060',
    secondary: '#E84B28',
    black: '#3c404a',
    gray: {
      darker: '#3c414b',
      dark: '#58606e',
      regular: '#7a8598',
      light: '#CFCFCF',
      lighter: '#E3E3E3',
      placeholder: '#a3a3a3'
    },
    danger: '#F83060',
    warning: '#ff9159',
    info: '#6654ff',
    success: '#2CD15A',
    greenLight: '#88CB1C'
  },
  general: {
    borderRadius: '4px',
    borderWidth: '1px',
    headerHeight: '75px',
    mainPadding: '18px'
  },
  LIGHT: {
    gradStart: '#1a1a1a',
    gradStop: '#1a1a1a'
  },
  DARK: {
    gradStart: '#232323',
    gradStop: '#1a1a1a'
  },
  modal: {
    backdropColor: 'rgba(30, 30, 30, .85)'
  },
  zIndex: {
    header: 1000,
    headerFixed: 1030,
    modalBg: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070
  },
  shadows: {
    level1: `0px 10px 15px rgba(255, 40, 39, 0.3);`,
    level2: `0px 2px 10px rgba(0, 0, 0, 0.05);`,
    level3: `0 27px 45px #aaaaaa`
  },
  font: {
    size: {
      base: 16,
      h1: 32,
      h2: 28,
      h3: 24,
      h4: 18,
      h5: 16,
      h6: 14,
      small: 12,
      smaller: 10
    },
    lineHeight: {
      base: 1.38,
      reduced: 1.2,
      increased: 1.5,
      double: 2
    },
    letterSpacing: {
      base: 'normal',
      accent: '0.2em'
    },
    family: {
      text: 'Inter',
      header: 'Inter',
      accent: 'Inter',
    }
  },
};

export default theme;
