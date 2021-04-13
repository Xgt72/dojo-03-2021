import React, { useState } from "react";

function Quantity({ quantity }) {
  const [productQuantity, setProductQuantity] = useState(quantity);
  return (
    <input
      type="number"
      min="0"
      value={productQuantity}
      onChange={(event) => setProductQuantity(parseInt(event.target.value, 10))}
    />
  );
}

export default Quantity;
