import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import github from '/assets/github.png';
import merojob from '/assets/merojob.png';
import panacea from '/assets/panacea.png';
import cfmoto from '/assets/cfmoto.png';
import baking from '/assets/baking.png';
import donut from '/assets/donut.png';
import leapfrog from '/assets/leapfrog.png';
import programiz from '/assets/programiz.png';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Sponsors = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className='h-[100vh] w-[100vw] flex flex-col justify-around items-center sm:h-[75vh] py-12'
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      <motion.h1 
        className='text-white text-2xl font-bold text-center tracking-wider sm:text-3xl'
        variants={fadeInVariants}
      >
        Our Partners
      </motion.h1>
      <motion.div 
        className="sponsors-logo grid grid-cols-2 sm:grid-cols-4 gap-8 p-4 justify-items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.2 }}
      >
        {[github, panacea, merojob, cfmoto, baking, donut, leapfrog, programiz].map((logo, index) => (
          <motion.img 
            key={index} 
            src={logo} 
            alt="sponsor-logo" 
            className='w-28 h-28 sm:w-32 sm:h-32 object-contain bg-white rounded-full p-[2px] cursor-pointer'
            variants={fadeInVariants}
            draggable="false"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Sponsors;
