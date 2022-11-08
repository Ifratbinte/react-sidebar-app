import { useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import sidebarMenu from "../../../data/sidebarData";
import HeaderTools from "../topbar/HeaderTools";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [Open, setOpen] = useState(false);
  const HandleToggle = () => {
    setOpen(!Open);
    console.log(Open);
  };

  return (
    <>
      <div className={!Open ? "sidebar show" : "sidebar hide"} style={{ width: Open ? "50px" : "250px" }}>
        <div className="sidebar-top">
          <h3 className="logo text-white p-3">L</h3>
        </div>

        {sidebarMenu.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>

      <div className="main-wrapper">
        <div className="wrapper-head">
          <BsGrid3X3Gap onClick={() => HandleToggle()} className="btn-toggle" />
          <HeaderTools />
        </div>

        <div className="wrapper-body p-3"></div>
      </div>
    </>
  );
}
