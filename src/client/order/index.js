import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory, useLocation, useParams } from 'react-router-dom'

import { LIST } from './queries'

import Datatable from '../../components/datatable'
import Navbar from "../../components/navbar"

const List = props => {
  const history = useHistory()
  const location = useLocation()
  const { id } = useParams()
  const { data, loading, error } = useQuery(LIST, {
    variables: {
      order: {
        id
      }
    }
  })

  if (loading) return 'Loading...'

  return (
    <>
      <Navbar
        title={`Order no. ${data.order.number}`}
        links={[{
          title: 'Add Order',
          link: {
            pathname: '/client/menus',
            state: {
              setOrder: true
            }
          },
          icon: 'chevron-left'
        }]}
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
        <div className="row mb-3">
          <div className="col d-flex justify-content-end">
            <button className="btn btn-secondary m-2" onClick={() => history.push({ pathname: '/client/menus', state: { setOrder: true }})}>Add Order</button>
            <button className="btn btn-primary m-2" onClick={() => history.push({ pathname: `/client/session/${data.order.session.id}` })}>Session</button>
          </div>
        </div>
        <div className="row mb-4">
          <div class="col-12 col-sm-6 col-xl-4 mb-4">
              <div class="card border-light shadow-sm">
                  <div class="card-body">
                      <div class="row d-block d-xl-flex align-items-center">
                          <div class="col-12 col-xl-7 px-xl-0">
                              <div class="d-none d-sm-block">
                                <h2 class="h5">Order Number</h2>
                                <h3 class="mb-1">{data.order.number}</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3 mb-4">
              <div class="card border-light shadow-sm">
                  <div class="card-body">
                      <div class="row d-block d-xl-flex align-items-center">
                          <div class="col-12 col-xl-7 px-xl-0">
                              <div class="d-none d-sm-block">
                                <h2 class="h5">Order Status</h2>
                                <h3 class="mb-1">{data.order.status}</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3 mb-4">
              <div class="card border-light shadow-sm">
                  <div class="card-body">
                      <div class="row d-block d-xl-flex align-items-center">
                          <div class="col-12 col-xl-7 px-xl-0">
                              <div class="d-none d-sm-block">
                                <h2 class="h5">Order Total</h2>
                                <h3 class="mb-1">{`Ksh. ${data.order.total}`}</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-2 mb-4">
              <div class="card border-light shadow-sm">
                  <div class="card-body">
                      <div class="row d-block d-xl-flex align-items-center">
                          <div class="col-12 col-xl-7 px-xl-0">
                              <div class="d-none d-sm-block">
                                <h2 class="h5">Items</h2>
                                <h3 class="mb-1">{data.order.meals.map(({ amount }) => amount).reduce((acc, i) => acc + i, 0)}</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div class='row justify-content-md-center'>
          <div class='col-12 mb-4'>
            <Datatable
              title={`Order no. ${data.order.number}`}
              data={data.order.meals}
              pagination={12}
              headers={[{
                key: 'meal',
                label: 'Meal'
              },{
                key: 'price',
                label: 'Meal Price'
              },{
                key: 'amount',
                label: 'Number'
              },{
                key: 'subtotal',
                label: 'SubTotal'
              }]}
            >
              {row => {
                return (
                  <tr key={row.id}>
                    <td>{row.meal.name}</td>
                    <td>{`Ksh. ${row.meal.price}`}</td>
                    <td>{row.amount}</td>
                    <td>{`Ksh. ${row.amount * row.meal.price}`}</td>
                  </tr>
                )
              }}
            </Datatable>
          </div>
        </div>
      </div>
    </>
  )
}

export default List
