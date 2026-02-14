import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoveLetter: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullyOpen, setIsFullyOpen] = useState(false);

    const handleOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => {
                setIsFullyOpen(true);
            }, 2000); // 2 seconds of hearts before showing letter
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 relative">
            <h2 className="text-3xl font-serif text-red-600 mb-8 font-bold">A Letter For You</h2>

            <div className="relative w-full max-w-2xl h-[500px] perspective-1000">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, rotate: -2 }}
                            exit={{ scale: 1.1, opacity: 0, rotate: 5 }}
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            onClick={handleOpen}
                            className="w-full h-full bg-red-100 border-4 border-red-300 rounded-lg shadow-2xl flex flex-col items-center justify-center cursor-pointer z-10 absolute inset-0 transform transition-transform"
                        >
                            <Heart className="w-24 h-24 text-red-500 fill-red-500 animate-pulse" />
                            <p className="mt-4 text-2xl font-serif text-red-800 font-bold">Read Me</p>
                            <p className="mt-2 text-sm text-red-400">(Tap to open)</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full relative"
                    >
                        {/* Heart Flood Animation */}
                        {!isFullyOpen && (
                            <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none overflow-hidden">
                                {[...Array(30)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{
                                            y: 300,
                                            x: Math.random() * 400 - 200,
                                            scale: 0
                                        }}
                                        animate={{
                                            y: -500,
                                            scale: [0, 1.5, 0],
                                            rotate: Math.random() * 360
                                        }}
                                        transition={{
                                            duration: 2,
                                            ease: "easeOut",
                                            delay: Math.random() * 0.5
                                        }}
                                        className="absolute"
                                    >
                                        <Heart className={`w-8 h-8 ${Math.random() > 0.5 ? 'text-red-500 fill-red-500' : 'text-pink-500 fill-pink-500'}`} />
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Letter Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: isFullyOpen ? 1 : 0, scale: isFullyOpen ? 1 : 0.8 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#fff9f0] p-8 md:p-12 rounded-lg shadow-inner w-full h-full overflow-y-auto border-2 border-[#e6dccf]"
                            style={{
                                backgroundImage: 'linear-gradient(#e6dccf 1px, transparent 1px)',
                                backgroundSize: '100% 2em',
                                lineHeight: '2em',
                                fontFamily: "'Dancing Script', cursive, serif"
                            }}
                        >
                            <p className="text-xl md:text-2xl text-gray-800 leading-loose">
                                To my beautiful Cindy,
                                <br />
                                <br />
                                I'm doing all this and writing this too to tell you how much you mean to me and the lengths I'm willing to go for you. You are the most beautiful person I know, inside and out. Knowing someone like you is a treasure, and I am so incredibly lucky to call you mine.
                                <br />
                                <br />
                                Thank you for being my rock, my joy, and my everything. I promise to love you, cherish you, and make you smile every single day.
                                <br />
                                <br />
                                Forever your - your husband (clock itttt),
                                <br />
                                <span className="font-bold">Anthony</span>
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default LoveLetter;
