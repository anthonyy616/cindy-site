import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
    onComplete: () => void;
}

const messages = [
    "Hi Cindy",
    "Hope you're good baby?",
    "From Anthony to Cindy"
];

const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => {
                if (prev < messages.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(timer);
                    setTimeout(onComplete, 1500); // Wait for last message
                    return prev;
                }
            });
        }, 1500);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <AnimatePresence mode="wait">
                {index < messages.length && (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-3xl md:text-5xl font-serif font-bold text-center p-4"
                    >
                        {messages[index]}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default IntroSequence;
