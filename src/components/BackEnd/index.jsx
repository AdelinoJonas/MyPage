import "./style.css";
import sisbank from "../../images_all/projects/back-end/bankSistem.png";
import money from "../../images_all/projects/back-end/moneyControl.png";
import markt from "../../images_all/projects/back-end/markPlace.png";

function FrontEnd() {
  return (
    <div className="containerFront">
      <div className="boxProject">
        <div className="picture">
          <img className="image" src={sisbank} alt="To do list" />
        </div>
        <div className="description">
          <h1>SISTEMA BANCÁRIO</h1>
          <ul>
            <p>
              Esse projeto foi um desafio de módulo simulando um projeto onde
              meu papel era construir uma RESTful API ulitizando Node.js e
              express para um Banco Digital que permita:
            </p>
            <li>Listar contas bancárias</li>
            <li>Atualizar os dados do usuário da conta bancária</li>
            <li>Excluir uma conta bancária</li>
            <li>Depositar em uma conta bancária</li>
            <li>Sacar de uma conta bancária</li>
            <li>Transferir valores entre contas bancárias</li>
            <li>Consultar saldo da conta bancária</li>
            <li>Emitir extrato bancário.</li>
          </ul>
          <a href="https://github.com/AdelinoJonas/SistemaBancario">
            <button className="buttonSend">Ver repositório</button>
          </a>
          {/* <a href="https://sobcontrole.netlify.app">
            <button className="button-pt">ver projeto</button>
          </a> */}
        </div>
      </div>
      <div className="boxProject">
        <div className="description">
          <h1>CONTROLE DE FINANÇAS</h1>
          <ul>
            <p>
              Este foi um projeto onde era preciso construir uma RESTful API em
              Node.js, com criptografia para ser consumido no front em um
              sistema de controle de finanças que permita:
            </p>
            <li>Cadastrar Usuário</li>
            <li>Fazer Login</li>
            <li>Editar Usuário</li>
            <li>Cadastrar Transação</li>
            <li>Listar Transações</li>
            <li>Editar Transação</li>
            <li>Remover Transação</li>
          </ul>
          <a href="https://github.com/AdelinoJonas/DinDin_MoneyControl/tree/main/dindin_API">
            <button className="buttonSend">Ver repositório</button>
          </a>
          {/* <a href="https://sobcontrole.netlify.app">
            <button className="button-pt">ver projeto</button>
          </a> */}
        </div>
        <div className="picture">
          <img className="image" src={money} alt="API money control" />
        </div>
      </div>
      <div className="boxProject">
        <div className="picture">
          <img className="image" src={markt} alt="API market place" />
        </div>
        <div className="description">
          <h1>MARKET PLACE</h1>
          <p>
            Este projeto foi um desafio proposto durante a participação na 4ª
            edição do ProviHack, realizado em equipe. A RestAPI consistia em
            cadastrar um usuário, cadastrar e editar Fornecedores e Produtos,
            além de um banco de dados consumidos pelo Front-End.
            <br />O projeto foi desenvolvido em Node.js e PostgreSQL durante 7
            dias que foi a duração do evento. Participar desse projeto me ajudou
            a refinar meu fluxo de trabalho e resolver problemas de código da
            vida real. Eu aprendi algo novo a cada sprint, me ajudando a
            melhorar e adaptar meu estilo.
          </p>
          <a href="https://github.com/AdelinoJonas/api_econexo">
            <button className="buttonSend">Ver repositório</button>
          </a>
          {/* <a href="https://sobcontrole.netlify.app">
            <button className="button-pt">ver projeto</button>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
