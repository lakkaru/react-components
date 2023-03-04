import React from "react";
import SocialCard from "./socialStatus/SocialCard";

export default function SocialStatus() {
  const socialStatus = [
    {
      icon: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-communication-social-media-png-image_6315969.png",
      bgColor:'#395793',
      statics: [
        { count: "89k", stat: "mem" },
        { count: "459", stat: "friends" },
      ],
    },
    {
      icon: "https://image.similarpng.com/very-thumbnail/2020/05/Twitter-logo-round-social-media-icon-PNG.png",
      bgColor:'#00aeef',
      statics: [
        { count: "973k", stat: "folower" },
        { count: "1,792", stat: "twites" },
      ],
    },
    {
      icon: "https://e7.pngegg.com/pngimages/76/840/png-clipart-social-media-logo-linkedin-computer-icons-social-media-blue-text.png",
      bgColor:'#326599',
      statics: [
        { count: "500+", stat: "contacts" },
        { count: "292", stat: "feeds" },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding:'0px 15px' ,marginTop: "15px" }}>
      {socialStatus.map((val,key)=>{
        return <SocialCard key={key} icon={val.icon} bgColor={val.bgColor} statics={val.statics}/>
      })}
    </div>
  );
}
