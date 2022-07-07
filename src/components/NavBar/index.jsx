import './style.css';
import logo from '../../images_all/navBar/logo_jonas.png';
import React from 'react';
import { NavLink } from "react-router-dom";
import {useState} from 'react';

function NavBar() {
  const [closeMenu, setCloseMenu] = useState(true);

  return (
    <div className="NavBar">
      <header className="nav">
            <ul class="container-link">
              <li><NavLink to={'/'} className='menu-link' onClick={()=>setCloseMenu(false)}>Início</NavLink></li>
              <li><NavLink to={'/about'} className='menu-link'>Sobre mim</NavLink></li>
              <li><NavLink to={'/Knowledge'} className='menu-link'>Conhecimentos</NavLink></li>
              <li><NavLink to={'/projects'} className='menu-link'>Projetos</NavLink></li>
              <li><NavLink to={'/contact'} className='menu-link'>Contato</NavLink></li>
            </ul>
            <div className="logo-top">
              <img className="logo" src={logo} alt="Icon with my name"/>
            </div>
    </header>
  </div> 
  );
}

export default NavBar;
