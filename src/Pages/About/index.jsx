import "./style.css";
import perfil from "../../images_all/about/perfil.png";
import cidade from "../../images_all/about/curitiba.jpg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="body">
      <h1 className="meAbout">Sobre mim</h1>
      <div className="aside">
        <img className="face" src={perfil} alt="my face" />
        <p className="text-meAbout">
          Em 2021 iniciei uma transição de carreira para o mundo da TI. Iniciei
          os estudos primeiramente sozinho, mas sem um norte correto para
          seguir. Então me escrevi para concorrer a uma bolsa de estudos, como
          quase todos os estudos que tive na vida. Após estudar muito, consegui
          a bolsa para estudar desenvolvimento de Software na Cubos Academy. Foi
          durante o curso o meu maior desenvolvimento, com inúmeros exercícios
          para fixar o que era ensinado em aula. Foi lá também que aprendi
          lógica de programação o que facilitou na hora de aprender as liguagens
          ensinadas no curso e tenho certeza que irá facilitar quando eu estiver
          aprendendo novas linguagens durante a minha carreira como programador.
          <br></br>
          <p className="text-meAbout1">
            Hoje, já formado, me considero um desenvolvedor fullstack júnior
            procurando por uma oportunidade. Eu foco em escrever HTML acessível,
            usando práticas modernas de CSS e escrevendo um JavaScript limpo.
            Quando estou escrevendo código JavaScript, na maioria das vezes
            estou usando React, mas posso me adaptar para qualquer ferramenta se
            necessário.
          </p>
        </p>
      </div>
      <div className="cidade">
        <img className="cwb" src={cidade} alt="Curitiba" />
        <p className="text-me2">
          Moro em Curitiba/PR no Brasil, mas todos os trabalhos em equipes e
          experiência que tenho, foi trabalhando remotamente, mas também seria
          feliz trabalhando presencialmente, pois o empenho e dedição que
          estrego em meus trabalhos independem do lugar onde estou.
          <br></br>
          Quando não estou codando, poderá me achar fora de casa. Eu adoro estar
          próximo a natureza seja para uma caminhada, uma viajem para campo ou
          praia, até em barzinhos conversando com amigos pela cidade. Eu amaria
          se você desse uma olhada no meu trabalho.
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
