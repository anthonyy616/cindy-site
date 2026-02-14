import React, { useState } from 'react';
import { Heart, Stars, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { loveQuotes } from '../data/quotes';
import { reasonsWhyILoveYou } from '../data/reasons';
import LoveLetter from './LoveLetter';
import OpenWhenLetters from './OpenWhenLetters';

const ValentinesDayUI: React.FC = () => {
    const [currentReasonIndex, setCurrentReasonIndex] = useState(0);

    const nextReason = () => {
        setCurrentReasonIndex((prev) => (prev + 1) % reasonsWhyILoveYou.length);
    };

    // Safe zones for quotes to avoid overlapping the center card
    // 0: Top-Left, 1: Top-Right, 2: Bottom-Left, 3: Bottom-Right, 4: Top-Center, 5: Bottom-Center
    const getPosition = (index: number) => {
        const zone = index % 6;
        switch (zone) {
            case 0: return { top: '10%', left: '10%' };
            case 1: return { top: '10%', right: '10%' };
            case 2: return { bottom: '10%', left: '10%' };
            case 3: return { bottom: '15%', right: '10%' };
            case 4: return { top: '5%', left: '50%', transform: 'translateX(-50%)' };
            case 5: return { bottom: '5%', left: '50%', transform: 'translateX(-50%)' };
            default: return { top: '50%', left: '10%' };
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 overflow-y-auto overflow-x-hidden">

            {/* Hero Section */}
            <div className="min-h-screen relative flex items-center justify-center p-4">

                {/* Persistent Floating Quotes in Background */}
                {loveQuotes.map((quote, index) => {
                    const pos = getPosition(index);
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: [0.6, 1, 0.6],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: index * 1,
                                ease: "easeInOut"
                            }}
                            className="absolute text-red-400/80 font-serif font-bold text-lg md:text-xl text-center pointer-events-none select-none max-w-[200px] md:max-w-xs z-0"
                            style={pos}
                        >
                            "{quote}"
                        </motion.div>
                    );
                })}

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-md w-full bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-red-100/50 z-10 flex flex-col items-center"
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex justify-center mb-6"
                    >
                        <Heart className="w-24 h-24 text-red-500 fill-red-500 filter drop-shadow-md" />
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

                    {/* Feature: Time Together Counter */}
                    <div className="mb-6 p-4 bg-pink-50 rounded-lg w-full">
                        <h3 className="text-red-500 font-semibold mb-2">Celebrating Us</h3>
                        <div className="text-gray-600 text-sm">
                            Since the day I set my eyes on you, I knew you were the one.
                            <br />
                            <span className="text-xs text-red-400 mt-1 block">
                                (Here's to many more memories together!)
                            </span>
                        </div>
                    </div>

                    {/* Feature: 50 Reasons Why I Love You */}
                    <div className="mt-4 w-full">
                        <button
                            onClick={nextReason}
                            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-md active:scale-95 transition-transform hover:bg-red-600 flex items-center justify-center gap-2 mx-auto"
                        >
                            <Stars size={18} />
                            Why I Love You
                        </button>

                        <div className="h-16 mt-4 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentReasonIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-600 font-medium italic text-lg"
                                >
                                    "{reasonsWhyILoveYou[currentReasonIndex]}"
                                </motion.p>
                            </AnimatePresence>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Click to see another reason ({currentReasonIndex + 1}/{reasonsWhyILoveYou.length})</p>
                    </div>

                    <div className="text-sm text-red-400 mt-8">
                        With all my love, <br />
                        <span className="font-semibold">Anthony</span>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-red-400 flex flex-col items-center gap-1 opacity-70"
                >
                    <span className="text-sm font-semibold">Scroll Down for More</span>
                    <ChevronDown size={24} />
                </motion.div>
            </div>

            {/* Feature: Love Letter */}
            <div className="min-h-screen flex items-center justify-center bg-transparent py-20">
                <LoveLetter />
            </div>

            {/* Feature: Open When Letters */}
            <div className="min-h-screen flex items-center justify-center bg-transparent py-20 pb-40">
                <OpenWhenLetters />
            </div>

        </div>
    );
};

export default ValentinesDayUI;
