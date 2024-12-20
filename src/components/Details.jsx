import React from 'react'
import { useGetdetailsQuery } from '../services/usersApi'
import { useParams } from 'react-router-dom'
import "./Details.css";
import Sid from './Sid';

function Details() {
  var {id}=useParams()
  var { isLoading,data}=useGetdetailsQuery(id)
  console.log(data)
  return (
    <div id='d1' >
      {/* <i>details</i><div>
      <h1>Movies</h1> */}
      <div>
      {
        isLoading&&<h1>Loading</h1>
      }
   <div>





    <div className='text-success'>
      <img src={data?.image} className='w-50'/>
        <h1>MovieName{data?.movieName}</h1>
        <i>Hero Name{data?.heroName}</i>
        <li><i>Venue{data?.venue}</i></li>
        <li><i>MovieType{data?.movieType}</i></li>
        <li><i>Time{data?.time}</i></li>
        <li><i>Date{data?.date}</i></li>
        <li><i>Languge{data?.languge}</i></li>
        <li><i>Price{data?.price}</i></li>
        <li><p>Description{data?.description}</p></li>
      <div>
    </div>
  </div>
  </div>
        </div>
    </div>
  )
}

export default Details
