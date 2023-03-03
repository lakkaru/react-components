import React from 'react'
import OnlinestatusCard from './onlineStatus/OnlinestatusCard'

export default function OnlineStatus() {
  return (
    <div style={{display:'flex'}}>
      <OnlinestatusCard/>
      <OnlinestatusCard/>
      <OnlinestatusCard/>
      <OnlinestatusCard/> 
    </div>
  )
}
