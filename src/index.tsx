import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import routes from './routes'

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
