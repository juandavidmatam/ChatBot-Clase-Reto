
import React from 'react';
import { BotIcon } from './icons';

export const Header: React.FC = () => {
    return (
        <div className="bg-brand-blue-700 text-white p-4 shadow-md flex items-center space-x-4 sticky top-0 z-10">
            <div className="w-12 h-12 bg-white rounded-full p-2 flex-shrink-0">
                <BotIcon />
            </div>
            <div>
                <h1 className="text-xl font-bold">Lupita</h1>
                <p className="text-sm text-blue-200">Asesora Financiera Virtual de Dimex</p>
                <div className="flex items-center space-x-2 mt-1">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    <span className="text-xs text-blue-200">En línea</span>
                </div>
            </div>
        </div>
    );
};
