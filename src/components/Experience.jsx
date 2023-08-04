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
          <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={t("date4")}
            iconStyle={{ background: experiences[3].iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={experiences[3].icon}
                  alt={experiences[3].company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {t("titleExperience4")}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {t("companyName4")}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points4")}
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                {t("points44")}
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work");
