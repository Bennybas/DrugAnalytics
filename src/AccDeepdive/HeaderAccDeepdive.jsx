import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeaderAccDeepdive = ({ onAccChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Handleselect = (current_id) => {
    onAccChange(current_id);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const filters = [{ label: 'Account' }];
  const Accounts = [
    { id: 'SD13445E' },
    { id: 'FDGJ456G' },
    { id: 'SGFDS234' },
  ];

  return (
    <div>
      <div className="px-4 py-1 ml-4">
        <div className="flex justify-start items-center gap-4">
          {filters.map((filter, index) => (
            <div key={index} className="relative">
              <div
                onClick={toggleDropdown}
                className="flex items-center justify-between px-4 py-1 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-150 ease-in-out"
              >
                <span className="font-small" style={{ fontSize: '12px' }}>
                  {filter.label}
                </span>
                <ChevronDown className="ml-2 text-gray-500" />
              </div>

              {isOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                  {Accounts.map((account, index1) => (
                    <div
                      key={index1}
                      onClick={() => Handleselect(account.id)}
                      className="px-4 py-2 text-[12px] cursor-pointer hover:bg-gray-100"
                    >
                      {account.id}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-gray-300 mt-2"></div>
    </div>
  );
};

export default HeaderAccDeepdive;
