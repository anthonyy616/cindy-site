import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loveQuotes } from '../data/quotes';

interface SlideshowProps {
    onDone: () => void;
}

const images = [
    "/cindy 2.jpg",
    "/cindy 3.jpg",
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

            {/* Floating Quotes */}
            <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuote}
                        initial={{ opacity: 0, y: 20, x: Math.random() * 200 - 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-serif text-red-800 font-bold text-center drop-shadow-lg px-4"
                        style={{
                            // Randomize slightly for "floating" effect, but keep centered-ish
                            marginTop: `${Math.random() * 200 - 100}px`,
                            marginLeft: `${Math.random() * 100 - 50}px`
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
