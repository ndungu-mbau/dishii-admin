import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useHistory } from "react-router-dom"

import useGlobalState, { constants } from "../../utils/state"

import { LIST_TABLES, CREATE_SESSION } from './queries'

import CardList from '../../components/cardlist'

const List = props => {
  const { data, loading, error } = useQuery(LIST_TABLES)
  const [createSession] = useMutation(CREATE_SESSION)
  const { dispatch } = useGlobalState()
  const history = useHistory()

  const onClick = async ({ id: table }) => {
    const { data } = await createSession({ variables: {
      session: {
        table
      }
    }})
    console.log(data.sessions.create.id)
    dispatch({ type: constants.SET_SESSION, payload: { session: data.sessions.create.id }})
    window.sessionStorage.setItem("session", data.sessions.create.id)
    history.push({
      pathname: "/client/menus",
      state: {
        setOrder: true
      }
    })
  }

  if (loading) return 'Loading...'
  console.log({ data, loading, error })

  return (
    <>
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
              title='Tables'
              data={data.tables}
              pagination={12}
            >
              {row => {
                return (
                  <div key={row.id} className='col-md-3 my-3'>
                    <div class='card'>
                      <div class='card-body'>
                        <h5 class='card-title'>{row.number}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Seat number: {row.seats}</h6>
                        <button onClick={() => onClick(row)} class='btn btn-primary'>
                          Book Table
                        </button>
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
