import React from 'react'

import './css/App.css'
import './css/NewsletterOverride.css'

import NewsletterCSSInJS from './NewsletterCSSInJS'
import NewsletterInline from './NewsletterInline'
import NewsletterStylesheets from './NewsletterStylesheets'
// import NewsletterModule from './NewsletterModule'

import { ThemeProvider } from './ThemeProvider'
import {
  CSSProperties,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
// import { ThemeProvider as ModuleThemeProvider } from '@friendsofreactjs/react-css-themr'
// const css = require('./css/NewsletterOverride.module.css')

const newsletterStyler: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '60px',
}

const theme = {
  header: {
    fg: '#ff598a',
  },
  input: {
    color: '#fff',
    background: '#070222',
    textAlign: 'center',
  },
  inputFocus: {
    outline: '2px solid #5e9fff',
  },
}

function App() {
  return (
    <div className="app__newsletter">
      <div style={newsletterStyler}>
        <StyledThemeProvider theme={theme}>
          <NewsletterCSSInJS />
        </StyledThemeProvider>
        <ThemeProvider theme={theme}>
          <NewsletterInline />
          <NewsletterStylesheets />
        </ThemeProvider>
        {/* <ModuleThemeProvider theme={{ NewsletterModule: css }}>
          <NewsletterModule />
        </ModuleThemeProvider> */}
      </div>
    </div>
  )
}

export default App
