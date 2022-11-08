import React from "react";
const CustomIcon = ({packageName, name, ...props}) => {
  const { [name] :TheIcon} = require(`react-icons/${packageName}`);
  return TheIcon ? <TheIcon {...props} /> : null;
};

export default CustomIcon;
