import React, { useState } from "react";

const Selection = (props) => {
  const [selectionStyle, updateSelectionStyle] = useState({
    background: "",
  });

  const handleClick = () => {
    props.applyColor(updateSelectionStyle);
  };

  return (
    <div
      className="fix-box"
      style={{ background: selectionStyle.background }}
      onClick={handleClick}
    ></div>
  );
};

export default Selection;
