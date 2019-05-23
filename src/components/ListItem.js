import React, { memo } from "react";

export const ListItem = ({ isSelected, onClick, name }) => {
  return (
    <li
      className={`list__item list__item list__item--${
        isSelected ? "is-selected" : "not-selected"
      }`}
      onClick={() => onClick(name, isSelected)}
    >
      {name}
    </li>
  );
};

export default memo(ListItem);
