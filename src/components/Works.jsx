import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";

function Works() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t("projectsPresent")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("projectsTitle")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("projectsDescription")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
              <div className="relative w-full h-[230px]">
                <img
                  src={project.image}
                  alt="project_image"
                  className="w-full h-full object rounded-2xl"
                />

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  {t(`project${index + 1}`)}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">{t(`projectDescription${index + 1}`)}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <p
                    key={`${name}-${tagIndex}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, "");
