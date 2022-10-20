import React from 'react'
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
    <>
    <div class="container-fluid">
     <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adresses
        </a>
        <div className='dropdown-menu' aria-labelledby="navbarDropdown">
          <a className='dropdown-item' href="#">Liste des adresses</a>
          <a class="dropdown-item" href="#">Ajouter une adresse </a>
          </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Listes de services</a>
          <a class="dropdown-item" href="#"> Ajouter un service </a>
          </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          patients
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to='https://react.semantic-ui.com/'>
          <a class="dropdown-item" href="#">Liste des patients</a>
          </Link>
          <a class="dropdown-item" href="#">Ajouter un patient</a> </div>
      </li>
      
     
    </ul>
        <form class="d-flex">
		        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="mc"></input>
		        <button class="btn btn-outline-success" type="submit"  value="rechercher"><i class="fa fa-search"></i></button>
		 </form>
         
  </div>
</nav>

</div>


    </>
  )
}

export default Navbar