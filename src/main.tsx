import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter as Router} from 'react-router-dom'
import {
  ThemeProvider,
  CssBaseline,
  StyledEngineProvider,
  createTheme,
} from '@mui/material'

import '#styles/index.scss'
import {App, ScrollToTop, NotistackSnackbars, queryClient} from '#base'
import {THEME} from '#styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createTheme(THEME)}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <Router>
            <App />
            <ScrollToTop />
            <NotistackSnackbars />
          </Router>
        </StyledEngineProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
