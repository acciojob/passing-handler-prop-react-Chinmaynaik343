import React, { useState } from 'react';

const Selection = (props) => {
  const { applyColor } = props;
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" });

  return (
    <div 
      className="fix-box" 
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="sub-header">Selection</h2>
    </div>
  );
};

export default Selection;
