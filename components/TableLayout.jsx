import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Modal from './Modal';

const TableLayout = ({itemsPerPage}) => {
    const pagination = useSelector((state) => state.app.pagination);
    const searchResults = useSelector((state) => state.app.searchResults);
    const [isOpen, setIsOpen] = useState(false)
    const [item, setItem] = useState({})
  return (<>    
         <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={item}/>
  <table className="w-full mb-4 border-collapse text-gray-500">
    <thead>
      <tr className="bg-gray-200">
        {/* <th className="py-2 px-4 text-left">Rocket ID</th> */}
        <th className="py-2 px-4 text-left">Serial</th>
        <th className="py-2 px-4 text-left">Status</th>
        <th className="py-2 px-4 text-left">Original Launch</th>
        <th className="py-2 px-4 text-left">Type</th>
      </tr>
    </thead>
    <tbody>
        {/* {console.log(searchResults.slice(0,4))} */}
      {(pagination.currentPage==1?(searchResults.slice(0,itemsPerPage)):(searchResults)).map((item) => (
          <tr className='cursor-pointer' onClick={()=>{setIsOpen(true),setItem(item)}} key={item.capsule_serial}>
         
          {/* <td className="py-2 px-4 border">{item.rocket_id}</td> */}
          <td className="py-2 px-4 border">{item.capsule_serial}</td>
          <td className="py-2 px-4 border">{item.status}</td>
          <td className="py-2 px-4 border">{item.original_launch}</td>
          <td className="py-2 px-4 border">{item.type}</td>
        </tr>
         ))}
    </tbody>
  </table>
  </>
)
}

export default TableLayout