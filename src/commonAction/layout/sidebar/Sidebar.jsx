import { useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import items from "../../../data/sidebar.json";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [Open, setOpen] = useState(false);
  const HandleToggle = () => {
    setOpen(!Open);
    console.log(Open);
  };

  return (
    <>
      <div className="sidebar" style={{ width: Open ? "60px" : "250px" }}>
        <div className="sidebar-top">
          <h3 className="logo text-white p-3">Logo</h3>
        </div>

        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>

      <div className="main-wrapper">
        <div className="wrapper-head px-3 py-2">
            <BsGrid3X3Gap onClick={() => HandleToggle()} className="btn-toggle"/>
        </div>

        <div className="wrapper-body p-3">
          <h1 className="title">SMS</h1>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="btn">Explore now</button>
        </div>
      </div>
    </>
  );
}
