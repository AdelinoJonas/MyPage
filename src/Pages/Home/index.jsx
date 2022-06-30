import './style.css';
import facePhoto from '../../images_all/home/DSC_0881.JPG';

function Home() {
  return (
    <div className="Home">
      <div className="intro_face">
        <div className="capa">
          <img className="face-photo" src={facePhoto} alt="My face"/>
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
          <h1 className="presents">
            Ô-lá! Eu sou Jonas Adelino Neto,
          </h1>
          <p className="me">
            Moro em Curitiba, capital do Paraná, no sul do Brasil. Sou apaixonado por tecnologia e games e por isso estou entrando na área da programação, em busca de estabilidade e qualidade de  com algo que me traga paz. Então, descobri o mundo dos desenvolvedores e estou adorando descobrir como fazer mágica acontecer e decidi que é isso que quero fazer na minha vida.
          </p>
          <p className="me">
            Eu tenho trabalhado duro de 6 a 8 horas por dia para aprender a desenvolver sites desde de o inicio de 2021. Comecei com o básico, HTML5, CSS3, JavaScript e então venho aprimorando meus conhecimentos aplicando React.js, no Front-end. Ja no Back-end, estou aplicando JavaScript, com Node.js e suas principais dependências integrando PostgreSQL para incrementação de banco de dados no desenvolvimento de API REST. Hoje, já tenho um bom domínio dessas linguagens para resolver problemas, como você pode ver neste site e nos meus projetos do GitHub.
          </p>
          <p className="me">
            Além das linguagens citadas acima, continuo aprendendo, praticando e me desenvolvendo ao máximo, a fim de aprimorar meus conhecimentos e contribuir para a força da sua empresa.
          </p>
          <p className="me">
            Se sinta livre para navegar pelo meu Portfólio e entrar em contato da maneira que preferir. 
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
