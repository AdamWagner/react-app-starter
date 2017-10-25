import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import Example from '../Example';

function handleUpdate() {
  let {action} = this.state.location;
  if (action === 'PUSH') {
    console.log('scrolling on route change');
    window.scrollTo(0, 0);
  }
}

const routes = (
  <BrowserRouter componentDidUpdate={handleUpdate}>
    <Switch>
      <Route path="/example" component={Example} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default routes;
