import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`z-10 absolute top-[100px] justify-center w-full ${styles.paddingX} flex flex-row text-center `}
      >
        <div>
          <div className="min-w-min">
            <img
              className="w-4/6"
              src="./assets/mercuryink-title.png"
              alt="mercury ink"
            />
          </div>
          <a href="#work" className="no-underline">
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 bg-black p-1 w-1/3 m-auto rounded-md`}
            >
              EXPAND YOUR VISION
            </p>
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-l-mercuryinkpink flex justify-center items-start p-2 bg-black">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      <div className="bg-gradient-to-t from-spaceblack h-20 relative bottom-20"></div>
    </section>
  );
};

export default Hero;
