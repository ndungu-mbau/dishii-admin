import React from 'react'

import { Switch, Route } from 'react-router-dom'

import menus from './menus'
import meals from './meals'
import meal from './meal'

export default props => {
  return (
    <main className='content'>
      <Switch>
        <Route path='/' exact component={menus} />
        <Route path='/:id' exact component={meals} />
        <Route path='/:id/:meal' exact component={meal} />
      </Switch>
    </main>
  )
}
