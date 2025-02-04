import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aws from '/assets/aws.png';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Community = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className='h-[50vh] w-[100vw] flex flex-col justify-around items-center sm:h-[50vh] py-12'
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      <motion.h1 
        className='text-white text-2xl font-bold text-center tracking-wider sm:text-3xl'
        variants={fadeInVariants}
      >
        Community partner
      </motion.h1>
      <motion.div 
        className="sponsors-logo h-[70%] gap-12 p-4 flex justify-center items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.3 }}
      >
        {[aws].map((logo, index) => (
          <motion.img 
            key={index} 
            src={logo} 
            alt="" 
            className='w-32 h-32 object-contain bg-white rounded-none sm:rounded-full object-center z-20 cursor-pointer'
            variants={fadeInVariants}
            draggable="false"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Community;
