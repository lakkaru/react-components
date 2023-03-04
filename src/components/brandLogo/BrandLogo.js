import React from 'react'

import logo from '../../images/logo.png'
export default function BrandLogo() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#313b54', borderRadius:'10px 0px 0px', height:'45px'}}>
      <img src={logo} alt='' height={'40px'}/>
      <p>Lakkaru</p>
    </div>
  )
}
