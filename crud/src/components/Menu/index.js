import React from 'react';
import {Link} from 'react-router-dom';

// import { Container } from './styles';

function Menu() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CRUD <i className="bi bi-server"></i></a>
    {/* <Link className="navbar-brand" href="#">CRUD <i className="bi bi-server"></i></Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/" className='nav-link active'>Home</Link> 
            <Link to="/departamentos" className='nav-link active'>Departamentos</Link> 
          
        </li>
      </ul>
      <span className="navbar-text">
        Projeto Final
      </span>
    </div>
  </div>
</nav>
  
  </>
  
  ;
}

export default Menu;