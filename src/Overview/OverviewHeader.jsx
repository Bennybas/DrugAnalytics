import React from 'react';
import {ChevronDown} from 'lucide-react'


const OverviewHeader = () => {
  const filters = [
    { label: 'Region' },
    { label: 'Area' },
    { label: 'Territory' },
    { label: 'Account ID' },
    { label: '340 B Site' },
    { label: 'Top N' },
  ];

  return (
    <div>
    <div className="px-4 py-1 ml-4">
      <div className="flex justify-start items-center gap-4">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-1 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-150 ease-in-out"
          >
            <span className="font-small" style={{fontSize:'12px'}}>{filter.label}</span>
            <ChevronDown className="ml-2 text-gray-500" />
          </div>
        ))}
      </div>

    </div>
    <div className="w-full border-t border-gray-300 mt-2"></div>
    </div>
  );
};

export default OverviewHeader;
