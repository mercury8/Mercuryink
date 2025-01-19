import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className="font-outwardborders text-10xl stroke-black">
          Expand your vision
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Mercury Ink stands at the forefront of the digital landscape, offering
        comprehensive website design solutions tailored to meet a diverse array
        of web needs. Specializing in a multitude of platforms including React,
        WordPress, Shopify, and Webflow, Mercury Ink is adept at crafting
        dynamic and engaging online experiences. From sleek and responsive React
        applications to versatile and customizable WordPress websites, Mercury
        Ink's expertise knows no bounds. Whether you're an ambitious
        entrepreneur launching your first e-commerce venture or an established
        enterprise seeking to revitalize your online presence, Mercury Ink is
        your trusted partner in navigating the complexities of the digital
        realm. With a commitment to excellence and a passion for innovation,
        Mercury Ink ensures that no challenge is too daunting and no goal is out
        of reach. Let us transform your vision into reality and propel your
        online presence to new heights with Mercury Ink's unparalleled website
        design solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
