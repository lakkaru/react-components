import React from "react";

export default function PrimaryNavRightLink({ image, count }) {
  return (
    <div style={{display:'flex'}}>
      <img src={image} alt="" height={"20px"} />
      <span style={{fontSize:'8px', backgroundColor:count.color, borderRadius:'6px', height:'fit-content', padding:'0px 6px'}}>{count.num}</span>
    </div>
  );
}
