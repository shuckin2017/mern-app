import { createMuiTheme } from "@material-ui/core/styles"
import pathRegular from '../assets/fonts/RubikRegular.woff2';

class Font {
  constructor(fname, fstyle, fweight, furl) {
    this.fname = fname;
    this.fstyle = fstyle;
    this.fweight = fweight;
    this.furl = furl;

    return {
      fontFamily: this.fname,
      fontStyle: this.fstyle,
      fontDisplay: 'swap',
      fontWeight: this.fweight,
      src: `
                local(${this.fname}),
                url(${this.furl}) format('woff2')
            `,
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
    }
  }
};

const rubikRegular = new Font('Rubik', 'normal', 400, pathRegular);

const mainTheme = createMuiTheme({
  typography: {
    fontFamily: 'Rubik',
    fontSize: 14,
    body1: {
      fontWeight: 400
    },
    h1: {
      fontSize: 32,
      fontWeight: 700,
      color: '#444'
    }
  },
  // Если используется СssBaseline то для него нужно изменить шрифт глобально, если не используем то код ниже не пишем
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [rubikRegular],
      },
    },
  },
});

export default mainTheme