import "./style.css";
import perfil from "../../images_all/about/perfil.png";
import cidade from "../../images_all/about/curitiba.jpg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="body">
      <h1 className="meAbout">Sobre mim</h1>
      <p className="text-meAbout">
        Sou gastrônomo por formação e sem realização profissional, em 2021
        iniciei uma transição de carreira para o mundo da programação. Iniciei
        os estudos primeiramente sozinho, mas sem um norte para seguir. Então me
        escrevi para concorrer a uma bolsa de estudos, como quase todos os
        estudos que tive na vida. Após estudar muito, consegui a bolsa para
        estudar desenvolvimento de Software na Cubos Academy. Durante o curso,
        percebi o meu maior desenvolvimento, praticando com inúmeros exercícios
        para fixar os conteúdos das aulas. Foi lá também que aprendi lógica de
        programação o que está facilitando e muito na hora de aprender as
        linguagens ensinadas no curso e agora nos caminhos após entrar na área
        como programador.
      </p>
      <div className="aside">
        <img className="face" src={perfil} alt="my face" />
        <br></br>
        <p className="text-meAbout">
          Hoje, já formado, me considero um desenvolvedor fullstack júnior com o
          background de saber trabalhar sob pressão, gerenciamento de equipes.
          Eu foco em escrever um código acessível e bem estruturado, usando
          práticas modernas de CSS e escrevendo um JavaScript limpo. Quando
          estou escrevendo código JavaScript, na maioria das vezes estou usando
          React, mas posso me adaptar para qualquer ferramenta se necessário.
          Durante esses desafios que tive a certeza do que eu quero fazer para o
          resto da vida.
        </p>
      </div>
      <div className="cidade">
        <img className="cwb" src={cidade} alt="Curitiba" />
        <p className="text-me2">
          Moro em Curitiba/PR no Brasil, mas todos os trabalhos em equipes e
          experiências que tenho, foi trabalhando remotamente, mas também seria
          feliz trabalhando presencialmente, pois o empenho e dedicação que
          estrego em meus trabalhos independem do lugar onde estou.
          <br />
          Quando não estou codificando, poderá me achar fora de casa. Eu adoro
          estar próximo a natureza seja para uma caminhada, uma viajem para o
          campo ou praia, até em barzinhos conversando com amigos pela cidade.
          <br />
          Eu amaria se você desse uma olhada no meu trabalho.
        </p>
      </div>
      <div className="boxPort">
        <NavLink to={"/projects"} className="button-text">
          <button className="button-pt">portfólio</button>
        </NavLink>
      </div>
      <div className="contact1">
        <h1 className="meAbout size-box">
          Se interessa em fazer projetos comigo?
        </h1>
        <NavLink to={"/contact"} className="button-text">
          <button className="button-pt">contato</button>
        </NavLink>
      </div>
    </div>
  );
}

export default About;
