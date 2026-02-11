import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loveQuotes } from '../data/quotes';

interface SlideshowProps {
    onDone: () => void;
}

const images = [
    "/cindy 2.jpg",
    "/cindy 3.jpg",
    "/cindy 4.jpg",
    "/cindy 5.jpg",
    "/cindy fav.jpg"
];

const Slideshow: React.FC<SlideshowProps> = ({ onDone }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentQuote, setCurrentQuote] = useState(0);

    // Cycle images
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // Cycle quotes (faster than images)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-screen bg-pink-50 overflow-hidden flex flex-col items-center justify-center">
            {/* Background Slideshow */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="Memory"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
            </AnimatePresence>

            {/* Floating Quotes - Centered via Flexbox */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuote}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl text-2xl md:text-5xl font-serif text-white font-bold text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                        style={{
                            textShadow: "0px 4px 10px rgba(0,0,0,0.8)"
                        }}
                    >
                        "{loveQuotes[currentQuote]}"
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Done Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDone}
                className="absolute bottom-10 z-50 px-8 py-3 bg-red-500 text-white rounded-full font-semibold shadow-xl hover:bg-red-600 transition-colors"
            >
                Done &rarr;
            </motion.button>
        </div>
    );
};

export default Slideshow;
