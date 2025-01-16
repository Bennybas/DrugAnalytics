import React from 'react'

const Table_HCPHome = () => {
    const tableData = [
        {
          "HCP ID": "SD13445E",
          "HCP Name": "Dr. Gustavo Aminoff",
          "HCP Archetype": "Specialist",
          "No. of Patients": "150",
          "No. of SMA Patients": "25",
          "Brand": "Zolgensma",
          "HCP Segment": "Pediatric"
        },
        {
          "HCP ID": "RE343KJD",
          "HCP Name": "Dr. Aspen Lubin",
          "HCP Archetype": "General Practitioner",
          "No. of Patients": "200",
          "No. of SMA Patients": "30",
          "Brand": "Spinraza",
          "HCP Segment": "Primary Care"
        },
        {
          "HCP ID": "SDFJKG45",
          "HCP Name": "Dr. Roger Saris",
          "HCP Archetype": "Neurologist",
          "No. of Patients": "120",
          "No. of SMA Patients": "40",
          "Brand": "Evrysdi",
          "HCP Segment": "Specialist"
        },
        {
          "HCP ID": "SGFDS234",
          "HCP Name": "Dr. Omar Stanton",
          "HCP Archetype": "Geneticist",
          "No. of Patients": "80",
          "No. of SMA Patients": "15",
          "Brand": "Zolgensma",
          "HCP Segment": "Genetics"
        },
        {
          "HCP ID": "FDGJ456G",
          "HCP Name": "Dr. Jordyn Bergson",
          "HCP Archetype": "Pediatric Neurologist",
          "No. of Patients": "180",
          "No. of SMA Patients": "50",
          "Brand": "Spinraza",
          "HCP Segment": "Pediatric"
        },
        {
          "HCP ID": "MNDFG45F",
          "HCP Name": "Dr. Lisa Taylor",
          "HCP Archetype": "Physician Assistant",
          "No. of Patients": "250",
          "No. of SMA Patients": "45",
          "Brand": "Evrysdi",
          "HCP Segment": "Primary Care"
        }
      ];
      
  return (
    <div className="w-full px-2 py-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full rounded-lg border border-gray-300 border-collapse">
            <thead>
                <tr>
                    <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-left border border-gray-300">HCP ID</th>
                    <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">HCP Name</th>
                    <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Account Archetype</th>
                    <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">No. of Patients</th>
                    <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">Brand</th>
                    <th className="bg-[#c98b27]/90 text-white p-2 text-[12px] text-right border border-gray-300">HCP Segment</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                        <td className="p-2 text-[10px] font-bold text-left border border-gray-200 bg-[#fcf2e1]" >{row['HCP ID']}</td>
                        <td className="p-2 text-[10px]  text-left border border-gray-200 bg-[#dce4e8]/40" >{row['HCP Name']}</td>
                        <td className="p-2 text-[10px]  text-left border border-gray-200 bg-[#dce4e8]/40" >{row['HCP Archetype']}</td>
                        <td className="p-2 text-[10px]  text-left border border-gray-200 bg-[#dce4e8]/40" >{row['No. of Patients']}</td>
                        <td className="p-2 text-[10px]  text-left border border-gray-200 bg-[#dce4e8]/40" >{row['Brand']}</td>
                        <td className="p-2 text-[10px]  text-left border border-gray-200 bg-[#dce4e8]/40" >{row['HCP Segment']}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table_HCPHome