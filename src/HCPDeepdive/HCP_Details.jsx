import React from 'react'
import metricsData from '../data/hcp_data.json'

const HCP_Details = ({Hcp_Id}) => {
    const HcpMetrics = metricsData.find(HCP => HCP.HCP_id === Hcp_Id);
    
    return (
        <div className="flex items-center justify-between border border-gray-300 rounded-xl w-full h-60 px-2 py-2">
            <div className="flex flex-col justify-between h-full w-full">
                <span className="text-gray-700 text-sm">HCP Details</span>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-full px-3 py-2">
                        <span className="text-gray-700 text-[11px]">HCP ID</span>
                        <span className="text-black text-[11px] font-medium">{Hcp_Id}</span>
                    </div>
                    <div className="flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-full px-2 py-2">
                        <span className="text-gray-700 text-[11px]">City</span>
                        <span className="text-black text-[11px] font-medium">--</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-full px-3 py-2">
                        <span className="text-gray-700 text-[11px]">HCP Name</span>
                        <span className="text-black text-[11px] font-medium">{HcpMetrics.metrics.find(m =>m.name=="HCP_details").HCP_Name}</span>
                    </div>
                    <div className="flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-full px-2 py-2">
                        <span className="text-gray-700 text-[11px]">State</span>
                        <span className="text-black text-[11px] font-medium">{HcpMetrics.metrics.find(m =>m.name=="HCP_details").state}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-full px-3 py-2">
                        <span className="text-gray-700 text-[11px]">Setting</span>
                        <span className="text-black text-[11px] font-medium">--</span>
                    </div>
                    <div className="flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-full px-2 py-2">
                        <span className="text-gray-700 text-[11px]">ZIP</span>
                        <span className="text-black text-[11px] font-medium">{HcpMetrics.metrics.find(m =>m.name=="HCP_details").zip}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-full px-3 py-2">
                        <span className="text-gray-700 text-[11px]">IDN Name</span>
                        <span className="text-black text-[11px] font-medium">--</span>
                    </div>
                    <div className="flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-full px-2 py-2">
                        <span className="text-gray-700 text-[11px]">Address 1</span>
                        <span className="text-black text-[11px] font-medium">--</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
            </div>
        </div>
    )
}

export default HCP_Details