import React from "react";
import SocialIcon from "../../../../components/socialCard/SocialIcon";
import SocialStat from "../../../../components/socialCard/SocialStat";

export default function SocialCard({ icon,bgColor, statics }) {
  return (
    <div style={{backgroundColor:'white', minHeight:'150px', boxShadow:'2px 1px 3px'}}>
      <SocialIcon icon={icon} bgColor={bgColor} />
      <div style={{ display: "flex", justifyContent:'space-around' , alignItems:'center', minHeight:'15vh'}}>
        <SocialStat count={statics[0].count} statics={statics[0].stat} />
        <div style={{border:'1px solid gray', height:'40px'}}></div>
        <SocialStat count={statics[1].count} statics={statics[1].stat} />
      </div>
    </div>
  );
}
