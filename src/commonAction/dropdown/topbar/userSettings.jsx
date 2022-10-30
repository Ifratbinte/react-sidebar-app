import React, { useState } from "react";

function UserSettings() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSettings = () => {
    setIsOpen(!isOpen);
    console.log(!isOpen);
  };
  return (
    <>
      <div className="header-tools">
        <button className="user-dropdown btn btn-light" onClick={() => handleSettings()}>
          Click
        </button>
        {isOpen && <span className={isOpen ? "user-card-wrap active" : "user-card-wrap"}>Hello world</span>}
      </div>
    </>
  );
}
export default UserSettings;
