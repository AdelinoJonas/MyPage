import './style.css';
import logo from '../../images_all/navBar/logo_jonas.png';
import React from 'react';
import { NavLink, useHistory, BrowserRouter as Router} from "react-router-dom";

function NavBar() {
  const history = useHistory();

  function redirect() {
    history.push('/');
  }

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
            <Router>
              <li><NavLink to={'/'} className='menu-link'>Home</NavLink></li>
              <li><NavLink to={'/About'} className='menu-link'>About me</NavLink></li>
              <li><NavLink to={'/Projects'} className='menu-link'>Projects</NavLink></li>
              <li><NavLink to={'/Contact'} className='menu-link'>Contact</NavLink></li>
            </Router>
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
