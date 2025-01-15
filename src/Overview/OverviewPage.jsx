import React from 'react'
import OverviewHeader from './OverviewHeader'
import {MoveUpRight} from 'lucide-react'
import AccountTierChart from './Chart/AccountTier'
import Architype from './Chart/Architype'
import AccSplit from './Chart/AccSplit'
import RegionalMap from './Map'

const OverviewPage = () => {
  return (
    <div className='overflow-auto'>
        <OverviewHeader />
        <div className='p-4 ml-4'>
            <div className='flex gap-4 mt-2'>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm">No. of Prescribers</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">208</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">10.8%</span>
                            <span className="text-gray-500 text-xs">vs last month</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm">Total Patients</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">1525</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">5.2%</span>
                            <span className="text-gray-500 text-xs">vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm">Treatment Centers</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">1525</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">12%</span>
                            <span className="text-gray-500 text-xs">vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm">Active Referals</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">456</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">12%</span>
                            <span className="text-gray-500 text-xs">vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-64 h-24 p-4">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-gray-700 text-sm" >Conversion Rate</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-medium">72%</span>
                            <MoveUpRight className="text-green-500 ml-2" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-xs">4%</span>
                            <span className="text-gray-500 text-xs" >vs last month</span>
                        </div>
                    </div>
                </div>

            </div>


            {/* Second row */}

            <div className='flex gap-4 mt-4'>
                <AccountTierChart />

                <Architype />
                
                <AccSplit />
            </div>

            <div className='flex gap-4 mt-4'>
                <RegionalMap />
            </div>
            
        </div>
    </div>
  )
}

export default OverviewPage