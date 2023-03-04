import React from "react";
import SocialCard from "./socialStatus/SocialCard";

export default function SocialStatus() {
  const socialStatus = [
    {
      icon: "fb",
      statics: [
        { count: "89k", stat: "mem" },
        { count: "459", stat: "friends" },
      ],
    },
    {
      icon: "twitter",
      statics: [
        { count: "89k", stat: "folower" },
        { count: "459", stat: "twites" },
      ],
    },
    {
      icon: "linkedin",
      statics: [
        { count: "89k", stat: "contacts" },
        { count: "459", stat: "feeds" },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding:'0px 15px' }}>
      {socialStatus.map((val,key)=>{
        return <SocialCard key={key} icon={val.icon} statics={val.statics}/>
      })}
    </div>
  );
}
