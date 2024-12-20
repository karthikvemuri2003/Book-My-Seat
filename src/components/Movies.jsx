import React from 'react'
import { useGetMoviesQuery } from '../services/usersApi'
import { Link } from 'react-router-dom';
import "./Movies.css"
import Sid from './Sid';
function Movies() {
    var { isLoading,data }=useGetMoviesQuery();
    console.log(isLoading)
    console.log(data);
  return (
    <div style={{display:"flex"}}>

      <div>
        <Sid></Sid>
      </div>
      <div>
      <h1>Movies</h1>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzB0hoD9bpRG2qQp6K1nix0UwZsE2_75hqaQ&s" className='w-100'style={{height:"70px"}} /> */}
      <div class="row row-cols-1 row-cols-md-4 g-3">
      {
        data?.map((k)=>{
            return(
                <div class="col" style={{height:"600px"}}>
    <div class="card h-75 w-100 m-5 h-100">
      <img src={k.image} class="card-img-top w-100" style={{height:"300px"}}/>
      <div class="card-body">
        <h1 class="card-title">Name:{k.movieName}</h1>
        <h5 class="card-title">Venue:{k.venue}</h5>
        <p class="card-text">Price:{k.price}</p>
        <Link to={`/${k._id}`}><button className='btn btn-info'>view..</button></Link>
      </div>
    </div>
  </div>
            )
        })
        }

  </div>
        </div>
    </div>
  )
}

export default Movies
