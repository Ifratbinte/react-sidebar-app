//create responsive collapse sidebar?import { useState } from "react";
import { useState } from "react";
import { NavLink } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";

function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <div className="d-flex align-items-center">
            <div className="menu-icon w-25px">{item.icon}</div>
            <div className="menu-title">{item.title}</div>
          </div>
          <FaAngleDown className="toggle-btn" onClick={() => setOpen(!open)} />
        </div>
        <div className="sidebar-content">
          {item.children.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path || "#"} className="sidebar-item plain">
        <div className="d-flex align-items-center">
          <div className="menu-icon w-25px">{item.icon}</div>
          <div className="menu-title">{item.title}</div>
        </div>
      </NavLink>
    );
  }
}
export default SidebarItem;
