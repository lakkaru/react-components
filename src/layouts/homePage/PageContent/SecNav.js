import React from "react";
import SecNavLeft from "../../../components/secNav/SecNavLeft";
import SecNavRight from "../../../components/secNav/SecNavRight";

export default function SecNav() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <SecNavLeft/>
      <SecNavRight/>
    </div>
  );
}
