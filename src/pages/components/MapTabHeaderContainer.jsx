import React from 'react'
import { Tab } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

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
        <a href={`#${value}`}>
          {label}
        </a>
      </Tab> 
  )
}

export default MapTabHeaderContainer
