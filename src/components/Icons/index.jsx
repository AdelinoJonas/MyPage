import './style.css';
import html55 from '../../images_all/home/html55.png';
import css3 from '../../images_all/home/css3.png';
import javaScript from '../../images_all/home/jss.png';
import nodejs from '../../images_all/home/nodejs.png';
import sql from '../../images_all/home/SQL.png';
import react from '../../images_all/home/react.png';
// import { Carousel } from 'react-responsive-carousel';

function Icons() {
    return (
      <div className="icons">
        {/* <Carousel> */}
        {/* <div className="image"> */}
          <img className=" image html" src={html55} alt="icons language HTML5"/>
          <img className="image css" src={css3} alt="icons language CSS3"/>
          <img className="image js" src={javaScript} alt="icons language JAVASCRIPT"/>
          <img className="image node" src={nodejs} alt="icons language NODE.JS"/>
          <img className="image sql" src={sql} alt="icons language SQL"/>
          <img className="image react" src={react} alt="icons language react"/>
        {/* </div> */}
        {/* </Carousel> */}
      </div>
    );
  }
  
  export default Icons;