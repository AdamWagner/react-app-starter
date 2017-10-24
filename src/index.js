import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'rebass';
import theme from './styleConfig/theme';


import { injectGlobal } from 'styled-components'

// Global styles
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider theme={theme}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <Provider theme={theme}>
        <NextApp />
      </Provider>,
      rootEl
    )
  })
}

registerServiceWorker();
