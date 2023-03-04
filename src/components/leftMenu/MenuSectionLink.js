import React from "react";

export default function MenuSectionLink({ links }) {
  return (
    <div>
      {links.map((val, key) => {
        return (
          <div
            key={key}
            style={{ display: "flex", marginTop: "15px", marginBottom: "10px" }}
          >
            <img src={val.leftIcon} alt="" height="20px" />
            <p style={{ marginLeft: "15px", marginRight: "10px" }}>
              {val.menu}
            </p>
            <div
              style={{ display: "flex", justifyContent: "end", width: "100%" }}
            >
              <img src={val.rightIcon} alt="" height="20px" />
            </div>
          </div>
        );
        // console.log({val});
      })}
    </div>
  );
}
