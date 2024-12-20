import React from 'react'

function Addevnts() {
  return (
    <div>
      <h1>Add Arts</h1>
      <form action='http://localhost:4800/addarts' method='post'>
        <input type="text" name="category"/>:category
        <input type="text" name="title"/>:title
        <input type="text" name="image"/>:image
        <input type="text" name="price"/>:price
        <input type="text" name="location"/>:location
        <input type="text" name="venue"/>:venue
        <input type="text" name="languge"/>:languge
        <input type="text" name="description"/>:description
        <input type="text" name="eventdata"/>:eventdata
        <button>submit</button>
      </form>
    </div>
  )
}

export default Addevnts
