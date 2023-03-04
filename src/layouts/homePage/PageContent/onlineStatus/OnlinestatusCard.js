import React from "react";
import OnlineCount from "../../../../components/onlinestatusCard/OnlineCount";
import OnlineStatusCardSettings from "../../../../components/onlinestatusCard/OnlineStatusCardSettings";

export default function OnlinestatusCard({color}) {
  return (
    <div style={{backgroundColor:color,borderRadius:'5px',color:'white', padding:'10px', minHeight:'125x', minWidth:'230px'}}>
      <div style={{display:'flex',justifyContent:'space-between', marginBottom:'10px'}}>
        <OnlineCount/>
        <OnlineStatusCardSettings/>
      </div>
      <div>
        <img src='https://cdn.imgbin.com/7/9/22/imgbin-bar-chart-icon-bar-graph-icon-XVTTktsQArqe9DpfDrUgx2ASk.jpg' alt="" height={'75px'} width='100%' />
      </div>
    </div>
  );
}
