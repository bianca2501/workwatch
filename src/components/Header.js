import React from 'react';
import { FaUserCircle, FaChartLine } from 'react-icons/fa';

const Header = ({ currentUser }) => {
  const user = currentUser || { name: "Unknown", score: "N/A" };

  return (
    <header className="bg-[#3383D4] text-white p-5 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <FaChartLine className="text-2xl float-animation" />
          <h1 className="text-2xl font-bold">WorkWatch</h1>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3 bg-[#2a6bb8] px-4 py-2 rounded-full">
            <FaUserCircle className="text-xl" />
            <span className="font-semibold">{user.name}</span>
          </div>
          
          <div className="bg-[#1E2124] px-5 py-2 rounded-full">
            <span className="font-bold">Focus Score: </span>
            <span className="font-bold text-[#BDDDF2]">{user.score}%</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;