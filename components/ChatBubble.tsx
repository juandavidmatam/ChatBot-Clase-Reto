
import React from 'react';
import type { ChatMessage } from '../types';
import { BotIcon, UserIcon } from './icons';

interface ChatBubbleProps {
    message: ChatMessage;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
    const isBot = message.sender === 'bot';

    return (
        <div className={`flex items-end gap-3 my-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
            {isBot && (
                <div className="w-8 h-8 rounded-full bg-brand-blue-600 text-white p-1.5 flex-shrink-0">
                    <BotIcon />
                </div>
            )}
            <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow ${
                    isBot
                        ? 'bg-white text-gray-800 rounded-bl-none'
                        : 'bg-brand-blue-600 text-white rounded-br-none'
                }`}
            >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
             {!isBot && (
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 p-1.5 flex-shrink-0">
                    <UserIcon />
                </div>
            )}
        </div>
    );
};
