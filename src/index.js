import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components'
import {Provider} from 'rebass'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
  // * + * { margin-top: 1.5em; }
`

ReactDOM.render(
  <Provider><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
