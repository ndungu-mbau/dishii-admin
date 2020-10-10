import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link, useLocation } from 'react-router-dom'

import useGlobalState, { constants } from "../../utils/state"

import { LIST, CREATE_ORDER } from './queries'

import CardList from '../../components/cardlist'
import Navbar from "../../components/navbar"

const List = props => {
  const { data, loading, error } = useQuery(LIST)
  const [createOrder] = useMutation(CREATE_ORDER)
  const { dispatch } = useGlobalState()
  const location = useLocation()

  useEffect(() => {
    const fn = async () => {
      const { data } = await createOrder({ variables: {
        order: {
          session: window.sessionStorage.getItem("session"),
          status: "NEW"
        }
      }})
      console.log(data)
      dispatch({ type: constants.SET_ORDER, payload: { order: data.orders.create.id }})
      window.sessionStorage.setItem("order", data.orders.create.id)
    }

    if(location.state.setOrder === true){
      fn()
    }
  }, [])

  if (loading) return 'Loading...'
  console.log({ data, loading, error })


  return (
    <>
      <Navbar title="Menus" links={data.menus.map(menu => ({ title: menu.name, link: `menus/${menu.id}` }))} />
      <nav class='navbar navbar-top navbar-expand navbar-dashboard bg-success p-2 mb-3' style={{ borderRadius: 0 }}>
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
              title='Menus'
              data={data.menus}
              pagination={12}
            >
              {row => {
                return (
                  <div key={row.id} className='col-md-3 my-3'>
                    <div class='card'>
                      <img src={row.image} class='card-img-top' alt='...' />
                      <div class='card-body'>
                        <h5 class='card-title'>{row.name}</h5>
                        <Link to={`${location.pathname}/${row.id}`} class='btn btn-primary'>
                          View Menu
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
