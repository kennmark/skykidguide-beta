import React from 'react'
import { Tab } from '@material-tailwind/react'

const MapTabHeaderContainer = ({ label, value, activeTab, setActiveTab }) => {
  return (
    <Tab
      key={value}
      value={value}
      onClick={() => setActiveTab(value)}
      className={`py-3 theme-navbar
                ${activeTab === value ? 'text-[#233d4d]' : 'text-[#fe7f2d]'}
      `}
    >
      {label}
    </Tab>
  )
}

export default MapTabHeaderContainer
