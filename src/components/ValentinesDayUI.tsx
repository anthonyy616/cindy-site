import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const ValentinesDayUI: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 to-red-100">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-md w-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-red-100"
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
                    To my wonderful girlfriend,
                    <br />
                    Every day with you is a celebration of love.
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
