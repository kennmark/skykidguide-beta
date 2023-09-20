import React from 'react'
import { Tab } from '@material-tailwind/react'

const MapTabHeaderContainer = ({ label, value, activeTab, setActiveTab }) => {
  return (
    <Tab
      key={value}
      value={value}
      onClick={() => setActiveTab(value)}
      className={
        activeTab === value ? 'text-indigo-900 font-bold' : 'text-white'
      }
    >
      {label}
    </Tab>
  )
}

export default MapTabHeaderContainer
