import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function ExperienceCard({ experience }) {

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const translations = {
    "pt": [
      {
        "title": "Engenheiro Full Stack",
        "date": "Ago 2022 - Dez 2022",
        "points": [
          "Desenvolvimento de aplicações web e mobile usando ReactJS e React Native e outras tecnologias relacionadas.",
          "Colaboração com equipes multidisciplinares, incluindo designers e outros desenvolvedores, para criar produtos de alta qualidade.",
          "Implementação de design responsivo e garantia de compatibilidade entre navegadores."
        ]
      },
      {
        "title": "Desenvolvedor React.js",
        "date": "Nov 2022 - Mai 2023",
        "points": [
          "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
          "Colaboração com equipes multidisciplinares, incluindo designers, gerentes de produtos e outros desenvolvedores, para criar produtos de alta qualidade.",
          "Implementação de design responsivo e garantia de compatibilidade entre navegadores.",
          "Participação em revisões de código e fornecimento de feedback construtivo para outros desenvolvedores."
        ]
      },
      {
        "title": "Freelancer",
        "date": "Jun 2023 - Jul 2023",
        "points": [
          "Desenvolvi um site personalizado para uma excepcional empresa de contabilidade, Pinheiro Contabilidade.",
          "Utilizando tecnologias modernas como ReactJS e Styled-Components, integrado com uma API especializada em fornecer newsletters mensais atualizadas sobre o mundo da contabilidade."
        ]
      }
    ],
    "en": [
      {
        "title": "Full stack Engineer",
        "date": "Aug 2022 - Dec 2022",
        "points": [
          "Developing web and mobile applications using ReactJS and React Native and other related technologies.",
          "Collaborating with cross-functional teams including designers, and other developers to create high-quality product.",
          "Implementing responsive design and ensuring cross-browser compatibility."
        ]
      },
      {
        "title": "React.js Developer",
        "date": "Nov 2022 - May 2023",
        "points": [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers."
        ]
      },
      {
        "title": "Freelancer",
        "date": "Jun 2023 - Jul 2023",
        "points": [
          "I developed a custom website for an exceptional accounting firm, Pinheiro Contabilidade",
          "Using modern technologies such as ReactJS and Styled-Components, integrated with an API specialized in providing updated monthly newsletters about the world of accounting."
        ]
      }
    ]
  }

  const translationsLang = currentLanguage === "pt" ? translations.pt : translations.en;

  console.log("teste",translationsLang);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {translationsLang.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {t(point)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Experience() {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t("jobs")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("workTitle")}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work");
