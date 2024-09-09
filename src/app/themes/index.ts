import { ruRU as coreRuRu } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

import { palette, typography } from './common';
import {
  MuiBackdrop,
  MuiButton,
  MuiDialogActions,
  MuiDialogContent,
  MuiDialogTitle,
  MuiFormLabel,
  MuiIconButton,
  MuiInputBase,
  MuiOutlinedInput,
  MuiPagination
} from './overrides';

const theme = createTheme(
  {
    palette,
    typography,

    components: {
      //@ts-expect-error: TODO все правильно, тайпскрипт просто ругается сам по себе
      MuiButton,
      MuiInputBase,
      //@ts-expect-error: TODO все правильно, тайпскрипт просто ругается сам по себе
      MuiDialogTitle,
      MuiDialogContent,
      MuiDialogActions,
      MuiOutlinedInput,
      MuiPagination,
      MuiBackdrop,
      MuiIconButton,
      MuiFormLabel,
      MuiDialog: {
        styleOverrides: {
          root: {
            '& > .MuiDialog-container': {
              '& > .MuiPaper-root': {
                background: 'rgba(19, 15, 38, 1)',
                padding: '16px 0 12px',
                marginLeft: '20px',
                marginRight: '20px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }
            }
          }
        }
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            background: 'rgba(15, 12, 29, 1)',
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: '400',
          },
          popper: {
            zIndex: '999',
          },
          arrow: {
            color: 'rgba(15, 12, 29, 1)',
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          root: {},
          paper: {
            background: 'rgba(19, 15, 38, 1)',
            borderRadius: '24px 24px 0 0',
            padding: '20px 20px 50px',
            borderTop: '6px solid rgba(255, 255, 255, 0.05)',
          }
        }
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            background: 'rgba(15, 12, 29, 1)',
            padding: '16px 12px',
            borderRadius: '16px',
          },
        }
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            minHeight: '0',
            margin: 0,
            padding: 0,

            '&.Mui-expanded': {
              minHeight: '0',
              margin: '0 0 12px',
            },
          },
          content: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: '700',
            color: palette.primary.main,
            margin: 0,
            padding: 0,
            '&.Mui-expanded': {
              margin: '0px',
            }
          }
        }
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: '12px 0 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: '0',
            background: 'rgba(15, 12, 29, 1)',
            borderRadius: '140px',
          },
          indicator: {
            display: 'none',
          },
          flexContainer: {
            padding: '4px',
            gap: '8px',
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            padding: '8px 20px',
            borderRadius: '60px',
            color: '#fff',
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: '700',
            textTransform: 'none',
            minHeight: '0',
            height: 'auto',
            backgroundColor: 'transparent',
            transition: 'background-color .2s linear',

            '&.Mui-selected': {
              border: 'none',
              color: '#fff',
              backgroundColor: palette.primary.main
            }
          }
        }
      },
    },
  },
  coreRuRu
);

export default theme;
