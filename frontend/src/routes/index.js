import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '../pages/Box';
import Main from '../pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  );
}
