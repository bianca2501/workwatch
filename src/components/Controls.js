import React, { useState } from 'react';
import { FaBan, FaPlay, FaPause, FaShieldAlt } from 'react-icons/fa';

const Controls = () => {
  const [isFocusModeOn, setIsFocusModeOn] = useState(false);

  const toggleFocusMode = () => {
    setIsFocusModeOn(!isFocusModeOn);
    alert(`Focus Mode ${!isFocusModeOn ? 'Enabled' : 'Disabled'}`);
  };

  return (
    <div className="modern-card p-6 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-3 text-[#1E2124]">
        <FaShieldAlt className="text-[#3383D4]" />
        Productivity Controls
      </h2>
      
      <div>
        <label className="block text-sm font-semibold text-[#1E2124] mb-3">
          🚫 Block Websites/Apps
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g., youtube.com, facebook.com"
            className="cool-input flex-1"
          />
          <button className="btn-accent p-3">
            <FaBan className="text-lg" />
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1E2124] mb-3">
          🎯 Focus Mode
        </label>
        <button
          onClick={toggleFocusMode}
          className={`w-full p-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
            isFocusModeOn 
              ? 'btn-secondary' 
              : 'btn-accent'
          }`}
        >
          {isFocusModeOn ? (
            <>
              <FaPause className="text-lg" />
              Disable Focus Mode
            </>
          ) : (
            <>
              <FaPlay className="text-lg" />
              Enable Focus Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Controls;