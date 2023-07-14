import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Table from './TableLayout'
import GridLayout from './GridLayout'
import { TableCellsIcon,Squares2X2Icon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DataTabs({itemsPerPage}) {
 const tabs=[
  'Table','GridLayout'
 ]

  return (
    <div className="w-full   sm:px-0">
      <Tab.Group >
        <div className='justify-end flex'>
        <Tab.List className="inline-flex  space-x-1 justify-end rounded-t-xl bg-blue-900/20 p-2">
          {tabs.map((i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                classNames(
                  ' rounded-lg p-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
  {i=="Table"&& <TableCellsIcon className='w-6 '/>}
  {i=="GridLayout"&& <Squares2X2Icon className='w-6 '/>}
            {/* {i=="GridLayout"&& <GridLayout itemsPerPage={itemsPerPage}/>} */}
            </Tab>
          ))}
        </Tab.List>
        </div>
        <Tab.Panels className="">
          {tabs.map((i, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-tl-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 overflow-x-auto '
              )}
            >
            {i=="Table"&& <Table itemsPerPage={itemsPerPage}/>}
            {i=="GridLayout"&& <GridLayout itemsPerPage={itemsPerPage}/>}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      
      </Tab.Group>
    </div>
  )
}
