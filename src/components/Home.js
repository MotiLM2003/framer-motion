import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
  },
};

const Home = () => {
  return (
    <motion.div
      className='home container'
      variants={containerVariants}
      animate='visible'
      initial='hidden'
      exit='exit'
    >
      <motion.h2
        animate={{
          rotate: 12,
        }}
        transition={{ type: 'spring', delay: 1, stiffness: 600 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to='/base'>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: '0px 0px 8px rgb(255,255,255)',
            textShadow: '0px 0px 8px rgb(255,255,255)',
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
