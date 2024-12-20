import React from 'react'
import { Link } from 'react-router-dom'
function Sid() {
  return (
    <div>
      <div class="accordion " id="accordionPanelsStayOpenExample">
  <div class="accordion-item" className='bg-info'>
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <h1>Filters</h1>
      </button>
      <h5>Languges</h5>
      <h5>Telugu</h5><input type="checkbox" name="" id="" /><Link to={"/filter"}>telugu</Link>
      <h5>Hindi</h5><input type="checkbox" name="" id="" />
      <h5>English</h5><input type="checkbox" name="" id="" />
    </h2>
</div>
</div>
    </div>
  )
}

export default Sid
