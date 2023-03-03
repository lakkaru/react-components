import React from "react";

export default function MenuSection({ secName ,links}) {
  return (
    <div>
      <p>{secName.toUpperCase()}</p>
      {links.map((val, key)=>{
        return <div key={key} style={{display:'flex'}}>
                    <p>{val.leftIcon}</p>
                    <p>{val.menu}</p>
                    <p>{val.rightIcon}</p>
                </div>
        // console.log({val});  
      })}  
    </div>
  )
}
