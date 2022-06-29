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
            Bem-vindo(a) ao meu Portfólio!
          <code className="lt-end">/&gt;</code>
        </h1>
      </div>
      <div className="main">
        <div className="about">
          <h1 className="presents">
            Hey-there! I'm Jonas Adelino Neto,
          </h1>
          <p className="me">
            I live in Curitiba, capital of Paraná, in south of Brazil. I'm not a technology award winner, I don't have years of experience and I haven't traveled the world meeting people and places, yet!
          </p>
          <p className="me">
            I'm in love for technology and games and I switched professions, looking for stability and quality of life. So, I found the world of developers and I'm loving discovering how to make magic happens and decided that this is what I want to do in my life.</p>
          <p className="me">
            I've been working hard 8-10 hours a day to learn how to develop Websites for 6 months now. I started with the basics, HTML5, CSS3, JavaScript and React, in the Front-end. In the Back-end, I'm applying JavaScript, with Node.js, SQL. Today, I already have a basic domain and a good understanding of these languages ​​to solve problems, as you can see on this site and in my GitHub projects.
          </p>
          <p className="me">
            In addition to the languages ​​mentioned above, I keep learning, practicing and developing to the fullest, to give my best when you hire me, in order to improve my knowledge and contribute to your company's strength.
          </p>
          <p className="me">
            If you want to chat, feel free to write me.
          </p>
          <h2 className="presents-2">
            Lets build something amazing together!
          </h2>
        </div>
      </div>
    </div> 
  );
}

export default Home;
