import React from "react";

const SkillComponent = ({ item }) => {
  return (
    <div>
      <img
        src={`skill-image/${item.fileName}`}
        alt={item.name}
        className="h-16 w-16"
      />
      <p>{item.name}</p>
    </div>
  );
};

export default SkillComponent;
