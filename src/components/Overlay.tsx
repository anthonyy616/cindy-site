import React, { useState } from 'react';
import { Play, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface OverlayProps {
    onEnter: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onEnter }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-pink-100 cursor-pointer transition-colors duration-500 hover:bg-pink-50"
            onClick={onEnter}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="text-center">
                <motion.div
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-4 inline-block p-4 rounded-full bg-red-400 text-white shadow-lg"
                >
                    {isHovered ? <Heart size={48} fill="currentColor" /> : <Play size={48} fill="currentColor" />}
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-semibold text-red-800"
                >
                    Click to Open My Valentine
                </motion.h1>
            </div>
        </div>
    );
};

export default Overlay;
