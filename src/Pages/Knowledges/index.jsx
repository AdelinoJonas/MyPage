import './styles.css';
import { Link, useHistory, BrowserRouter as Router} from "react-router-dom";

function FrontEnd() {

  return (
  <div className="containerknowledges">
    
    <div className="leftSide">
      <h1 className="titleSkill">
        HardSkills
      </h1>
      <p>
        Aqui estão meus principais conhecimentos na área de desenvolvimento:
      </p> 
      <section className="hardSkills">
        <section className='boxSkill'>
          <span className="nameSkill">
            HTML5
          </span>
          <section className="boxLevelSkills"><section className="levelbar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>          
        </section>
        <section className='boxSkill'>
          <span className="nameSkill">
            CSS3
          </span>
          <section className="boxLevelSkills"><section className="levelbar2"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
        </section>
        <section className='boxSkill'>
          <span className="nameSkill">
            JAVASCRIPT
          </span>
          <section className="boxLevelSkills"><section className="levelbar3"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
        </section>
        <section className='boxSkill'>
          <span className="nameSkill">
            NODE.JS
          </span>
          <section className="boxLevelSkills"><section className="levelbar4"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
        </section>
        <section className='boxSkill'>
          <span className="nameSkill">
            POSTGRESQL
          </span>
          <section className="boxLevelSkills"><section className="levelbar5"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>          
        </section>
        <section className='boxSkill'>
          <span className="nameSkill">
            REACT.JS
          </span>
          <section className="boxLevelSkills"><section className="levelbar6"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>        
        </section>
        <section className='boxSkill'>
          <span className="nameSkill">
            SASS
          </span>
          <section className="boxLevelSkills"><section className="levelbar7"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>          
        </section>
      </section>
    </div>
    <section className="languages">
      <h1 className="titleSkill">
        Idiomas
      </h1>
      <section className="boxlanguage">
        <span className="nameSkills">
          Inglês
        </span>
        <section className="containerLevel">
          <span className="nametitle">
            Speaking
          </span>
          <section className="boxLevel">
            <section className="speakbar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
          <span className="nametitle">
            Listening
          </span>
          <section className="boxLevel">
            <section className="listenbar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
          <span className="nametitle">
            Write
          </span>
          <section className="boxLevel">
            <section className="writebar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
        </section>
      </section>
      <section className="boxlanguage">
        <span className="nameSkills">
          Espanhol
        </span>
        <section className="containerLevel">
          <span className="nametitle">
            Speaking
          </span>
          <section className="boxLevel">
            <section className="speakbar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
          <span className="nametitle">
            Listening
          </span>
          <section className="boxLevel">
            <section className="listenbar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
          <span className="nametitle">
            Write
          </span>
          <section className="boxLevel">
            <section className="writebar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
        </section>
      </section>
      <section className="boxlanguage">
        <span className="nameSkills">
          Português
        </span>
        <section className="containerLevel">
          <span className="nametitle">
            Speaking
          </span>
          <section className="boxLevel">
            <section className="speakbar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
          <span className="nametitle">
            Listening
          </span>
          <section className="boxLevel">
            <section className="listenbar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
          <span className="nametitle">
            Write
          </span>
          <section className="boxLevel">
            <section className="writebar1"></section>
            <section className='sizeLevel'>
              <span>Baixo</span>
              <span>Médio</span>
              <span>Avançado</span>
            </section>
          </section>
        </section>
      </section>
    </section>  
  </div> 
  );
}

export default FrontEnd;