import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export default function Info({ children }: Props) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="info-block mb-10"
      ref={ref}
      initial="hidden"
      animate={controls}
      exit={{ opacity: 0 }}
      variants={fadeInUp}
    >
      <div className="floating-square" />
      <div className="info">{children}</div>
    </motion.div>
  );
}
