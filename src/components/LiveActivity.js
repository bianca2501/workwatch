import React from 'react';
import { FaDesktop, FaClock, FaCode } from 'react-icons/fa';

const LiveActivity = ({ activity }) => {
  return (
    <div className="modern-card p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-[#1E2124]">
        <FaDesktop className="text-[#3383D4]" /> 
        Live Activity
        <div className="w-3 h-3 bg-green-500 rounded-full pulse-animation ml-2"></div>
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-[#BDDDF2] bg-opacity-30 rounded-xl">
          <div className="p-3 bg-[#3383D4] bg-opacity-20 rounded-full">
            <FaCode className="text-[#3383D4] text-xl" />
          </div>
          <div>
            <p className="font-semibold text-[#1E2124]">Current Application</p>
            <p className="text-2xl font-bold text-[#3383D4]">{activity.app}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-[#CDE1F5] rounded-xl">
          <div className="p-3 bg-[#3383D4] bg-opacity-20 rounded-full">
            <FaClock className="text-[#3383D4] text-xl" />
          </div>
          <div>
            <p className="font-semibold text-[#1E2124]">Time on Task</p>
            <p className="text-2xl font-bold text-[#3383D4]">{activity.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveActivity;