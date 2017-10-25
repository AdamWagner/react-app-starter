import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "rebass";
import theme from "./styleConfig/theme";

import { injectGlobal } from "styled-components";

// Global styles
injectGlobal`
  * { box-sizing: border-box; -webkit-font-smoothing: antialiased;}
  body { margin: 0; }
`;

let root = document.getElementById("root");
ReactDOM.render(<Provider theme={theme}>{routes},</Provider>, root);

// skips page refresh when developing locally
if (module.hot) {
  module.hot.accept("./config/routes", () => {
    const NextApp = require("./config/routes").default;
    ReactDOM.render(
      <Provider theme={theme}>
        <NextApp />
      </Provider>,
      root
    );
  });
}

registerServiceWorker();
