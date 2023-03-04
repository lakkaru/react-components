import React from 'react'

export default function PrimaryNavLeftLink({icon, menu}) {
  return (
    <div style={{display:'flex'}}>
      <img src={icon}  alt='' height='20px'/>
        <p style={{paddingLeft:'5px'}}>{menu}</p>
    </div>
  )
}
