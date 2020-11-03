import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, type: 'spring' },
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <motion.divpizzaBaseVariants
      className='base container'
      variants={'sd'}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base, index) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              whileHover='hover'
              onClick={() => addBase(base)}
              variants={pizzaBaseVariants}
              initial='hidden'
              animate='visible'
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className='next'
          initial={{ x: '-100vh' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 80 }}
        >
          <Link to='/toppings'>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 8px rgb(255,255,255)',
                textShadow: '0px 0px 8px rgb(255,255,255)',
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.divpizzaBaseVariants>
  );
};

export default Base;
