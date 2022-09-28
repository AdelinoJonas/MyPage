import "./style.css";
import facePhoto from "../../images_all/home/DSC_0881.JPG";

function Home() {
  return (
    <div className="Home">
      <div className="intro_face">
        <div className="capa">
          <img className="face-photo" src={facePhoto} alt="My face" />
        </div>
        <h1 className="wellcome typing-animation">
          <code className="lt-start">&lt;</code>
          <h1 className="tag">h1</h1>
          <code className="lt-end">&gt;</code>
          Bem-vindo(a) ao meu Portfólio!
          <code className="lt-start">&lt;/</code>
          <h1 className="tag">h1</h1>
          <code className="lt-end">&gt;</code>
        </h1>
      </div>
      <div className="main">
        <div className="about">
          <h1 className="presents">O-lá! Eu sou Jonas Adelino Neto,</h1>
          <p className="me">
            Moro em Curitiba, capital do Paraná, no sul do Brasil. Buscando
            realização profissional, comecei a estudar programação buscando uma
            nova carreira para seguir fazendo o que eu gosto e me sinto bem. Sem
            imaginar o tamanho real do mundo da tecnologia e das possibilidades
            que ela pode nos levar.
          </p>
          <p className="me">
            Com mais de um ano desenvolvendo e apesar de ter domínio do
            Front-End, utilizando: HTML5, CSS3, JavaScript e React.js para o
            desenvolvimento de sites. Sigo aprendendo novos Frameworks, como:
            React Native para aplicativos Mobile, incluindo integração de API de
            geolocalização externa.
          </p>
          <p className="me">
            No Back-end, aplicando JavaScript, com Node.js e suas principais
            dependências integrando PostgreSQL para implementação de banco de
            dados no desenvolvimento de API REST. Hoje, com todo esse
            conhecimento para lhe ajudar resolver quaisquer problemas, como você
            pode ver neste site e nos meus projetos do GitHub.
          </p>

          <p className="me">
            Além das linguagens citadas acima, continuo aprendendo e me
            desenvolvendo a cada dia, a fim de aprimorar meus conhecimentos e
            contribuir da melhor forma possível no desenvolvimento de seu
            projeto.
          </p>
          <p className="me">
            Se sinta livre para navegar pelo meu Portfólio e entrar em contato
            da maneira que preferir.
          </p>
          <h2 className="presents-2">
            Vamos construir algo incrível juntos !?
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
