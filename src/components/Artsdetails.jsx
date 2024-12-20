import React from 'react'
import { useGetartsdetailsQuery } from '../services/usersApi'
import { useParams } from 'react-router-dom'

function Artsdetails() {
    var {id}=useParams()
    var {isLoading,data}=useGetartsdetailsQuery(id)
  return (
    <div>
      <div>
      <div class="row row-cols-1 row-cols-md-3 g-4" id='d1'>
      <h1>Artsdetails</h1>
  <div class="col">
    <div class="card" id='d1'>
      <img src={data?.image} class="card-img-top"/>
      <div class="card-body">
        <h1 class="card-title">{data?.title}</h1>
        <h5 class="card-title">{data?.category}</h5>
        <p class="card-text">{data?.description}</p>
        <p class="card-text">{data?.venue}</p>
        <p class="card-text">{data?.languge}</p>
        <p class="card-text">{data?.price}</p>
        <p class="card-text">{data?.location}</p>
      </div>
    </div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Artsdetails
