import React from 'react'
import LeftMenu from './homePage/LeftMenu'
import PageContent from './homePage/PageContent'

export default function HomePage() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
      <LeftMenu/>
      <PageContent/>
    </div>
  )
}
