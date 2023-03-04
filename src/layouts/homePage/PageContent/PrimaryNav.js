import React from 'react'
import PrimaruNavLeft from './primaryNav/PrimaruNavLeft'
import PrimaryNavRight from './primaryNav/PrimaryNavRight'

export default function PrimaryNav() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', height:'45px', backgroundColor:'#fff', borderRadius:'0px 10px 0px 0px', padding:'0px 15px'}}>
      <PrimaruNavLeft/>
      <div style={{flex:'2'}}></div>
      <PrimaryNavRight/>
    </div>
  )
}
