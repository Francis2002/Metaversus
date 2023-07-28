'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import {staggerContainer, fadeIn} from '../utils/motion';
import { TitleText, TypingText  } from '../components';
import { map, people01, people02, people03 } from "../assets";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center"/>
      <TitleText title={<>Track friends around you and play together in the same World</>} />
      
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0 [550px]"
      >
        <img
          src={map}
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src={people01}
            alt="people-01"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src={people02}
            alt="people-02"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src={people03}
            alt="people-03"
            className="w-full h-full"
          />
        </div>
      </motion.div>


    </motion.div>
  </section>
);

export default World;
