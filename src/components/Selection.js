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
      {/* Optional: sub-text if required by your template */}
    </div>
  );
};

export default Selection;
