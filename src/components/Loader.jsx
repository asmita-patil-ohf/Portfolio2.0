import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
      <motion.div
        className="text-4xl md:text-6xl font-bold text-purple-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          AP
        </motion.span>
      </motion.div>
    </div>
  );
}
