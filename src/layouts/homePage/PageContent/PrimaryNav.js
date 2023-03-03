import React from 'react'
import PrimaruNavLeft from '../../../components/primaryNav/PrimaruNavLeft'
import PrimaryNAvRight from '../../../components/primaryNav/PrimaryNAvRight'

export default function PrimaryNav() {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <PrimaruNavLeft/>
      <PrimaryNAvRight/>
    </div>
  )
}
