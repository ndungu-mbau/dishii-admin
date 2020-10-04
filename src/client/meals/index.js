import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'

import { LIST } from './queries'

import CardList from '../../components/cardlist'
import Navbar from "../../components/navbar"

const List = props => {
  const history = useHistory()
  const location = useLocation()
  const { id } = useParams()
  const { data, loading, error } = useQuery(LIST, {
    variables: {
      menu: {
        id
      }
    }
  })

  if (loading) return 'Loading...'

  return (
    <>
      <Navbar
        title={data.menu.name}
        links={data.menu.meals.map(meal => ({ title: meal.name, link: `${location.pathname}/${meal.id}` }))}
      />
      <nav
        class='navbar navbar-top navbar-expand navbar-dashboard bg-success p-2 mb-3'
        style={{ borderRadius: 0 }}
      >
        <div class='container px-0'>
          <div
            class='d-flex justify-content-between w-100'
            id='navbarSupportedContent'
          >
            <div class='d-flex'>
              <form class='navbar-search form-inline' id='navbar-search-main'>
                <div class='input-group input-group-merge search-bar'>
                  <span class='input-group-text' id='topbar-addon'>
                    <span class='fas fa-search'></span>
                  </span>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Search'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div class='row justify-content-md-center'>
          <div class='col-12 mb-4'>
            <CardList
              title={data.menu.name}
              data={data.menu.meals}
              pagination={12}
              row_count={3}
            >
              {row => {
                return (
                  <div key={row.id} className='col-md-3 my-3'>
                    <div class='card'>
                      <img src={row.img} class='card-img-top' alt='...' />
                      <div class='card-body'>
                        <h5 class='card-title'>{row.name}</h5>
                        <p>{row.price}</p>
                        <Link to={`${location.pathname}/${row.id}`} class='btn btn-primary'>
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }}
            </CardList>
          </div>
        </div>
      </div>
    </>
  )
}

export default List
