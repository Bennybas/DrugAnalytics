import React from 'react'
import HeaderHcp_Deepdive from './HeaderHcp_Deepdive'
import {MoveUpRight} from 'lucide-react'
import HCP_Details from './HCP_Details'
import Patients from './Patients'
import AgevsProduct from './AgevsProduct'
import Switches from './Switches'

const HCP_Deepdive = () => {
  return (
    <div className='overflow-auto'>
        <HeaderHcp_Deepdive />
        <div className='p-4 ml-4'>
            <div className='flex gap-3 mt-2'>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-44 h-24 px-2 py-4">
                    <div className="flex flex-col justify-between h-full w-full ml-1">
                        <span className="text-gray-700 text-[12px]">Account Size</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-[15px] font-medium">200</span>
                            <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-[10px]">10.8%</span>
                            <span className="text-gray-500 text-[8.5px]">vs last year</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-44 h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Region</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">350</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">8.4%</span>
                        <span className="text-gray-500 text-[8.5px]">vs last year</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-44 h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Area</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">250</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">12.5%</span>
                        <span className="text-gray-500 text-[8.5px]">vs last year</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-44 h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Territory</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">150</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">8.2%</span>
                        <span className="text-gray-500 text-[8.5px]">vs last quarter</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-44 h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Readiness of GT</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">250</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">12.5%</span>
                        <span className="text-gray-500 text-[8.5px]">vs last year</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-44 h-24 px-2 py-4">
                    <div className="flex flex-col justify-between h-full w-full ml-1">
                        <span className="text-gray-700 text-[12px]">Neurology pats Anually</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-[15px] font-medium">500</span>
                            <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-[10px]">5.2%</span>
                            <span className="text-gray-500 text-[8.5px]">vs last year</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-44 h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Archetype</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">120</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">5.6%</span>
                        <span className="text-gray-500 text-[8.5px]">vs last year</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-44 h-24 px-2 py-4">
                    <div className="flex flex-col justify-between h-full w-full ml-1">
                        <span className="text-gray-700 text-[12px]">SMA patients Annually</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-[15px] font-medium">50</span>
                            <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-[10px]">3.5%</span>
                            <span className="text-gray-500 text-[8.5px]">vs last month</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* second row */}
            <div className='flex gap-4 mt-6'>
                <HCP_Details />

                <Patients />

                <AgevsProduct />

            </div>

            {/* Third Row */}
            <div className='flex mt-6'>
                <Switches />
            </div>

            {/* Empty space */}
            <div className='flex mt-6'>
               
            </div>
        </div>
    </div>
  )
}

export default HCP_Deepdive