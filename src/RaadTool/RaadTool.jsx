import React from 'react';
import HeaderRaad from './HeaderRaad';

const RaadTool = () => {
    const tableData = [
        { 
            accountName: "Account 1",
            Desc: 'Current Info',
            size: "Medium",
            raadInputs: "Input A",
            smaPats: "5",
            preferredBrand: "Brand X",
            gtAdmin: "Admin 1",
            noOfPhysicians: "3",
            noOfHCP: "10",
            noOfPatients: "50",
            repAffiliations: "Rep 1"
        },
        { 
            accountName: "Account 2",
            Desc: 'Rep Inputs',
            size: "Large",
            raadInputs: "Input B",
            smaPats: "8",
            preferredBrand: "Brand Y",
            gtAdmin: "Admin 2",
            noOfPhysicians: "5",
            noOfHCP: "15",
            noOfPatients: "75",
            repAffiliations: "Rep 2"
        },
        { 
            accountName: "Account 3",
            Desc: 'Current Info',
            size: "Small",
            raadInputs: "Input C",
            smaPats: "3",
            preferredBrand: "Brand Z",
            gtAdmin: "Admin 3",
            noOfPhysicians: "2",
            noOfHCP: "8",
            noOfPatients: "30",
            repAffiliations: "Rep 3"
        },
        { 
            accountName: "Account 4",
            Desc: 'Rep Inputs',
            size: "Medium",
            raadInputs: "Input D",
            smaPats: "6",
            preferredBrand: "Brand W",
            gtAdmin: "Admin 4",
            noOfPhysicians: "4",
            noOfHCP: "12",
            noOfPatients: "60",
            repAffiliations: "Rep 4"
        }
    ];

    return (
        <div>
            <HeaderRaad />

            <div className="w-full px-8 py-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full rounded-lg border border-gray-300 border-collapse">
                        <thead>
                            <tr>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-left border border-gray-300">Account Name</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">Size</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">Raad Inputs</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">#SMA Pats.</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">Preferred Brand</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">GT Admin</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">No. of Physicians</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">No. of HCP</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">No. of Patients</th>
                                <th className="bg-[#c98b27]/90 text-white p-2 text-[13px] text-right border border-gray-300">Rep Affiliations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td className="p-2 text-[11px] font-bold text-left border border-gray-200 bg-[#dce4e8]/40">{row.accountName}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.size}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.raadInputs}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.smaPats}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.preferredBrand}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.gtAdmin}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.noOfPhysicians}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.noOfHCP}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.noOfPatients}</td>
                                    <td className="p-2 text-[11px] text-right border border-gray-300">{row.repAffiliations}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RaadTool;