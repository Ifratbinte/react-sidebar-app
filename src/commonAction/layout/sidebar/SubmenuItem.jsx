import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import items from "../../../data/sidebar.json";
import CustomIcon from "../../CustomIcon";

function SubmenuItem({ item }) {
  const [open, setOpen] = useState(false);
  if (item.children) {
    return (
      <>
        {items.map((item, i) => {
          const low = item.icon.toLocaleLowerCase();
          const packageName = low.slice(0, 2);
          return (
            <React.Fragment key={i}>
              <ul className={open ? "sidebar-item open" : "sidebar-item"}>
                <li className="sidebar-title">
                  <span className="d-flex align-items-center">
                    <CustomIcon name={item.icon} packageName={packageName} className="me-2" />
                    {item.title}
                  </span>
                  <FaAngleDown className="toggle-btn" onClick={() => setOpen(!open)} />
                </li>

                {/* <pre className="text-white">{JSON.stringify(item.children, null, 4)}</pre> */}
                {/* <div className="sidebar-content">

                  {item.children?.length && item.children.map((child, index) => <SubmenuItem key={index} item={child} />)}
                </div> */}
                {item.children?.length && (
                  <div>
                    {item.children.map((child, index) => (
                      <SubmenuItem key={index} item={child} />
                    ))}
                  </div>
                )}
              </ul>
            </React.Fragment>
          );
        })}
      </>
    );
  } else {
    const low = item.icon.toLocaleLowerCase();
    const packageName = low.slice(0, 2);
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">
          <span className="d-flex align-items-center">
            <CustomIcon name={item.icon} packageName={packageName} className="me-2" />
            {item.title}
          </span>
        </div>
      </div>
    );
  }
}
export default SubmenuItem;
