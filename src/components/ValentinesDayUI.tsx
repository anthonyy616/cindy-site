import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { loveQuotes } from '../data/quotes';

const ValentinesDayUI: React.FC = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 to-red-100 overflow-hidden">

            {/* Persistent Floating Quotes in Background */}
            {loveQuotes.map((quote, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.05, 1],
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                    }}
                    className="absolute text-red-300/60 font-serif font-bold text-xl md:text-2xl text-center pointer-events-none select-none max-w-xs"
                    style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                        transform: `rotate(${Math.random() * 20 - 10}deg)`
                    }}
                >
                    "{quote}"
                </motion.div>
            ))}

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-md w-full bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-red-100 z-10"
            >
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex justify-center mb-6"
                >
                    {/* User requested styling: w-24 h-24 text-red-300 fill-red-300 */}
                    <Heart className="w-24 h-24 text-red-400 fill-red-400 filter drop-shadow-md" />
                </motion.div>

                <h1 className="text-4xl font-bold text-red-600 mb-4 font-serif">
                    Happy Valentine's Day!
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    To my beautiful angel,
                    <br />
                    Every day with you is another reason to believe in love.
                    <br />
                    You make my world brighter.
                </p>

                <div className="text-sm text-red-400">
                    With all my love, <br />
                    <span className="font-semibold">Anthony</span>
                </div>
            </motion.div>
        </div>
    );
};

export default ValentinesDayUI;
