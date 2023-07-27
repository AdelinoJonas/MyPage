import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { githubContact, linkedin } from "../assets";
import { useTranslation } from "react-i18next";

function Contact() {

  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_nvh4z1i",
        "template_3ohxj11",
        {
          from_name: form.name,
          to_name: "Jonas Adelino Neto",
          from_email: form.email,
          to_email: "jonas.gastro91@gmail.com",
          message: form.message,
        },
        "weE0VPhrCVGYj7qbB",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        },
      );
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2x1"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <span className="text-white font-medium mb-4">
          I would love to hear about your current job and how I could help. I am
          currently looking for a position and open to multiple opportunities.
          I'm a hardworking and positive person who will always do things with a
          sense of purpose and attention to detail. Feel free to check out my
          profiles below and get in touch using the form.
        </span>
        <div className="flex gap-4 mt-6 justify-center">
          <a
            href="https://www.linkedin.com/in/jonas-adelino-168830179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-16 h-16" src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/AdelinoJonas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-16 h-16" src={githubContact} alt="github" />
          </a>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secundary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your E-mail</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secundary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secundary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[350px] h-[150px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
