import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
export default function BouncyDiv({
  delay = 0,
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const bounceIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 150, damping: 8, delay },
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
  }, [delay, inView]);

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }
  }, [controls, isVisible]);
  const cName = className ? className : '';

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit={{ opacity: 0 }}
      variants={bounceIn}
      className={`${cName}`}
    >
      {children}
    </motion.div>
  );
}
