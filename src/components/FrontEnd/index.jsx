import "./style.css";
import { useContext, useState } from "react";
// import UserContext from '../../contexts/userContext';
import project1 from "../../images_all/projects/toDoList.png";
import project2 from "../../images_all/projects/dindin.png";
import project3 from "../../images_all/projects/cuboflix.png";
import project4 from "../../images_all/projects/SistemaCobranca.png";
import ModalProject from "../ModalProject";

function FrontEnd() {
  // const [openModal, setOpenModal] = useState(false);

  // const handleModal = () => {
  //   openModal ? setOpenModal(false) : setOpenModal(true);
  // }

  return (
    <div className="containerFront">
      <div className="boxProject">
        <div className="picture">
          <img className="image" src={project1} alt="To do list" />
        </div>
        <div className="description">
          <h1>TO DO list</h1>
          <p>
            Esse projeto me fez criar um software criador de uma lista de
            tarefas de acordo com o design que recebi. Usei HTML5, CSS e
            JavaScript para as áreas interativas, como a caixa de digitação,
            funções de marcar como concluído e deletar item da lista.
          </p>
          <a href="https://github.com/AdelinoJonas/front-integral-eventos-react">
            <button className="buttonSend">Ver repositório</button>
          </a>
          {/* <button 
            className="button-pt" 
            onClick={()=>{handleModal && <ModalProject/>}}
          >
            ver projeto
          </button> */}
        </div>
      </div>
      <div className="boxProject">
        <div className="description">
          <h1>DinDin</h1>
          <p>
            Este foi um projeto realizado em React.js. Era para ser apenas um
            exercício para controle financeiro, mas após realizado, aprimorei as
            funcionalidades em parceria com um amigo do curso. Onde, construímos
            uma API com Javascript e um Banco de dados em PostgreSQL para
            cadastro de usuário com criptografia de senha totalmente responsivo.
          </p>
          <a href="https://github.com/AdelinoJonas/DinDin_MoneyControl">
            <button className="buttonSend">Ver repositório</button>
          </a>
          <a href="https://sobcontrole.netlify.app">
            <button className="button-pt">ver projeto</button>
          </a>
        </div>
        <div className="picture">
          <img className="image" src={project2} alt="Dindin" />
        </div>
      </div>
      <div className="boxProject">
        <div className="picture">
          <img className="image" src={project3} alt="CuboFlix" />
        </div>
        <div className="description">
          <h1>CUBOFLIX</h1>
          <p>
            Este projeto foi um desafio de módulo onde preciso consumir uma API
            externa para contruir um site de demonstração de filmes. Produzido
            em React.js e CSS, o software possui funcionalidades de modo tela
            escura e tela clara.
          </p>
          <a href="https://github.com/AdelinoJonas/desafio-frontend-integral-modulo-02-t04">
            <button className="buttonSend">Ver repositório</button>
          </a>
          {/* <button className="button-pt">ver projeto</button> */}
        </div>
      </div>
      <div className="boxProject">
        <div className="description">
          <h1>CONTROLE DE COBRANÇAS</h1>
          <p>
            Este projeto foi um desafio final do curso de Desenvolvimento de
            softwarede realizado em equipe para praticar o versionamento de
            código e trabalhar com as duas stacks. O software consistia em
            cadastrar um usuário, cadastrar e editar clientes e cadastrar e
            editar cobranças, bem como a API e banco de dados consumidos pelo
            Front-End. <br></br>
            O projeto foi realizado a partir de um design recebido por por tasks
            ao inicio de cada sprint que duravam 7 dias. Participei em todas as
            etapas de produção, desde a criação endpoints de cadastro e edição
            de cliente na API até contruindo as funcões das telas do front
            produzidas em React.Js. <br />
            Participar desse projeto me ajudou a refinar meu fluxo de trabalho e
            resolver problemas de código da vida real. Eu aprendi algo novo a
            cada sprint, me ajudando a melhorar e adaptar meu estilo.
          </p>
          <a href="https://github.com/AdelinoJonas/SoftwareDeCobranca">
            <button className="buttonSend">Ver repositório</button>
          </a>
          {/* <button className="button-pt">ver projeto</button> */}
        </div>
        <div className="picture">
          <img className="image" src={project4} alt="Sistema de cobrança" />
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
