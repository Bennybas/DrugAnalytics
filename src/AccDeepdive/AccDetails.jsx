import React from 'react'
import metricsData from '../data/metrics.json';

const AccDetails = ({accountId}) => {
    const accountMetrics = metricsData.find(account => account.AccId === accountId);

    return (
        <div className="flex w-full h-60 px-2 py-2 border border-gray-300 rounded-xl">
            <div className="flex flex-col justify-between w-full h-full">
                <span className="text-gray-700 text-sm">Account Details</span>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <span className="text-gray-700 text-xs">Acc ID</span>
                        <span className="text-black text-xs font-medium">{accountId}</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <span className="text-gray-700 text-xs">City</span>
                        <span className="text-black text-xs font-medium">--</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <span className="text-gray-700 text-xs">Acc Name</span>
                        <span className="text-black text-xs font-medium">
                            {accountMetrics.metrics.find(m => m.name === "account_details").acc_name}
                        </span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <span className="text-gray-700 text-xs">State</span>
                        <span className="text-black text-xs font-medium">
                            {accountMetrics.metrics.find(m => m.name === "account_details").state}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <span className="text-gray-700 text-xs">Setting</span>
                        <span className="text-black text-xs font-medium">--</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <span className="text-gray-700 text-xs">ZIP</span>
                        <span className="text-black text-xs font-medium">
                            {accountMetrics.metrics.find(m => m.name === "account_details").zip}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <span className="text-gray-700 text-xs">IDN Name</span>
                        <span className="text-black text-xs font-medium">--</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <span className="text-gray-700 text-xs">Address 1</span>
                        <span className="text-black text-xs font-medium">--</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccDetails