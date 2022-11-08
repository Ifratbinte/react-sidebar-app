import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import items from "../../../data/sidebar.json";
import CustomIcon from "../../CustomIcon";

export default function Sidebar() {
  const [Children, setChildren] = useState(false);
  const ChildrenOpen = () => {
    setChildren(!Children);
  };

  return (
    <div className="sidebar">
      {items.map((item, i) => {
        const low = item.icon.toLocaleLowerCase();
        const packageName = low.slice(0, 2);

        console.log("item", item);
        if (item.children) {
          return (
            <React.Fragment key={i}>
              <ul className={Children ? "sidebar-item open" : "sidebar-item"}>
                <li className="sidebar-title">
                  <span className="d-flex align-items-center">
                    <CustomIcon name={item.icon} packageName={packageName} className="me-2" />
                    {item.title}
                  </span>
                  <FaAngleDown className="toggle-btn" onClick={() => ChildrenOpen()} />
                </li>

                <div className="sidebar-content">
                  <ul className="submenu-list">
                    {item.children.map((child, i) => (
                      <li key={i} className="submenu-title">
                        <a href="" className="submenu-link">
                          <CustomIcon name={child.icon} packageName={packageName} className="me-2" />
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ul>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={i}>
              <NavLink to={item.path} className="sidebar-item">
                <li className="sidebar-title">
                  <span className="d-flex align-items-center">
                    <CustomIcon name={item.icon} packageName={packageName} className="me-2" />
                    {item.title}
                  </span>
                </li>
              </NavLink>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
}
