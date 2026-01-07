import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary-foreground"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <img 
          src="/favicon.png" 
          alt="Ceylon Tour Rides" 
          className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Brand Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2 tracking-wide"
      >
        Ceylon Tour Rides
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-primary-foreground/70 text-sm md:text-base mb-8"
      >
        Explore Sri Lanka Your Way
      </motion.p>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "200px", opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="h-1 bg-primary-foreground/20 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-secondary rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-primary-foreground/50 text-xs mt-4"
      >
        Loading your adventure...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
