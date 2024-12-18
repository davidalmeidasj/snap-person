import React from 'react';

interface CardProps {
    title: string;
    children?: React.ReactNode; // More inclusive than React.JSX.Element
    icon?: React.ReactNode;
}

export function Card({ title, children, icon }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        {icon && <div>{icon}</div>}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}