import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Loaders} from "./Loaders/Loaders"
import {useRoutes} from "../routes";

const App = () => {
  const routes = useRoutes()

  return (
      <Suspense fallback={<Loaders/>}>
        {/*<Router basename='/'>*/}
        <Router>
          {routes}
        </Router>
      </Suspense>
  );
}

export default App;
