import React from 'react'

import { Switch, Route } from 'react-router-dom'

import menus from './menus'
import meals from './meals'
import meal from './meal'
import tables from "./tables"

export default props => {
  return (
    <main className='content'>
      <Switch>
        <Route path='/client/' exact component={tables} />
        <Route path='/client/menus' exact component={menus} />
        <Route path='/client/menus/:id' exact component={meals} />
        <Route path='/client/menus/:id/:meal' exact component={meal} />
      </Switch>
    </main>
  )
}
