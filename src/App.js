import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Cards, Cart } from './components'
import './App.scss'

const App = () => {
  return (
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
  )
}

export default App
