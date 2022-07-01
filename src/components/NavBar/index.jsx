import './style.css';
import logo from '../../images_all/navBar/logo_jonas.png';
import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  // const history = useHistory();

  return (
    <div className="NavBar">
      <header className="nav">
        <div className="row-menu">
          <input className='inputMenu' id="menu-hamburguer" type="checkbox"/>
            <label for="menu-hamburguer">
              <div className="menu">
                <span className="hamburguer"></span>
              </div>
            </label>
            <ul class="container-link">
       
              <li><NavLink to={'/'} className='menu-link'>Início</NavLink></li>
              <li><NavLink to={'/about'} className='menu-link'>Sobre mim</NavLink></li>
              <li><NavLink to={'/Knowledge'} className='menu-link'>Conhecimentos</NavLink></li>
              <li><NavLink to={'/projects'} className='menu-link'>Projetos</NavLink></li>
              <li><NavLink to={'/contact'} className='menu-link'>Contato</NavLink></li>

            </ul>
            <div className="logo-top">
              <img className="logo" src={logo} alt="Icon with my name"/>
            </div>
        </div>
    </header>
  </div> 
  );
}

export default NavBar;
