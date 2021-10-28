import React from 'react';
import { motion } from 'framer-motion';

const FadeScaleXWrapper = props => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        scaleX: 1,
      }}
      exit={{
        opacity: 0,
        scaleX: 0,
      }}
      key={props.key || 'App'}
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      transition={{
        duration: props.duration,
        ease: 'easeInOut',
        opacity: 1,
        scaleX: 1,
        type: 'tween',
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeScaleXWrapper;
