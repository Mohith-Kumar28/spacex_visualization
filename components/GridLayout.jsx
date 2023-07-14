import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Modal from './Modal';

const GridLayout = ({itemsPerPage}) => {
    const pagination = useSelector((state) => state.app.pagination);
    const searchResults = useSelector((state) => state.app.searchResults);
    const [isOpen, setIsOpen] = useState(false)
    const [item, setItem] = useState({})
  return (<>    
         <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={item}/>
 

<div className="mx-auto  grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5  py-5   lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {(pagination.currentPage==1?(searchResults.slice(0,itemsPerPage)):(searchResults)).map((item) => (
            <div onClick={()=>{setIsOpen(true),setItem(item)}} key={item.capsule_serial} className="flex max-w-xl flex-col items-start justify-between cursor-pointer bg-gray-100 rounded-lg p-4">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.original_launch} className="text-gray-500">
                  {item.original_launch}
                </time>
                <span
                  
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {item.status}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <div>
                    <span className="absolute inset-0" />
                    {item.type}
                  </div>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.details}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {/* <img src={item.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span>
                      <span className="absolute inset-0" />
                      {item.capsule_id}
                    </span>
                  </p>
                  <p className="text-gray-600">{item.capsule_serial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  </>
)
}

export default GridLayout