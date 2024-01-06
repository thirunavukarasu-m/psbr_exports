// PageTransition.js
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default PageTransition;
