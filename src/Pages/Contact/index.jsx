import "./style.css";
import { useState, useEffect } from "react";
import github from "../../images_all/contact/github-Black.svg";
import linkedin from "../../images_all/contact/linkdin-black.svg";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

function Contact() {
  const [inputs, setInputs] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  function handleInputChange(event) {
    inputs[event.target.name] = event.target.value;
    setInputs(inputs);
  }

  function send() {
    const formData = new FormData();
    Object.keys(inputs).forEach((key) => formData.append(key, inputs[key]));
    axios
      .post("http://localhost:3030/send", formData, {
        headers: {
          "Content-type": "multipart/form-data; boundary=${formData._boundary}",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    send(inputs);
    setOpen(true);
  }

  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
      itemvalues: [{}]
    });
  };

  return (
    <div className="containerContact">
      <div className="contact">
        <section className="sectionContact">
          <h1 className="title">Entre em Contato</h1>
          <p>
            Eu adoraria escutar sobre seu trabalho atual e como eu poderia
            ajudar. Atualmente estou procurando por um cargo e aberto para
            várias oportunidades. Sou uma pessoa trabalhadora e positiva que
            sempre fará as tasks com um senso de propósito e atenção aos
            detalhes. Fique livre para checar meus perfis abaixo e entrar em
            contato utilizando o formulário.
          </p>
          <div className="division">
            <a
              href="https://www.linkedin.com/in/jonas-adelino-168830179/"
              className="linkIcon"
            >
              <img className="linkIcon" src={linkedin} alt="linkdin icon" />
            </a>
            <a href="https://github.com/AdelinoJonas" className="gitIcon">
              <img className="gitIcon" src={github} alt="github icon" />
            </a>
          </div>
        </section>
      </div>
      <div className="titleForm">
        <h1 className="title">Contato</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <label className="name" htmlFor="name">
            Nome
            <input
              className="inputName"
              type="text"
              name="name"
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="email" htmlFor="email">
            E-mail
            <input
              className="inputEmail"
              type="text"
              name="email"
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="msg" htmlFor="msg">
            Mensagem
            <input
              className="inputMsg"
              name="msg"
              id=""
              cols="1"
              rows="5"
              onChange={handleInputChange}
              required
            />
          </label>
          <button className="buttonSend" type="submit" onClick={handleReset}>
            Enviar
          </button>
        </form>
      </div>
      {/* <Stack spacing={2} sx={{ width: '700px' }}> */}
      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="success"
          sx={{ width: "700px" }}
        >
          E-mail enviado com sucesso!
        </Alert>
      </Snackbar>
      {/* </Stack> */}
    </div>
  );
}

export default Contact;
