import './style.css';
import github from '../../images_all/contact/github-Black.svg';
import linkedin from '../../images_all/contact/linkdin-black.svg';

function Contact() {
  return (
    <div className='containerContact'>
      <div className="contact">
        <section className='sectionContact'>
          <h1 className='title'>Entre em Contato</h1>
          <p>Eu adoraria escutar sobre seu trabalho atual e como eu poderia ajudar. Atualmente estou procurando por um cargo e aberto para várias oportunidades. Sou uma pessoa trabalhadora e positiva que sempre fará as tasks com um senso de propósito e atenção aos detalhes. Fique livre para checar meus perfis abaixo e entrar em contato utilizando o formulário.</p>
          <img className='gitIcon' src={github} alt="github icon" />
          <img className='linkIcon' src={linkedin} alt="linkdin icon" />
        </section>
      </div>
      <div className='titleForm'>
        <h1 className='title'>Contato</h1>
        <form className='form'>
          <label className='name' htmlFor="">
            Nome
            <input className='inputName' type="text" name="name" required/>
          </label>
          <label className='email' htmlFor="">
            E-mail
            <input className='inputEmail' type="text" name="email" required/>
          </label>
          <label className='msg' htmlFor="">
            Mensagem
            <textarea className='inputMsg' name="" id="" cols="1" rows="5" required></textarea>
          </label>
          <button className='buttonSend'>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
