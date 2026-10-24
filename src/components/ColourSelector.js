import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;

  return (
    <button
      className={config.classname}
      onClick={() =>
        selectNextBackground({ background: config.background })
      }
    >
      {config.label}
    </button>
  );
};

export default ColourSelector;
