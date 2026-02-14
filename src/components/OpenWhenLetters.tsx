import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';

interface Letter {
    id: string;
    title: string;
    content: string;
    color: string;
}

const letters: Letter[] = [
    {
        id: 'sad',
        title: "Open when you're sad",
        content: "Remember that I'm always here for you. Even on the darkest days, you have a light that shines brighter than what you're dealing with. I'm here for you, always. Call me, and I'll do my best to make you smile. Just reach out to me, no need to ask for permission.",
        color: "bg-blue-100"
    },
    {
        id: 'miss',
        title: "Open when you miss me",
        content: "I miss you too! Probably more than you miss me. Close your eyes and feel my warm hug. I'll be seeing you soon, I promise. Until then, just know I'm probably thinking of you my love.",
        color: "bg-pink-100"
    },
    {
        id: 'laugh',
        title: "Open when you need a laugh",
        content: "I'm not the funniest person in the world, but I'll try my best to make you laugh. Just call me and you know I will  I promise. Till then just keep smiling for me, beautiful!",
        color: "bg-yellow-100"
    },
    {
        id: 'mad',
        title: "Open when you're mad at me",
        content: "I'm sorry. Whatever I did, I didn't mean to hurt you. You mean the world to me, and I hate fighting with you. Let's talk it out, you know our number one rule. I love you.",
        color: "bg-red-100"
    }
];

const OpenWhenLetters: React.FC = () => {
    const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-serif text-center text-red-600 mb-8 font-bold">Open When...</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {letters.map((letter) => (
                    <motion.div
                        key={letter.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedLetter(letter)}
                        className={`${letter.color} p-6 rounded-lg shadow-md cursor-pointer flex items-center gap-4 border-2 border-white/50 relative overflow-hidden group`}
                    >
                        <div className="bg-white p-3 rounded-full shadow-sm">
                            <Mail className="text-gray-600 group-hover:text-red-500 transition-colors" />
                        </div>
                        <span className="font-serif font-semibold text-gray-700 text-lg">{letter.title}</span>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedLetter && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 100 }}
                            className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative border-4 border-red-100"
                        >
                            <button
                                onClick={() => setSelectedLetter(null)}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>

                            <h3 className="text-2xl font-serif font-bold text-red-500 mb-6 border-b pb-2">
                                {selectedLetter.title}
                            </h3>

                            <p className="text-gray-700 text-lg leading-relaxed font-sans whitespace-pre-line">
                                {selectedLetter.content}
                            </p>

                            <div className="mt-8 text-right">
                                <span className="text-red-400 font-serif italic">- Anthony</span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OpenWhenLetters;
