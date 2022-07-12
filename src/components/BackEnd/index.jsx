import './style.css';
import { NavLink } from "react-router-dom";
import sisbank from '../../images_all/projects/modulo2_back.jpg';
import project2 from '../../images_all/projects/dindin.png';
import project4 from '../../images_all/projects/SistemaCobranca.png';

function FrontEnd() {

  return (
  <div className="containerFront">
    <div className="boxProject">
      <div className="picture">
        <img className='image' src={sisbank} alt="To do list" />
      </div>
      <div className="description">
        <h1>SISTEMA BANCÁRIO</h1>
          <ul>
            <p>Esse projeto foi um desafio de módulo simulando um projeto onde meu papel era construir uma RESTful API para um Banco Digital que permita:</p>
            <li>Listar contas bancárias</li>
            <li>Atualizar os dados do usuário da conta bancária</li>
            <li>Excluir uma conta bancária</li>
            <li>Depósitar em uma conta bancária</li>
            <li>Sacar de uma conta bancária</li>
            <li>Transferir valores entre contas bancárias</li>
            <li>Consultar saldo da conta bancária</li>
            <li>Emitir extrato bancário.</li>
          </ul>
        <button className='buttonSend'>Ver repositório</button>
        <button className="button-pt">ver projeto</button>
      </div>
    </div>
    <div className="boxProject">
      <div className="description">
        <h1>CADASTRO E CONSULTA DE PRODUTOS</h1>
        <ul>
          <p>Este foi um projeto onde era preciso construir uma RESTful API que permita:</p>
          <li>Fazer Login</li>
          <li>Cadastrar Usuário</li>
          <li>Detalhar Usuário</li>
          <li>Editar Usuário</li>
          <li>Listar produtos</li>
          <li>Detalhar produtos</li>
          <li>Cadastrar produtos</li>
          <li>Editar produtos</li>
          <li>Remover produtos</li>
          <li>Filtrar produtos por categoria</li>
        </ul>
        <button className='buttonSend'>Ver repositório</button>
        <button className="button-pt">ver projeto</button>
      </div>
      <div className="picture">
        <img className='image' src={project2} alt="Dindin" />
      </div>
    </div>
    <div className="boxProject">
      <div className="description">
        <h1>CONTROLE DE COBRANÇAS</h1>
        <p>Este projeto foi um desafio final do curso de Desenvolvimento de softwarede realizado em equipe para praticar o versionamento de código e trabalhar com as duas stacks. A RestAPI consistia em cadastrar um usuário, cadastrar e editar clientes e cadastrar e editar cobranças e banco de dados consumidos pelo Front-End. 
          <br></br>
        O projeto foi desenvolvido em Node.js e PostgreSQL por tasks ao inicio de cada sprint que duravam 7 dias. Participei em todas as etapas de produção, desde a criação endpoints de cadastro e edição de cliente na API até na integração com o banco de dados. <br /> 
        Participar desse projeto me ajudou a refinar meu fluxo de trabalho e resolver problemas de código da vida real. Eu aprendi algo novo a cada sprint, me ajudando a melhorar e adaptar meu estilo.</p>
        <button className='buttonSend'>Ver repositório</button>
        <button className="button-pt">ver projeto</button>
      </div>
      <div className="picture">
        <img className='image' src={project4} alt="Sistema de cobrança" />
      </div>
    </div>
  </div> 
  );
}

export default FrontEnd;