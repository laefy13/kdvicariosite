import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import BouncyDiv from './bouncyDiv';

export default function TailwWindButton({
  linkTo,
  name,
  delay = 0,
}: {
  linkTo: string;
  name: string;
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

  return (
    <BouncyDiv
      delay={delay}
      className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden"
    >
      <a
        href={linkTo}
        className="main-button group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
      >
        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
          {name}
        </span>
      </a>
    </BouncyDiv>
  );
}
