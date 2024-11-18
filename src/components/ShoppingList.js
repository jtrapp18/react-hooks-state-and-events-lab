import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [shoppingList, updateList] = useState(items)

  function handleChange(event) {
    const applyFilter = event.target.value;
    const newList = items.filter(item => item.category === applyFilter)

    updateList(newList);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {shoppingList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
