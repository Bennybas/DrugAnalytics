import React,{useState} from 'react'
import HeaderAccDeepdive from './HeaderAccDeepdive'
import {MoveUpRight} from 'lucide-react'
import AccDetails from './AccDetails'
import Patients from './Patients'
import TreatedPats from './TreatedPats'
import HCPsegment from './HCPsegment'
import Speciality from './Speciality'
import TableHCP from './TableHCP'
import metricsData from '../data/metrics.json'

const AccDeepdive = ({accountId}) => {

    const [CurrentID, setCurrentID] = useState(accountId || 'SD13445E');
    
    const handleAccountChange = (id) => {
        setCurrentID(id);
    };

    const accountMetrics = metricsData.find(account => account.AccId === CurrentID);

  return (
    <div className='overflow-auto'>
        <HeaderAccDeepdive onAccChange={handleAccountChange} accountId={CurrentID}/>

        <div className='p-4 ml-4'>
            <div className='flex gap-3 mt-2'>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-24 px-2 py-4">
                    <div className="flex flex-col justify-between h-full w-full ml-1">
                        <span className="text-gray-700 text-[12px]">Account Size</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-[15px] font-medium">{accountMetrics.metrics.find(m => m.name === "Account Size").value}</span>
                            <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-[10px]">{accountMetrics.metrics.find(m => m.name === "Account Size").growth}</span>
                            <span className="text-gray-500 text-[8.5px]">{accountMetrics.metrics.find(m => m.name === "Account Size").comparison}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Region</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">{accountMetrics.metrics.find(m => m.name === "Region").value}</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">{accountMetrics.metrics.find(m => m.name === "Region").growth}</span>
                        <span className="text-gray-500 text-[8.5px]">{accountMetrics.metrics.find(m => m.name === "Region").comparison}</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Area</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">{accountMetrics.metrics.find(m => m.name === "Area").value}</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">{accountMetrics.metrics.find(m => m.name === "Area").growth}</span>
                        <span className="text-gray-500 text-[8.5px]">{accountMetrics.metrics.find(m => m.name === "Area").comparison}</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Territory</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">{accountMetrics.metrics.find(m => m.name === "Territory").value}</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">{accountMetrics.metrics.find(m => m.name === "Territory").growth}</span>
                        <span className="text-gray-500 text-[8.5px]">{accountMetrics.metrics.find(m => m.name === "Territory").comparison}</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Readiness of GT</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">{accountMetrics.metrics.find(m => m.name === "Readiness of GT").value}</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">{accountMetrics.metrics.find(m => m.name === "Readiness of GT").growth}</span>
                        <span className="text-gray-500 text-[8.5px]">{accountMetrics.metrics.find(m => m.name === "Readiness of GT").comparison}</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-24 px-2 py-4">
                    <div className="flex flex-col justify-between h-full w-full ml-1">
                        <span className="text-gray-700 text-[12px]">Neurology pats Anually</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-[15px] font-medium">{accountMetrics.metrics.find(m => m.name === "Neurology pats Annually").value}</span>
                            <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-[10px]">{accountMetrics.metrics.find(m => m.name === "Neurology pats Annually").growth}</span>
                            <span className="text-gray-500 text-[8.5px]">{accountMetrics.metrics.find(m => m.name === "Neurology pats Annually").comparison}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-24 px-2 py-4">
                <div className="flex flex-col justify-between h-full w-full ml-1">
                    <span className="text-gray-700 text-[12px]">Archetype</span>
                    <div className="flex items-center space-x-1">
                        <span className="text-[15px] font-medium">{accountMetrics.metrics.find(m => m.name === "Archetype").value}</span>
                        <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                        <span className="text-green-500 text-[10px]">{accountMetrics.metrics.find(m => m.name === "Archetype").growth}</span>
                        <span className="text-gray-500 text-[8.5px]">{accountMetrics.metrics.find(m => m.name === "Archetype").comparison}</span>
                    </div>
                </div>

                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-24 px-2 py-4">
                    <div className="flex flex-col justify-between h-full w-full ml-1">
                        <span className="text-gray-700 text-[12px]">SMA patients Annually</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-[15px] font-medium">{accountMetrics.metrics.find(m => m.name === "SMA patients Annually").value}</span>
                            <MoveUpRight className="text-green-500" style={{ width: '10px', height: '10px' }} />
                            <span className="text-green-500 text-[10px]">{accountMetrics.metrics.find(m => m.name === "SMA patients Annually").growth}</span>
                            <span className="text-gray-500 text-[8.5px]">{accountMetrics.metrics.find(m => m.name === "SMA patients Annually").comparison}</span>
                        </div>
                    </div>
                </div>
            </div>
            


            {/* Second row */}

            <div className='flex gap-4 mt-6'>
                <AccDetails accountId={CurrentID} />

                <Patients accountId={CurrentID}/>

                <TreatedPats  accountId={CurrentID}/>
            </div>


            {/* Third Row */}

            <div className='flex gap-4 mt-6'>
                <HCPsegment accountId={CurrentID} />

                <Speciality accountId={CurrentID}/>

                <TableHCP />

            </div>


            {/* Empty Space */}
            <div className='flex gap-4 mt-8'>

            </div>



        </div>
    </div>
  )
}

export default AccDeepdive