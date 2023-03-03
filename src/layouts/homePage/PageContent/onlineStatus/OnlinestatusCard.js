import React from "react";
import OnlineCount from "../../../../components/onlinestatusCard/OnlineCount";
import OnlineStatusCardSettings from "../../../../components/onlinestatusCard/OnlineStatusCardSettings";

export default function OnlinestatusCard() {
  return (
    <div>
      <div style={{display:'flex'}}>
        <OnlineCount/>
        <OnlineStatusCardSettings/>
      </div>
      <div>
        <p>Graph</p>
      </div>
    </div>
  );
}
