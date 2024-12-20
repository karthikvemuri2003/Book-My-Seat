import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/dashboard">Home</Link>
        <Link class="nav-link" to="/login">login</Link>
        <Link class="nav-link" to="/singup">singup</Link>
        <Link class="nav-link" to="/upload">upload</Link>
        <Link class="nav-link" to="/movies">movies</Link>
        <Link class="nav-link" to="/events">events</Link>
        <Link class="nav-link" to="/arts">arts</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
