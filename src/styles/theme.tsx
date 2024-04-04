import {ThemeOptions, Shadows} from '@mui/material'

export const THEME: ThemeOptions = {
  typography: {
    fontFamily: 'euclidCircularA, sans-serif',
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: 0,
      lineHeight: 1,
    },
  },
  palette: {
    text: {
      primary: '#333',
      secondary: '#888',
    },
    background: {
      default: '#fff',
    },
    primary: {
      main: '#e21266',
    },
    secondary: {
      main: '#332c81',
    },
  },
  shape: {borderRadius: 12},
  shadows: Array(25).fill('none') as Shadows,
  components: {
    MuiStack: {
      defaultProps: {
        direction: 'row',
        alignItems: 'center',
        spacing: 1.5,
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeMedium: {
          fontSize: 18,
        },
        sizeSmall: {
          fontSize: 16,
          minHeight: 36,
          borderRadius: 36,
        },
        sizeLarge: {
          fontSize: 18,
          minHeight: 52,
          borderRadius: 52,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          fontSize: 12,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          marginBottom: 36,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: '#332c81',
        },
      },
    },
    MuiRating: {
      defaultProps: {
        readOnly: true,
        precision: 0.1,
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
        color: 'secondary',
      },
    },
  },
}
