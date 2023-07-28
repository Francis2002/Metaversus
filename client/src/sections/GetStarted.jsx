'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import {staggerContainer, fadeIn, planetVariants} from '../utils/motion';
import { StartSteps, TitleText, TypingText  } from '../components';

import {startingFeatures} from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img 
          src="../src/assets/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
      >
        <TypingText title="| How Metaversus works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[50px] flex flex-col max-w-[370px] gap-24">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} text={feature} number={index + 1} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;