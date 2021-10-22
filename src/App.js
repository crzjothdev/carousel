import React from 'react';
import { ThemeProvider } from '@material-ui/styles'

import Carrousel from './Carousel';
import { banners } from './mock';
import theme from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Carrousel items={banners} />
    </ThemeProvider>
  )
}
