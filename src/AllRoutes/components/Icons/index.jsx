import './style.css';
import html55 from '../../images_all/home/html55.png';
import css3 from '../../images_all/home/css3.png';
import javaScript from '../../images_all/home/jss.png';
import nodejs from '../../images_all/home/nodejs.png';
import sql from '../../images_all/home/SQL.png';
import react from '../../images_all/home/react.png';

function Icons() {
    return (
        <div className="icons">
          <img className="html" src={html55} alt="Icons language HTML5"/>
          <img className="css" src={css3} alt="Icons language CSS3"/>
          <img className="js" src={javaScript} alt="Icons language JAVASCRIPT"/>
          <img className="node" src={nodejs} alt="Icons language NODE.JS"/>
          <img className="sql" src={sql} alt="Icons language SQL"/>
          <img className="react" src={react} alt="Icons language react"/>
        </div>
    );
  }
  
  export default Icons;