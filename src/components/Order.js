import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Order = ({ pizza }) => {
  const [show, setShow] = useState(true);

  return (
    <div className='container order'>
      {show && (
        <h2 ent exit={{ y: -1000 }}>
          Thank you for your order :)
        </h2>
      )}

      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
