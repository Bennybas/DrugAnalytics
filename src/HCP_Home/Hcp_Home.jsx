import React from 'react'
import Header_HCPhome from './Header_HCPhome'
import {MoveUpRight} from 'lucide-react'
import Table_HCPHome from './Table_HCPHome'

const Hcp_Home = ({setActivePage }) => {
  return (
    <div>
        <Header_HCPhome />
        <div className='p-4 ml-4'>
            <div className='flex gap-4 mt-2'>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm">HCP ID</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">--</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">10.8%</span>
                            <span className="text-gray-500 text-xs">vs last year</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm">Current Drug</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">500</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">5.2%</span>
                            <span className="text-gray-500 text-xs">vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm">Top N</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">50</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">3.5%</span>
                            <span className="text-gray-500 text-xs">vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm">HCP by Segments</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">100</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">12%</span>
                            <span className="text-gray-500 text-xs">vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm" >HCP by Speciality</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">65</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">10%</span>
                            <span className="text-gray-500 text-xs" >vs last month</span>
                        </div>
                    </div>
                </div>

            </div>


            {/* Table */}
            <div className='mt-4'>
                <Table_HCPHome setActivePage= {setActivePage }/>

            </div>
        </div>
    </div>
  )
}

export default Hcp_Home