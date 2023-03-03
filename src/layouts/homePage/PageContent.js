import React from 'react'
import OnlineStatus from './PageContent/OnlineStatus'
import PrimaryNav from './PageContent/PrimaryNav'
import SecNav from './PageContent/SecNav'

export default function PageContent() {
  return (
    <div style={{flex:4}}>
      <PrimaryNav/>
      <SecNav/>
      <OnlineStatus/>
      <p>TraficGraph</p>
      <p>SocialStatus</p>
    </div>
  )
}
