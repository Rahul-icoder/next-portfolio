import React from "react";

const SkillComponent = ({ item }) => {
  return (
    <div>
      <img
        src={`skill-image/${item.fileName}`}
        alt={item.name}
        className="h-12 w-12 sm:h-16 sm:w-16"
      />
      <p className="text-xs text-gray-500 text-center mt-1">{item.name}</p>
    </div>
  );
};

export default SkillComponent;
