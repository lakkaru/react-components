import React from 'react'
import OnlinestatusCard from './onlineStatus/OnlinestatusCard'

const card_colors=['#2718b2', '#2d8be3', '#f7a211', '#d74244']
export default function OnlineStatus() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',marginTop:'15px',marginBottom:'15px', padding:'0px 15px'}}>
      {card_colors.map((val,key)=>{
        return <OnlinestatusCard key={key} color={val}/>
      })}
    </div>
  )
}
