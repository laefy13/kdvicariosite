import '@/public/css/loading.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="loading-body">
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className=" mb-0 text-center text-4xl font-bold leading-none tracking-tight tracking-widest text-gray-900 sm:text-4xl  md:text-4xl lg:text-4xl  dark:text-black">
              KARLOS DANIEL C. VICARIO
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
