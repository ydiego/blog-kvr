import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageNotFound from './pages/404'
import Home from './pages/home'
import Routes from './routes'

function App() {
  return (
    <Router>
      <Switch>
        {
          <Home>
            {
              Routes.map((route, index) => {
                return (
                  <Route
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    component={route.component}
                    key={index}
                  ></Route>
                )
              })
            }
          </Home>
        }
        <Route path='' component={PageNotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
