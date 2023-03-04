import React from "react";
import SecNavLeft from "../../../components/secNav/SecNavLeft";
import SecNavRight from "../../../components/secNav/SecNavRight";

export default function SecNav() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems:'center', height:'33px', backgroundColor:'#fff', padding:'0px 15px' }}>
      <SecNavLeft/>
      <div style={{flex:2}}></div>
      <SecNavRight/>
    </div>
  );
}
