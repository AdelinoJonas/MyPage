import './style.css';
import logo from '../../images_all/navBar/logo_jonas.png';


function BaseFooter() {
  return (
    <footer className="footer">
      <img className='logoFooter' src={logo} alt='logo' />
      <div className="nav-icons">
        <h2 >Jonas Adelino Neto - 2022</h2>
      </div>
    </footer>
  );
}

export default BaseFooter;
