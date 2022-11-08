import React from "react";
import items from "../../../data/sidebar.json";
import SubmenuItem from "./SubmenuItem";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SubmenuItem key={index} item={item} />
      ))}
      {/* {items.map((item, i) => {
        const low = item.icon.toLocaleLowerCase();
        const packageName = low.slice(0, 2);
        return (
          <React.Fragment key={i}>
            <ul className="sidebar-item">
              <li className="sidebar-title">
                <span className="d-flex align-items-center">
                  <CustomIcon name={item.icon} packageName={packageName} className="me-2" />
                  {item.title}
                </span>
              </li>
            </ul>
          </React.Fragment>
        );
      })} */}
    </div>
  );
}
