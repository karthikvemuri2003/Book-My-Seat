import React from 'react'
import { useGetartsQuery } from '../services/usersApi'
import { Link } from 'react-router-dom';

function Arts() {
    var {isLoading,data}=useGetartsQuery();
  return (
    <div id='d1'>
      <h1>Arts</h1>
      <div>
        {
            data?.map((k)=>{
                return(
                    <div className='continer' style={{display:"flex", width:"500px"}}>
                        <div class="row row-cols-2 row-cols-md-2 g-4" style={{display:"Wrap"}}>
                          <div class="col">
                           <div class="card">
                            <img src={k.image} class="card-img-top"/>
                             <div class="card-body">
                            <h1 class="card-title">{k.title}</h1>
                            <h5 class="card-title">{k.venue}</h5>
                               <p class="card-text">{k.price}</p>
                               <Link to={`/arts/${k._id}`}><button className='btn btn-info'>details</button></Link>
                               </div>
                                  </div>
                        </div>
                     </div>

                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Arts