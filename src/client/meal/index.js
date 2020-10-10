import React, { useState } from 'react'
import swal from "sweetalert"
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useHistory, useParams } from 'react-router-dom'

import { LIST, ADD_MEAL } from './queries'
import Navbar from "../../components/navbar"

const Meal = props => {
  const history = useHistory()
  const { meal, id } = useParams()
  const { data, loading, error } = useQuery(LIST, {
    variables: {
      meal: {
        id: meal
      }
    }
  })

  const [number, setNumber] = useState(0)
  const [addMeal] = useMutation(ADD_MEAL)

  const onClick = async () => {
    const { data } = await addMeal({
      variables: {
        instance: {
          meal,
          amount: parseInt(number),
          order: window.sessionStorage.getItem("order")
        }
      }
    })

    if(data){
      swal({
        title: "Meal added",
        text: "The meal has been added to your order. Do you want to order more?",
        icon: "success",
        buttons: [{
          text: "No",
          value: null,
          visible: true,
          className: "btn-secondary",
          closeModal: true,
        },{
          text: "OK",
          value: true,
          visible: true,
          className: "btn-primary",
          closeModal: true
        }]
      }).then(val => {
        if(val) history.push({
          pathname: '/client/menus',
          state: {
            setOrder: false
          }
        })
        else history.push(`/client/order/${window.sessionStorage.getItem("order")}`)
      })
    }
  }

  if (loading) return 'Loading...'

  return (
    <>
      <Navbar
        title={data.meal.name}
        links={[{
          title: 'Menus',
          link: '/client/menus',
          icon: 'chevron-left'
        }, {
          title: data.meal.menu.name,
          link: `/client/menus/${id}`,
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
            <button className="btn btn-lg btn-success" type="button" onClick={onClick}>
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
