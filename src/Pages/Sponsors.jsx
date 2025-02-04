import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import github from '/assets/github.png';
import aws from '/assets/aws.png';
import merojob from '/assets/merojob.png';
import panacea from '/assets/panacea.png';
import cfmoto from '/assets/cfmoto.png';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Sponsors = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className='h-[85vh] w-[100vw] flex flex-col justify-around items-center sm:h-[75vh] py-12'
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
        className="sponsors-logo grid grid-cols-3 grid-rows-2 h-[70%] gap-12 p-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.3 }}
      >
        {[github, aws, panacea, merojob, cfmoto].map((logo, index) => (
          <motion.img 
            key={index} 
            src={logo} 
            alt="" 
            className='w-32 h-32 object-contain bg-white rounded-none sm:rounded-full object-center'
            variants={fadeInVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Sponsors;
