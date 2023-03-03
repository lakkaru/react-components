import React from 'react'
import PrimaryNav from './PageContent/PrimaryNav'
import SecNav from './PageContent/SecNav'

export default function PageContent() {
  return (
    <div style={{flex:4}}>
      <PrimaryNav/>
      <SecNav/>
      <p>OnlineStatus</p>
      <p>TraficGraph</p>
      <p>SocialStatus</p>
    </div>
  )
}
