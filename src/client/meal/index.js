import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useParams, Link } from 'react-router-dom'

import { LIST } from './queries'
import Navbar from "../../components/navbar"

const Meal = props => {
  const { meal, id } = useParams()
  const { data, loading, error } = useQuery(LIST, {
    variables: {
      meal: {
        id: meal
      }
    }
  })

  const [number, setNumber] = useState(0)

  if (loading) return 'Loading...'

  return (
    <>
      <Navbar
        title={data.meal.name}
        links={[{
          title: 'Menus',
          link: '',
          icon: 'chevron-left'
        }, {
          title: data.meal.menu.name,
          link: `/${id}`,
          icon: 'chevron-left'
        }]}
      />
      <div className='container mt-5'>
        <div class='row'>
          <div class='col-8 border-right'>
            <div className="row">
              <div className="col-md-6">
                <img className="img-responsive" src={data.meal.img} />
              </div>
              <div className="col-md-6">
                <h1 className="display-2">{data.meal.name}</h1>
                <h3 className="display-4 text-success">Price: Ksh. {data.meal.price}</h3>
              </div>
            </div>
            <hr />
            <div className="row">
              <p className="lead">{data.meal.description}</p>
            </div>
          </div>
          <div className="col-md-4 order-1">
            <h3 className="text-center">Add to Order</h3>
            <hr />
            <ul>
              {data.meal.items.map(item => (<li>{item}</li>))}
            </ul>
            <div class="mb-3">
              <label>Number <input type="number" class="form-control" value={number} onChange={e => setNumber(e.target.value)} /></label>
            </div>
            <button className="btn btn-lg btn-success" type="button">
              <span class="fas fa-check mr-2"></span>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Meal
