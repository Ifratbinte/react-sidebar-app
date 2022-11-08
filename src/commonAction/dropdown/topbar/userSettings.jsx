import React, { useRef, useState } from "react";
import { FcBusinesswoman } from "react-icons/fc";
import useOutsideClick from "../useOutsideClick";

function UserSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    // alert("You clicked outside");
    if (isOpen) setIsOpen(false);
  });

  const handleSettings = () => {
    setIsOpen(!isOpen);
    // console.log(!isOpen);
  };
  return (
    <>
      <div className="header-tools">
        <FcBusinesswoman className="user-dropdown" onClick={() => handleSettings()} />
        {isOpen && (
          <span ref={ref} className={isOpen ? "user-card-wrap active" : "user-card-wrap"}>
            Hello world
          </span>
        )}
      </div>
    </>
  );
}
export default UserSettings;
