import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store'
import { Cards, Cart } from './components'
import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Cards />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
