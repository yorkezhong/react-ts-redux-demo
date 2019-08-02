import React from 'react'
// import { Route, Switch} from 'react-router';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import routers from './router/index.js';
// import Layouts from './views/layout';

const App = () => {
  return (
    <BrowserRouter basename='/'>
        
      <Switch>
        {routers.map((r, key) => (
        //  <Link to="/about">About</Link>
          <Route
            component={r.component}
            exact={!!r.exact}
            key={key}
            path={r.path}
          />
        ))}

      </Switch>
      {/* <Route path={`/`} component={Index}></Route>
        <Route path={`/my`} component={My}></Route> */}

    </BrowserRouter>
  )
}
export default App

