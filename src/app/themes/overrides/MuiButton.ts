import { palette } from '../common';

export default {
  styleOverrides: {
    root: {
      minHeight: '0',
      height: 'auto',
      padding: '12px 12px',
      boxShadow: 'none',
      textTransform: 'none',
      borderRadius: '16px',
    },
    contained: {
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '19px',
      borderBottom: '4px solid rgba(23, 18, 40, 0.2)',
    },
    outlined: {
      borderColor: palette.primary.main,
      color: palette.primary.main,
      backgroundColor: 'transparent',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '19px',
    }
  }
};
