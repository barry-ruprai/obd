
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 p-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Business Explorer. All rights reserved.</p>
        <p className="text-xs mt-1">Powered by React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
