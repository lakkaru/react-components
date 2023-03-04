import React from "react";
import BrandLogo from "../../components/brandLogo/BrandLogo";
import DashBoard from "../../components/dashBoard/DashBoard";
import MenuSection from "../../components/leftMenu/MenuSection";

export default function LeftMenu() {
  const components = [
    {
      comName: "Theme",
      links: [
        { leftIcon: "https://www.citypng.com/public/uploads/preview/water-drop-white-icon-11640518086xneqdwdpp4.png", menu: "Colors", rightIcon: "rightIco" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Typography", rightIcon: "rightIco" },
      ],
    },
    {
      comName: "Component",
      links: [
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Base", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Buttons", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Charts", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Editors", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Forms", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Google Maps", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Icons", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Notifications", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Plugins", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Tables", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Widgets", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
      ],
    },
    {
      comName: "Extras",
      links: [
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Pages", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
        { leftIcon: "https://cdn-icons-png.flaticon.com/512/176/176318.png", menu: "Apps", rightIcon: "https://www.pngfind.com/pngs/m/670-6700898_left-arrow-icon-white-hd-png-download.png" },
      ],
    },
  ];

  return (
    <div style={{ flex: 1, color: "white" }}>
      <BrandLogo />
      <DashBoard />
      <div style={{ backgroundColor: "#3b4b64",padding:'10px', borderRadius:'0px 0px 0px 10px'}}>
        {components.map((val, key) => {
          return (
            <MenuSection key={key} secName={val.comName} links={val.links} />
          );
        })}
      </div>
    </div>
  );
}
