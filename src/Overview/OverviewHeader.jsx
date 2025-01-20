import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const OverviewHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});
  const dropdownRef = useRef(null);

  const filters = [
    {
      id: 'region',
      label: 'Region',
      options: [
        { value: 'california', label: 'California' },
        { value: 'texas', label: 'Texas' },
        { value: 'new_york', label: 'New York' },
        { value: 'florida', label: 'Florida' },
      ]
    },
    {
      id: 'area',
      label: 'Area',
      options: [
        { value: 'north', label: 'North' },
        { value: 'south', label: 'South' },
        { value: 'east', label: 'East' },
        { value: 'west', label: 'West' },
      ]
    },
    {
      id: 'territory',
      label: 'Territory',
      options: [
        { value: 'urban', label: 'Urban' },
        { value: 'suburban', label: 'Suburban' },
        { value: 'rural', label: 'Rural' },
      ]
    },
    {
      id: 'account',
      label: 'Account ID',
      options: [
        { value: 'acc_001', label: 'ACC-001' },
        { value: 'acc_002', label: 'ACC-002' },
        { value: 'acc_003', label: 'ACC-003' },
      ]
    },
    {
      id: '340b',
      label: '340 B Site',
      options: [
        { value: 'site_1', label: 'Site 1' },
        { value: 'site_2', label: 'Site 2' },
        { value: 'site_3', label: 'Site 3' },
      ]
    },
    {
      id: 'topn',
      label: 'Top N',
      options: [
        { value: '5', label: 'Top 5' },
        { value: '10', label: 'Top 10' },
        { value: '20', label: 'Top 20' },
      ]
    }
  ];

  // Close dropdown when clicking outside
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
        <div className="flex flex-wrap justify-start items-center gap-4">
          {filters.map((filter) => (
            <div key={filter.id} className="relative" ref={dropdownRef}>
              <div
                onClick={() => toggleDropdown(filter.id)}
                className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out min-w-[120px]"
              >
                <span className="font-small text-gray-700 text-sm" style={{fontSize: '12px'}}>
                  {selectedValues[filter.id]?.label || filter.label}
                </span>
                <ChevronDown 
                  className={`ml-2 text-gray-500 transition-transform duration-200 ${
                    openDropdown === filter.id ? 'transform rotate-180' : ''
                  }`}
                  size={16}
                />
              </div>

              {openDropdown === filter.id && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
                  {filter.options.map((option) => (
                    <div
                      key={option.value}
                      onClick={() => handleSelect(filter.id, option.value, option.label)}
                      className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-150
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

export default OverviewHeader;