import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

// import './index.css'
import { ThemeProvider } from 'theme-ui'
import base from '@reflexjs/preset-base'

import Routes from 'src/Routes'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <ThemeProvider theme={base}>
        <Routes />
      </ThemeProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
