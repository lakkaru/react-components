import React from 'react'

export default function DashBoard() {
  return (
    <div style={{ display:'flex', backgroundColor:'#44546d', padding:'10px', alignItems:'center', height:'15px'}}>
      <img src='https://www.freeiconspng.com/uploads/dashboard-icon-30.png' alt='' height='20px'/>
            <p style={{marginLeft:'15px', marginRight:'10px'}}>Dashboard</p>
            <div style={{display:'flex', justifyContent:'end', width:'100%'}}>
              <img src='https://www.drupal.org/files/issues/new_4.png' alt='' height='30px'/>
            </div>
    </div>
  )
}
