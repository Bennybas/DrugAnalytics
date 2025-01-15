import React from 'react'

const AccDetails = () => {
  return (
    
    <div className="flex items-center justify-between border border-gray-300 rounded-xl w-[395px] h-60 px-2 py-2">
        <div className="flex flex-col justify-between h-full">
            <span className="text-gray-700 text-sm">Account Details</span>
            <div className='flex gap-4'>
                <div className='flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-44 px-3 py-2'>
                    <span className="text-gray-700 text-[11px]" >Acc ID</span>
                        
                    <span className="text-black text-[11px] font-medium" >SDF245WA</span>
                </div>
                <div className='flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-44 px-2 py-2'>
                    <span className="text-gray-700 text-[11px]" >City</span>
                        
                    <span className="text-black text-[11px] font-medium" >--</span>
                </div>

            </div>
            <div className='flex gap-4'>
                <div className='flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-44 px-3 py-2'>
                    <span className="text-gray-700 text-[11px]" >Acc Name</span>
                        
                    <span className="text-black text-[11px] font-medium" >Nova Loke</span>
                </div>
                <div className='flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-44 px-2 py-2'>
                    <span className="text-gray-700 text-[11px]" >State</span>
                        
                    <span className="text-black text-[11px] font-medium" >Florida</span>
                </div>

            </div>
            <div className='flex gap-4'>
                <div className='flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-44 px-3 py-2'>
                    <span className="text-gray-700 text-[11px]" >Setting</span>
                        
                    <span className="text-black text-[11px] font-medium" >--</span>
                </div>
                <div className='flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-44 px-2 py-2'>
                    <span className="text-gray-700 text-[11px]" >ZIP</span>
                        
                    <span className="text-black text-[11px] font-medium" >19701</span>
                </div>

            </div>
            <div className='flex gap-4'>
                <div className='flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-44 px-3 py-2'>
                    <span className="text-gray-700 text-[11px]" >IDN Name</span>
                        
                    <span className="text-black text-[11px] font-medium" >--</span>
                </div>
                <div className='flex border justify-between items-center border-gray-300 rounded-lg h-[40px] w-44 px-2 py-2'>
                    <span className="text-gray-700 text-[11px]" >Address 1</span>
                        
                    <span className="text-black text-[11px] font-medium" >--</span>
                </div>

            </div>

        </div>
        <div className='flex flex-col gap-2'>
            
        </div>
    </div>
    
  )
}

export default AccDetails