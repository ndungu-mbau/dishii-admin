import React from "react"
import { Switch, Route } from "react-router-dom"

import dashboard from "./dashboard"

import NavBar from '../components/navbar'

const routes = [
  {
    title: 'Dashboard',
    icon: 'chart-pie',
    link: '/admin'
  },
  {
    title: 'Menus',
    icon: 'book-reader',
    link: '/admin/menus'
  },
  {
    title: 'Meals',
    icon: 'hamburger',
    link: '/admin/meals'
  },
  {
    title: 'Tables',
    icon: 'table',
    link: '/admin/tables'
  }
]

export default props => {
  return (
    <>
      <NavBar title="Admin Dashboard" links={routes} />
      <main className="content">
        <Switch>
          <Route path="/admin" exact component={dashboard} />
        </Switch>
      </main>
    </>
  )
}