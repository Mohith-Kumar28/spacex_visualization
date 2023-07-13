import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Table from './TableLayout'
import GridLayout from './GridLayout'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DataTabs({itemsPerPage}) {
 const tabs=[
  'Table','GridLayout'
 ]

  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabs.map((i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {i}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((i, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
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
