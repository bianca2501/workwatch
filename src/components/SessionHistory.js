import React from 'react';
import { FaUser, FaUserSecret, FaImage, FaHistory } from 'react-icons/fa';

const SessionHistory = ({ sessions }) => {
  return (
    <div className="modern-card p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-[#1E2124]">
        <FaHistory className="text-[#3383D4]" />
        Session History
      </h2>
      
      <ul className="space-y-4">
        {sessions.map(session => (
          <li key={session.id} className="bg-[#BDDDF2] bg-opacity-30 p-4 rounded-xl border border-[#CDE1F5]">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-[#1E2124] bg-[#CDE1F5] px-3 py-1 rounded-full text-sm">
                {session.time}
              </span>
              
              <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                session.user === "Unknown" 
                  ? "bg-red-100 text-red-800" 
                  : "bg-[#CDE1F5] text-[#1E2124]"
              }`}>
                {session.user === "Unknown" ? (
                  <FaUserSecret className="text-red-600" />
                ) : (
                  <FaUser className="text-[#3383D4]" />
                )}
                {session.user}
              </span>
            </div>
            
            <p className="text-[#1E2124] mb-2">{session.activity}</p>
            
            {session.image && (
              <div className="flex items-center gap-2 text-[#3383D4] text-sm">
                <FaImage />
                <span>Security photo captured</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionHistory;