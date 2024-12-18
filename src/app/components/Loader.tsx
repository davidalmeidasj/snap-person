import React from 'react';
import { Loader as LoaderIcon } from 'lucide-react';

interface LoaderProps {
    show: boolean;
    children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ show, children }) => {
    return (
        <div className="relative flex items-center justify-center">
            {show ? (
                <div className="flex flex-col items-center justify-center space-y-2">
                    <LoaderIcon className="animate-spin text-gray-500" size={48} />
                    <span className="text-gray-500">Loading...</span>
                </div>
            ) : (
                <div className="w-full h-full">{children}</div>
            )}
        </div>
    );
};

export default Loader;