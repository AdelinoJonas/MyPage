import './styles.css';
import { Link, useHistory, BrowserRouter as Router} from "react-router-dom";

function FrontEnd() {

  return (
  <div className="containerknowledges">
    <h1 className="title">
      HardSkills
    </h1>
    <div className="leftSide">
      <p className="me">
      Aqui estão meus principais conhecimentos na área de desenvolvimento:
      </p> 
      <section className="hardSkills">
        <section className='boxSkill'>
          <span className="titleSkill me">
            HTML5
          </span>
          <section className="boxLevel"><section className="levelbar1"></section></section>
          
        </section>
        <section className='boxSkill'>
          <span className="titleSkill me">
            CSS3
          </span>
          <section className="boxLevel"><section className="levelbar2"></section></section>
          
        </section>
        <section className='boxSkill'>
          <span className="titleSkill me">
            JAVASCRIPT
          </span>
          <section className="boxLevel"><section className="levelbar3"></section></section>
          
        </section>
        <section className='boxSkill'>
          <span className="titleSkill me">
            NODE.JS
          </span>
          <section className="boxLevel"><section className="levelbar4"></section></section>
          
        </section>
        <section className='boxSkill'>
          <span className="titleSkill me">
            POSTGRESQL
          </span>
          <section className="boxLevel"><section className="levelbar5"></section></section>
          
        </section>
        <section className='boxSkill'>
          <span className="titleSkill me">
            REACT.JS
          </span>
          <section className="boxLevel"><section className="levelbar6"></section></section>
          
        </section>
        <section className='boxSkill'>
          <span className="titleSkill me">
            SASS
          </span>
          <section className="boxLevel"><section className="levelbar7"></section></section>
          
        </section>
      </section>
      <section className="languages">
        <h1 className="title">
          Idiomas
        </h1>
        <section className="boxlanguage">
          <span className="titleSkill me">
            Ingles
          </span>
          <section className="containerLevel">
            <span className="nametitle description">
              Speaking
            </span>
            <section className="boxLevel">
              <section className="speakbar1"></section>
            </section>
            <span className="nametitle description">
              Listening
            </span>
            <section className="boxLevel">
              <section className="listenbar1"></section>
            </section>
            <span className="nametitle description">
              write
            </span>
            <section className="boxLevel">
              <section className="writebar1"></section>
            </section>
          </section>
        </section>
        <section className="boxlanguage">
          <span className="titleSkill me">
            Espanhol
          </span>
          <section className="containerLevel">
            <span className="nametitle description">
              Speaking
            </span>
            <section className="boxLevel">
              <section className="speakbar1"></section>
            </section>
            <span className="nametitle description">
              Listening
            </span>
            <section className="boxLevel">
              <section className="listenbar1"></section>
            </section>
            <span className="nametitle description">
              write
            </span>
            <section className="boxLevel">
              <section className="writebar1"></section>
            </section>
          </section>
        </section>
        <section className="boxlanguage">
          <span className="titleSkill me">
            Português
          </span>
          <section className="containerLevel">
            <span className="nametitle description">
              Speaking
            </span>
            <section className="boxLevel">
              <section className="speakbar1"></section>
            </section>
            <span className="nametitle description">
              Listening
            </span>
            <section className="boxLevel">
              <section className="listenbar1"></section>
            </section>
            <span className="nametitle description">
              write
            </span>
            <section className="boxLevel">
              <section className="writebar1"></section>
            </section>
          </section>
        </section>
      </section>
    </div>
    <aside className="rightSide">
      <h1 className='title'>
        SOFTSKILLS
      </h1>
    </aside>   
  </div> 
  );
}

export default FrontEnd;