import React from 'react';

export const Header: React.FC = () => {
    return (
        <div className="bg-brand-green-700 text-white p-4 shadow-md flex items-center justify-between sticky top-0 z-10">
            <div>
                <h1 className="text-xl font-bold">Lupita</h1>
                <p className="text-sm text-green-200">Asesora Financiera Virtual de Dimex</p>
                <div className="flex items-center space-x-2 mt-1">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    <span className="text-xs text-green-200">En línea</span>
                </div>
            </div>
            <div className="text-2xl font-bold tracking-wider">
                DIMEX
            </div>
        </div>
    );
};
