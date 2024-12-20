import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="bg-info" style={{height:"700px"}}>
      <div>
    <h1>Dashboard</h1>
    <div >
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Link to={"/movies"}>
  <div class="card" style={{width:"300px" ,height:"300px"}}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloE8UXGiHtOErSlseX8HYkx-Vb0gY9mXTG8Nfb0BfyLTodOQ_P0fijwhqKkanxyL-XGw&usqp=CAU" class="card-img-top " alt="..."/>
<div class="card-body">
  <h1 className='text-success'>Movies</h1>
</div>
</div></Link>

  <Link to={"/arts"}><div class="card">
<div style={{width:"300px" ,height:"300px"}}>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZLgoCP7Up6dwj_K7X_EeLbPE662GCQNH6A&s" class="card-img-top" alt="..."/>
<div class="card-body">
  <h1 className='text-success'>Arts</h1>
</div>
</div>
</div>
</Link>

  <Link to={"/events"}><div class="card ">
<div style={{width:"300px" ,height:"300px"}}>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjEfiS9Y9yGkhK9D2I4-BDvI1BMmPSxLlXA&s" class="card-img-top" alt="..."/>
<div class="card-body">
  <h1 className='text-success'>Events</h1>
</div>
</div>
</div>
</Link>
      </div>
    </div>
  </div></div>
  )
}

export default Dashboard
