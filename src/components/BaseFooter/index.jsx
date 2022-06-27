import './style.css';
import logo from '../../images_all/navBar/logo_jonas.png';


function BaseFooter() {
  return (
  <div className="BaseFooter">
    <footer className="footer">
      <img className='logoFooter' src={logo} alt='logo' />
      <div className="nav-icons">
        <h2 >Jonas Adelino Neto &#169; &#174;</h2>
      </div>
    </footer>
  </div> 
  );
}

export default BaseFooter;
