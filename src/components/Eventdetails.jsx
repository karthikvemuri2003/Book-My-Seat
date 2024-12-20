import React from 'react'
import { useParams } from 'react-router-dom'
import { useGeteventdetailsQuery } from '../services/usersApi';

function Eventdetails() {
    var {id}=useParams();
    var {isLoading,data}=useGeteventdetailsQuery(id)
  return (
    <div id='d1'>
      <div>
      <h1>artsdetails</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4" id='d1'>
  <div class="col">
    <div class="card" id='d1'>
      <img src={data?.image} class="card-img-top"/>
      <div class="card-body">
        <h1 class="card-title">{data?.evnt_title}</h1>
        <h5 class="card-title">{data?.event_name}</h5>
        <p class="card-text">{data?.host_name}</p>
        <p class="card-text">{data?.description}</p>
        <p class="card-text">{data?.price}</p>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Eventdetails

