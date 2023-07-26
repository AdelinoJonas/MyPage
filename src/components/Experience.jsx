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

function Experience() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  // const experienceData = experiences;
  const translations = {
    pt: [
      {
        title: "Engenheiro Full Stack",
        date: "Ago 2022 - Dez 2022",
        points: [
          "Desenvolvimento de aplicações web e mobile usando ReactJS e React Native e outras tecnologias relacionadas.",
          "Colaboração com equipes multidisciplinares, incluindo designers e outros desenvolvedores, para criar produtos de alta qualidade.",
          "Implementação de design responsivo e garantia de compatibilidade entre navegadores.",
        ],
      },
      {
        title: "Desenvolvedor React.js",
        date: "Nov 2022 - Mai 2023",
        points: [
          "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
          "Colaboração com equipes multidisciplinares, incluindo designers, gerentes de produtos e outros desenvolvedores, para criar produtos de alta qualidade.",
          "Implementação de design responsivo e garantia de compatibilidade entre navegadores.",
          "Participação em revisões de código e fornecimento de feedback construtivo para outros desenvolvedores.",
        ],
      },
      {
        title: "Freelancer",
        date: "Jun 2023 - Jul 2023",
        points: [
          "Desenvolvi um site personalizado para uma excepcional empresa de contabilidade, Pinheiro Contabilidade.",
          "Utilizando tecnologias modernas como ReactJS e Styled-Components, integrado com uma API especializada em fornecer newsletters mensais atualizadas sobre o mundo da contabilidade.",
        ],
      },
    ],
    en: [
      {
        title: "Full stack Engineer",
        date: "Aug 2022 - Dec 2022",
        points: [
          "Developing web and mobile applications using ReactJS and React Native and other related technologies.",
          "Collaborating with cross-functional teams including designers, and other developers to create high-quality product.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
      },
      {
        title: "React.js Developer",
        date: "Nov 2022 - May 2023",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
      {
        title: "Freelancer",
        date: "Jun 2023 - Jul 2023",
        points: [
          "I developed a custom website for an exceptional accounting firm, Pinheiro Contabilidade",
          "Using modern technologies such as ReactJS and Styled-Components, integrated with an API specialized in providing updated monthly newsletters about the world of accounting.",
        ],
      },
    ],
  };

  const translationsLang =
    currentLanguage === "pt" ? translations.pt : translations.en;

  console.log("teste", experiences);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("jobs")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("workTitle")}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={t("date1")}
            iconStyle={{ background: experiences[0].iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={experiences[0].icon}
                  alt={experiences[0].company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {t("titleExperience1")}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {t("companyName1")}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points1")}
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points11")}
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points111")}
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={t("date2")}
            iconStyle={{ background: experiences[1].iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={experiences[1].icon}
                  alt={experiences[1].company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {t("titleExperience2")}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {t("companyName2")}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points2222")}
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points22")}
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points222")}
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points2")}
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={t("date3")}
            iconStyle={{ background: experiences[2].iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={experiences[2].icon}
                  alt={experiences[2].company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {t("titleExperience3")}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {t("companyName3")}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points3")}
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points33")}
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work");
