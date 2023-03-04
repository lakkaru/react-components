import React from 'react'
import OnlineStatus from './PageContent/OnlineStatus'
import PrimaryNav from './PageContent/PrimaryNav'
import SecNav from './PageContent/SecNav'
import SocialStatus from './PageContent/SocialStatus'
import TrafficGraph from './PageContent/TrafficGraph'

export default function PageContent() {
  return (
    <div style={{flex:4, backgroundColor:'#ebeef3', borderRadius:'0px 10px 10px 0px'}}>
      <PrimaryNav/>
      <hr/>
      <SecNav/>
      <hr/>
      <OnlineStatus/>
      <TrafficGraph/>
      <SocialStatus/>
    </div>
  )
}
