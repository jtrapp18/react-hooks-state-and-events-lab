import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, updateCart] = useState(false)

  function handleClick() {
    updateCart(!inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
