import React from 'react'
import LeftMenu from './homePage/leftMenu/LeftMenu'
import PageContent from './homePage/PageContent/PageContent'

export default function Home() {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <LeftMenu/>
      <PageContent/>
    </div>
  )
}
