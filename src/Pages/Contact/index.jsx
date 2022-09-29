import "./style.css";
import { useState } from "react";
import github from "../../images_all/contact/github-Black.svg";
import linkedin from "../../images_all/contact/linkdin-black.svg";
// import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [successOpened, setSuccessOpened] = useState(false);

  const successRegister = () => {
    {
      !errors && setSuccessOpened(true);
    }
    return;
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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label className="name" htmlFor="nameInput">
            Nome*
            <input
              {...register("name", { required: true })}
              className="inputName"
              type="text"
              name="name"
              maxLength={25}
              onClick={() => {
                clearErrors("name");
              }}
            />
            {errors.name && (
              <p className="errorSpan">Este campo é obrigatório.</p>
            )}
          </label>
          <label className="email" htmlFor="email">
            E-mail*
            <input
              {...register("email", { required: true })}
              className="inputEmail"
              type="email"
              name="email"
              maxLength={25}
              onClick={() => {
                clearErrors("email");
              }}
            />
            {errors.email && (
              <p className="errorSpan">Este campo é obrigatório.</p>
            )}
          </label>
          <label className="msg" htmlFor="message">
            Mensagem*
            <textarea
              {...register("message", { required: true })}
              className="inputMsg"
              name="message"
              cols={1}
              onClick={() => {
                clearErrors("message");
              }}
            />
            {errors.message && (
              <p className="errorSpan">Este campo é obrigatório.</p>
            )}
          </label>
          <button
            className="buttonSend"
            type="submit"
            onClick={() => {
              if(!errors){setSuccessOpened(true)}
            }}
          >
            Enviar
          </button>
        </form>
      </div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Snackbar open={successOpened} autoHideDuration={3000}>
          <Alert variant="filled" severity="success" sx={{ width: "700px" }}>
            E-mail enviado com sucesso!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export default Contact;
