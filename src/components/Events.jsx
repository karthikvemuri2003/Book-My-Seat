import React from 'react'
import { useGetEventsQuery } from '../services/usersApi'
import { Link } from 'react-router-dom'

function Events() {
    var {isLoading,data}=useGetEventsQuery()
  return (
    <div id='d1'>
      <h1>Lived Events</h1>
      <div>
        {
            data?.map((k)=>{
                return(
                    <div>
                        <div class="col">
                          <div class="card h-100 w-25">
                            <img src={k.image} class="card-img-top w-100" height={"300px"}/>
                              <div class="card-body">
                                 <h5 class="card-title">{k.event_title}</h5>
                                    <p class="card-text">{k.host_name}</p>
                                        <Link to={`/events/${k._id}`}><button className='btn btn-info'>details</button></Link>
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

export default Events
