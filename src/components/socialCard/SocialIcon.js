import React from 'react'

export default function SocialIcon({icon , bgColor}) {
  return (
    <div style={{ display:'flex',justifyContent:'center',backgroundColor:bgColor, minWidth:'275px', padding:'6px'}}>
      <img src={icon} height={'35px'} alt=''/>
    </div>
  )
}
