import React from 'react'
import HeaderAccTar from './HeaderAccTar'

const AccTargetting = () => {

    const tableData = [
        { 
            accountId: "SD13445E",
            accountName: "--",
            accountArchetype: "Expected Referral Center",
            smaPats: "--",
            accountPriority: "--",
            decisionMaker: "--",
            zolgensmaPrescribers: "--",
            hcpInTarget: "--",
            affiliation: "--"
        },
        { 
            accountId: "RE343KJD",
            accountName: "--",
            accountArchetype: "Probable IT Treatment Site",
            smaPats: "--",
            accountPriority: "--",
            decisionMaker: "--",
            zolgensmaPrescribers: "--",
            hcpInTarget: "--",
            affiliation: "--"
        },
        { 
            accountId: "SDFJKG45",
            accountName: "--",
            accountArchetype: "Current IV Site",
            smaPats: "--",
            accountPriority: "--",
            decisionMaker: "--",
            zolgensmaPrescribers: "--",
            hcpInTarget: "--",
            affiliation: "--"
        },
        { 
            accountId: "SGFDS234",
            accountName: "--",
            accountArchetype: "Expected Referral Center",
            smaPats: "--",
            accountPriority: "--",
            decisionMaker: "--",
            zolgensmaPrescribers: "--",
            hcpInTarget: "--",
            affiliation: "--"
        },
        { 
            accountId: "FDGJ456G",
            accountName: "--",
            accountArchetype: "Affiliated IV Site",
            smaPats: "--",
            accountPriority: "--",
            decisionMaker: "--",
            zolgensmaPrescribers: "--",
            hcpInTarget: "--",
            affiliation: "--"
        },
        { 
            accountId: "MNDFG45F",
            accountName: "--",
            accountArchetype: "Probable IT Treatment Site",
            smaPats: "--",
            accountPriority: "--",
            decisionMaker: "--",
            zolgensmaPrescribers: "--",
            hcpInTarget: "--",
            affiliation: "--"
        },
    ];
  return (
    <div>
        <HeaderAccTar />

        <div className="w-full px-8 py-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full rounded-lg border border-gray-300 border-collapse">
                <thead>
                    <tr>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-left border border-gray-300">Account ID</th>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Account Name</th>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Account Archetype</th>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">#SMA pats.</th>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Account Priority</th>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Decision Makers</th>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">No. Of Drug Prescribers</th>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">No. of HCP's in Target</th>
                        <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Affiliation</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td className="p-2 text-[10px] font-bold text-left border border-gray-200 bg-[#dce4e8]/40" >{row.accountId}</td>
                            <td className="p-2 text-[10px] text-right border border-gray-300">{row.accountName}</td>
                            <td className="p-2 text-[10px] text-right border border-gray-300">{row.accountArchetype}</td>
                            <td className="p-2 text-[10px] text-right border border-gray-300">{row.smaPats}</td>
                            <td className="p-2 text-[10px] text-right border border-gray-300">{row.accountPriority}</td>
                            <td className="p-2 text-[10px] text-right border border-gray-300">{row.decisionMaker}</td>
                            <td className="p-2 text-[10px] text-right border border-gray-300">{row.zolgensmaPrescribers}</td>
                            <td className="p-2 text-[10px] text-right border border-gray-300">{row.hcpInTarget}</td>
                            <td className="p-2 text-[10px] text-right border border-gray-300">{row.affiliation}</td>
                        </tr>
                    ))}
                </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default AccTargetting