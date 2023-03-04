import React from "react";
import MenuSectionLink from "./MenuSectionLink";

export default function MenuSection({ secName, links }) {
  return (
    <div>
      <p>{secName.toUpperCase()}</p>
      <MenuSectionLink links={links}/>
    </div>
  );
}
