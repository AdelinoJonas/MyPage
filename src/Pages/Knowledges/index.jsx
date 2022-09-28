import "./styles.css";
import { Link, useHistory, BrowserRouter as Router } from "react-router-dom";
import certifiedProvi from "../../images_all/knowledges/provihack.jpg";
import certifiedCubos from "../../images_all/knowledges/certificado-cubos-frente.jpg";
import certifiedtec from "../../images_all/knowledges/tecnico-em-informática.jpg";

function FrontEnd() {
  return (
    <div className="containerknowledges">
      <div className="firstSeason">
        <div className="leftSide">
          <h1 className="titleSkill">HardSkills</h1>
          <p>
            Aqui estão meus principais conhecimentos na área de desenvolvimento:
          </p>
          <section className="hardSkills">
            <section className="boxSkill">
              <span className="nameSkill">HTML5</span>
              <section className="boxLevelSkills">
                <section className="levelbar1"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
            <section className="boxSkill">
              <span className="nameSkill">CSS3</span>
              <section className="boxLevelSkills">
                <section className="levelbar2"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
            <section className="boxSkill">
              <span className="nameSkill">JAVASCRIPT</span>
              <section className="boxLevelSkills">
                <section className="levelbar3"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
            <section className="boxSkill">
              <span className="nameSkill">NODE.JS</span>
              <section className="boxLevelSkills">
                <section className="levelbar4"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
            <section className="boxSkill">
              <span className="nameSkill">POSTGRESQL</span>
              <section className="boxLevelSkills">
                <section className="levelbar5"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
            <section className="boxSkill">
              <span className="nameSkill">REACT.JS</span>
              <section className="boxLevelSkills">
                <section className="levelbar6"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
            <section className="boxSkill">
              <span className="nameSkill">SASS</span>
              <section className="boxLevelSkills">
                <section className="levelbar7"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
          </section>
        </div>
        <section className="languages">
          <h1 className="titleSkill">Idiomas</h1>
          <section className="boxlanguage">
            <span className="nameSkills">Inglês</span>
            <section className="containerLevel">
              <span className="nametitle">Speaking</span>
              <section className="boxLevel">
                <section className="speakbar1"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
              <span className="nametitle">Listening</span>
              <section className="boxLevel">
                <section className="listenbar1"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
              <span className="nametitle">Write</span>
              <section className="boxLevel">
                <section className="writebar1"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
          </section>
          <section className="boxlanguage">
            <span className="nameSkills">Espanhol</span>
            <section className="containerLevel">
              <span className="nametitle">Speaking</span>
              <section className="boxLevel">
                <section className="speakbar2"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
              <span className="nametitle">Listening</span>
              <section className="boxLevel">
                <section className="listenbar2"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
              <span className="nametitle">Write</span>
              <section className="boxLevel">
                <section className="writebar2"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
          </section>
          <section className="last">
            <span className="nameSkills">Português</span>
            <section className="containerLevel">
              <span className="nametitle">Speaking</span>
              <section className="boxLevel">
                <section className="speakbar3"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
              <span className="nametitle">Listening</span>
              <section className="boxLevel">
                <section className="listenbar3"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
              <span className="nametitle">Write</span>
              <section className="boxLevel">
                <section className="writebar3"></section>
                <section className="sizeLevel">
                  <span>Baixo</span>
                  <span>Médio</span>
                  <span>Avançado</span>
                </section>
              </section>
            </section>
          </section>
        </section>
      </div>
      <div className="courses">
        <p>Aqui estão os cursos que participei e atividades pós cursos:</p>
        <div className="coursesList middleList">
          <div className="list">
            <li>
              <b>TÉCNICO EM INFORMATICA:</b>
              <br />
              Windows, Word, Excel, PowerPoint, Sistema operacional LINUX, Redes
              e hardware de computadores.
            </li>
            <div className="boxCertified">
              <button className="certified">VER CERTIFICADO</button>
            </div>
          </div>
          <div className="imgcouse">
            <img
              src={certifiedtec}
              className="imgcourses image"
              alt="Certificado Tecnico em Informática"
            />
          </div>
        </div>
        <div className="coursesList">
          <div className="imgcouse">
            <img
              src={certifiedCubos}
              className="imgcourses image"
              alt="Certificado Cubos Academy"
            />
          </div>
          <div className="list">
            <li>
              <b>DESENVOLVIMENTO DE SOFTWARE - CUBOS ACADEMY:</b>
              <br />
              HTML5, CSS3, JavaScript, NodeJs (express, npm, knex...),
              PostgresSQL, React.js, GIT e GITHUB. Desenvolvimento de SoftSkills
              e metodologias ágeis como: Scrum, Kanban, Auto-conhecimento.
            </li>
            <div className="boxCertified">
              <button className="certified">VER CERTIFICADO</button>
            </div>
          </div>
        </div>
        <div className="coursesList middleList">
          <div className="list">
            <li>
              <b>4º EDIÇÃO DO PROVIHACK:</b>
              <br />
              Onde tive a oportunidade de trabalhar com uma equipe de tecnologia
              e desenvolver um projeto do zero para ajudar no combate ao
              aquecimento global utilizando a tecnologia.
            </li>
            <div className="boxCertified">
              <button className="certified">VER CERTIFICADO</button>
            </div>
          </div>
          <div className="imgcouse">
            <img
              src={certifiedProvi}
              className="imgcourses image"
              alt="Certificado Hackaton"
            />
          </div>
        </div>
      </div>
      <div className="softSkills">
        <div className="listSoft">
          <p>
            Além das habilidades citadas acima, também tenho conhecimentos em
            algumas áreas realcionadas a softSkills, como:
          </p>
          <ul className="skillsList">
            <li>
              Metodologias Ágeis: Trabalhando com vercionamento de código
              utilizando GIT e GitHub;
            </li>
            <li>
              Organização e controle do tempo: Utilizando o método SCRUM e
              conhecimento do método KABAN
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
