import React from "react";
import SocialIcon from "../../../../components/socialCard/SocialIcon";
import SocialStat from "../../../../components/socialCard/SocialStat";

export default function SocialCard({icon, statics}) {
  return (
    <div>
      <SocialIcon icon={icon} />
      <div style={{ display: "flex" }}>
        {statics.map((val, key)=>{
            return <SocialStat key={key} count={val.count} statics={val.stat} />
        })} 
      </div>
    </div>
  );
}
