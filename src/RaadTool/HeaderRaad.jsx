import React,{useState,useEffect,useRef} from 'react'
import {ChevronDown} from 'lucide-react'

const HeaderRaad = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const dropdownRef = useRef(null);
  
    const accounts = [
      { id: 'SD13445E' },
      { id: 'FDGJ456G' },
      { id: 'SGFDS234' },
      { id: 'SDFJKG45' },
      { id: 'RE343KJD' },
      { id: 'MNDFG45F' },
    ];
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    const handleSelect = (accountId) => {
      setSelectedAccount(accountId);
      setIsOpen(false);
    };
    const filters = [
        { label: 'Select Account' },
      ];
  return (
    <div>
        <div className="px-4 py-1 ml-4">
          <div className="flex justify-start items-center gap-4">
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-150 ease-in-out min-w-[120px]"
              >
                <span className="font-small text-gray-700 text-sm" style={{fontSize: '12px'}}>
                  {selectedAccount || 'Select Account'}
                </span>
                <ChevronDown 
                  className={`ml-2 text-gray-500 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                  size={14}
                />
              </div>
  
              {isOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
                  {accounts.map((account) => (
                    <div
                      key={account.id}
                      onClick={() => handleSelect(account.id)}
                      className={`px-4 py-2 text-xs cursor-pointer transition-colors duration-150
                        ${
                          selectedAccount === account.id
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
          </div>
        </div>
        <div className="w-full border-t border-gray-300 mt-2"></div>
      </div>
  )
}

export default HeaderRaad