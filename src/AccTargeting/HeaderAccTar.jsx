import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeaderAccTar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});
  const dropdownRef = useRef(null);

  const filters = [
    {
      id: 'account_id',
      label: 'Account ID',
      options: [
        { value: 'acc_001', label: 'SD13445E' },
        { value: 'acc_002', label: 'FDGJ456G' },
        { value: 'acc_003', label: 'SGFDS234' },
        { value:'acc_004' , label:'SDFJKG45'}
      ]
    },
    {
      id: 'account_archetype',
      label: 'Account Archetype',
      options: [
        { value: 'hospital', label: 'Hospital' },
        { value: 'clinic', label: 'Clinic' },
        { value: 'pharmacy', label: 'Pharmacy' },
        { value: 'laboratory', label: 'Laboratory' },
      ]
    },
    {
      id: 'account_tier',
      label: 'Account Tier',
      options: [
        { value: 'tier_1', label: 'Tier 1' },
        { value: 'tier_2', label: 'Tier 2' },
        { value: 'tier_3', label: 'Tier 3' },
        { value: 'tier_4', label: 'Tier 4' },
      ]
    },
    {
      id: 'account_setting',
      label: 'Account Setting',
      options: [
        { value: 'urban', label: 'Urban' },
        { value: 'suburban', label: 'Suburban' },
        { value: 'rural', label: 'Rural' },
      ]
    },
    {
      id: 'gene_therapy',
      label: 'Gene Therapy',
      options: [
        { value: 'approved', label: 'Approved' },
        { value: 'pending', label: 'Pending' },
        { value: 'not_approved', label: 'Not Approved' },
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (filterId) => {
    setOpenDropdown(openDropdown === filterId ? null : filterId);
  };

  const handleSelect = (filterId, value, label) => {
    setSelectedValues(prev => ({
      ...prev,
      [filterId]: { value, label }
    }));
    setOpenDropdown(null);
  };

  return (
    <div>
      <div className="px-4 py-1 ml-4">
        <div className="flex justify-start items-center gap-4">
          {filters.map((filter) => (
            <div key={filter.id} className="relative" ref={dropdownRef}>
              <div
                onClick={() => toggleDropdown(filter.id)}
                className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-150 ease-in-out min-w-[140px]"
              >
                <span className="font-small text-gray-700 text-sm" style={{fontSize: '12px'}}>
                  {selectedValues[filter.id]?.label || filter.label}
                </span>
                <ChevronDown 
                  className={`ml-2 text-gray-500 transition-transform duration-200 ${
                    openDropdown === filter.id ? 'transform rotate-180' : ''
                  }`}
                  size={14}
                />
              </div>

              {openDropdown === filter.id && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
                  {filter.options.map((option) => (
                    <div
                      key={option.value}
                      onClick={() => handleSelect(filter.id, option.value, option.label)}
                      className={`px-4 py-2 text-xs cursor-pointer transition-colors duration-150
                        ${
                          selectedValues[filter.id]?.value === option.value
                            ? "bg-[#004567] text-white"
                            : "text-gray-700 hover:bg-[#004567]/80 hover:text-white"
                        }
                      `}
                    >
                      {option.label}
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

export default HeaderAccTar;