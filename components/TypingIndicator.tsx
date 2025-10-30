
import React from 'react';

export const TypingIndicator: React.FC = () => {
    return (
        <div className="flex items-center space-x-1 p-2">
            <span className="text-gray-500 text-sm">Lupita está escribiendo</span>
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
        </div>
    );
};
