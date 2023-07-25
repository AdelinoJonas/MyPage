import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState } from "react";

function HeroMobile() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setcurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setcurrentLanguage(newLanguage);
  };
  return (
    <section className="relative w-full h-screen xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <div
        className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
           {t("title")}<span className="text-[#915eff]">Jonas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("subtitle")}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default HeroMobile;
