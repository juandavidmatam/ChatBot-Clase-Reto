
import React, { useState } from 'react';
import { SendIcon } from './icons';

interface MessageInputProps {
    onSendMessage: (message: string) => void;
    isLoading: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            onSendMessage(input.trim());
            setInput('');
        }
    };

    return (
        <div className="bg-white border-t border-gray-200 p-4 sticky bottom-0">
            <form onSubmit={handleSubmit} className="flex items-center space-x-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    disabled={isLoading}
                    className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue-500 disabled:bg-gray-100"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-brand-blue-600 text-white p-3 rounded-full hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 disabled:bg-brand-blue-300 disabled:cursor-not-allowed transition-colors"
                    aria-label="Enviar mensaje"
                >
                    <SendIcon />
                </button>
            </form>
        </div>
    );
};
