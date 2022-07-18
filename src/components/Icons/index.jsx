import "./style.css";
import html55 from "../../images_all/home/html55.png";
import css3 from "../../images_all/home/css3.png";
import javaScript from "../../images_all/home/jss.png";
import nodejs from "../../images_all/home/nodejs.png";
import sql from "../../images_all/home/SQL.png";
import react from "../../images_all/home/react.png";
import sass from "../../images_all/home/sass.png";

function Icons() {
  return (
    <div className="icons">
      <img
        className=" imageIcon html"
        src={html55}
        alt="icons language HTML5"
      />
      <img className="imageIcon css" src={css3} alt="icons language CSS3" />
      <img
        className="imageIcon js"
        src={javaScript}
        alt="icons language JAVASCRIPT"
      />
      <img
        className="imageIcon node"
        src={nodejs}
        alt="icons language NODE.JS"
      />
      <img className="imageIcon sql" src={sql} alt="icons language SQL" />
      <img className="imageIcon react" src={react} alt="icons language react" />
      <img className="imageIcon sass" src={sass} alt="icons language react" />
    </div>
  );
}

export default Icons;
