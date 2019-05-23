import React, { Fragment, useReducer, useCallback } from "react";

import MemoedListItem, { ListItem } from "./ListItem";

function useSelectionState(defaultItems = []) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      const [type, payload] = action;
      switch (type) {
        case "toggle-item":
          const [itemName, isSelected] = payload;

          let filteredItems = [];

          if (isSelected) {
            filteredItems = state.selectedItems.filter(item => {
              return item !== itemName;
            });
          } else {
            filteredItems = [...state.selectedItems, itemName];
          }

          return { ...state, selectedItems: filteredItems };
        default:
          throw new Error("action not implemented");
      }
    },
    {
      selectedItems: defaultItems
    }
  );
  const toggleItem = useCallback(
    (itemName, isSelected) => {
      dispatch(["toggle-item", [itemName, isSelected]]);
    },
    [dispatch]
  );
  return [state.selectedItems, toggleItem];
}

const List = ({ items, useMemoedItem }) => {
  const [selectedItems, toggleItem] = useSelectionState([]);
  // Based on the toggle we either use the memoed version
  // or the default version
  const T = useMemoedItem ? MemoedListItem : ListItem;
  return (
    <Fragment>
      <ul className="list">
        {items.map(({ name, color }) => {
          const isSelected = selectedItems.includes(name);
          return (
            <T
              name={name}
              key={name}
              color={color}
              isSelected={isSelected}
              onClick={toggleItem}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default List;
