import React, { useState } from 'react';
import home from './home';
import cpu from './components/parts/cpu'
import {
  BrowserRouter,
  Switch, 
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/cpu" component={cpu} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;