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
      session: {
        id
      }
    }
  })

  if (loading) return 'Loading...'

  return (
    <>
      <Navbar
        title="Session"
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
        <div className="row mb-4">
          <div class="col-12 col-sm-6 col-xl-6 mb-4">
              <div class="card border-light shadow-sm">
                  <div class="card-body">
                      <div class="row d-block d-xl-flex align-items-center">
                          <div class="col-12 col-xl-7 px-xl-0">
                              <div class="d-none d-sm-block">
                                <h2 class="h5">Session Start Time</h2>
                                <h3 class="mb-1">{data.session.start_time}</h3>
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
                                <h2 class="h5">Table</h2>
                                <h3 class="mb-1">{data.session.table.number}</h3>
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
                                <h2 class="h5">Session Total</h2>
                                <h3 class="mb-1">{`Ksh. ${data.session.orders.reduce((acc, order) => acc + order.total, 0)}`}</h3>
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
              title="Customer Session"
              data={data.session.orders}
              pagination={12}
              headers={[{
                key: 'number',
                label: 'Order Number'
              },{
                key: 'meals',
                label: 'Meals'
              },{
                key: 'total',
                label: 'Total'
              }]}
            >
              {row => {
                return (
                  <tr key={row.id}>
                    <td>{row.number}</td>
                    <td>{row.meals.map(({ amount }) => amount).reduce((acc, i) => acc + i, 0)}</td>
                    <td>{`Ksh. ${row.total}`}</td>
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
