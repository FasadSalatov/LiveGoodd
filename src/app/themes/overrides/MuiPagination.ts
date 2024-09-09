import { palette } from '../common';

export default {
  styleOverrides: {
    root: {
      '& .MuiPaginationItem-root': {
        minWidth: 52,
        minHeight: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        opacity: 1,

        fontSize: 16,
        fontWeight: 400,
        lineHeight: 'normal',
        textAlign: 'center',

        '&.Mui-selected': {
          backgroundColor: palette.primary.main,
          color: palette.secondary.main,
        },
        '&.Mui-disabled': {
          color: '#E6E6E6'
        },
      },
      '& .MuiPaginationItem-ellipsis': {
        color: palette.primary.main,
      },
    },
  }
};
