'use client';

import { motion } from "framer-motion";
import { TypingText} from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} ${styles.flexCenter} flex-col mx-auto`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center"/>

      <motion.p
        variants={fadeIn('up', 'tween', 0.5, 0.5)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque reiciendis ipsam quod nisi, autem voluptates deserunt exercitationem minima, ipsum nulla voluptatem dicta dolore earum iusto dignissimos fuga amet nesciunt quibusdam. <span className="font-extrabold text-white">madness of the metaverse</span> Lorem ipsum dolor sit amet consectetur, <span className="font-extrabold text-white">VR</span> adipisicing elit. Dolor non quo aut voluptas delectus? Magni dolore minima aliquam voluptatum, ea error ipsa, sit veritatis natus quis <span className="font-extrabold text-white">explore</span> necessitatibus praesentium nostrum saepe.

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.6, 1)}
        src="../src/assets/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
