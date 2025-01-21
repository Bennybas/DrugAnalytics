import React from 'react';
import FirstSwitch from './Switches/FirstSwtich';
import SecondSwitch from './Switches/SecondSwitch';
import ThirdSwitch from './Switches/ThirdSwitch';

const Switches = () => {
  return (
    <div className="flex flex-col items-start border border-gray-300 rounded-xl w-full h-64 px-4 py-3 gap-4">
      <span className="text-gray-700 text-sm mb-2">Patient Switches</span>
      <div className="flex flex-row items-start gap-4 w-full">
        <div className="bg-[#d7eafc]/50 rounded-xl w-full h-48">
            <FirstSwitch />
        </div>
        <div className="bg-[#d7eafc]/50 rounded-xl w-full h-48">
            <SecondSwitch />
        </div>
        <div className="bg-[#d7eafc]/50 rounded-xl w-full h-48">
            <ThirdSwitch />
        </div>
      </div>
    </div>
  );
};

export default Switches;
