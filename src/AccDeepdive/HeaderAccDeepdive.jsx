import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeaderAccDeepdive = ({ onAccChange, accountId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(accountId || null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (accountId) {
      setSelectedAccount(accountId);
    }
  }, [accountId]);

  const Handleselect = (current_id) => {
    onAccChange(current_id);
    setSelectedAccount(current_id);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filters = [{ label: 'Account' }];
  const Accounts = [
    { id: 'SD13445E' },
    { id: 'FDGJ456G' },
    { id: 'SGFDS234' },
    { id: 'SDFJKG45' },
    { id: 'RE343KJD' },
    { id: 'MNDFG45F' },
  ];

  return (
    <div>
      <div className="px-4 py-1 ml-4">
        <div className="flex justify-start items-center gap-4">
          {filters.map((filter, index) => (
            <div key={index} className="relative" ref={dropdownRef}>
              <div
                onClick={toggleDropdown}
                className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out min-w-[120px]"
              >
                <span className="font-small text-gray-700 text-sm"style={{fontSize: '12px'}}>
                  {selectedAccount || filter.label}
                </span>
                <ChevronDown 
                  className={`ml-2 text-gray-500 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`} 
                  size={16}
                />
              </div>

              {isOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
                  {Accounts.map((account, index1) => (
                    <div
                      key={index1}
                      onClick={() => Handleselect(account.id)}
                      className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-150
                        ${
                          (selectedAccount === account.id || accountId === account.id)
                            ? "bg-[#004567] text-white"
                            : "text-gray-700 hover:bg-[#004567]/80 hover:text-white"
                        }
                      `}
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