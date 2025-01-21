import React from 'react';

const TableHCP = () => {
  const tableData = [
    {
      HCP_Name: "Gustavo Aminoff",
      Segment: "--",
      Specialty: "--",
      HCP_Role: "--"
    },
    {
      HCP_Name: "Aspen Lubin",
      Segment: "--",
      Specialty: "--",
      HCP_Role: "--"
    },
    {
      HCP_Name: "Roger Saris",
      Segment: "--",
      Specialty: "--",
      HCP_Role: "--"
    },
    {
      HCP_Name: "Omar Stanton",
      Segment: "--",
      Specialty: "--",
      HCP_Role: "--"
    },
    {
      HCP_Name: "Jordyn Bergson",
      Segment: "--",
      Specialty: "--",
      HCP_Role: "--"
    }
  ];

  return (
    <div className="flex flex-col justify-between w-full h-60">
      <div className="border border-gray-300 rounded-xl overflow-hidden h-full">
        <table className="w-full h-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-left border border-gray-300">HCP Name</th>
              <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Segment</th>
              <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Specialty</th>
              <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">HCP Role</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="p-2 text-[10px] font-bold text-left border border-gray-200 bg-[#dce4e8]/40">{row.HCP_Name}</td>
                <td className="p-2 text-[10px] text-right border border-gray-300">{row.Segment}</td>
                <td className="p-2 text-[10px] text-right border border-gray-300">{row.Specialty}</td>
                <td className="p-2 text-[10px] text-right border border-gray-300">{row.HCP_Role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableHCP;
