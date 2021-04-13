import React, { useState } from "react";
import Quantity from "./Quantity";
import "./App.css";

const initialProductList = [
  { id: 1, name: "produit 1", price: 50, quantity: 1 },
  { id: 2, name: "produit 2", price: 75, quantity: 2 },
  { id: 3, name: "produit 3", price: 20, quantity: 5 }
];

function App() {
  const [productQuantity, setProductQuantity] = useState("0");
  // const [productList, setProductList] = useState(initialProductList);

  // const handleChangeQuantity = (event) => {
  //   const { id, value } = event.target;
  //   console.log(typeof id);
  //   const productListUpdated = productList.map((product) => {
  //     if (product.id === parseInt(id, 10)) {
  //       console.log()
  //       product.quantity = parseInt(value, 10);
  //     }
  //     console.log(product);
  //     return product;
  //   });
  //   setProductList(productListUpdated);
  // };
  return (
    <div className="App">
      <h1>Ma commande</h1>
      <table>
        <thead>
          <tr>
            <th> Produit </th>
            <th> Prix Unitaire </th>
            <th> Quantité </th>
            <th> Prix Total </th>
          </tr>
        </thead>
        <tbody>
          {initialProductList.map((produit) => (
            <tr key={produit.id}>
              <td>{produit.name}</td>
              <td>{produit.price}</td>
              <td>
                <Quantity quantity={produit.quantity} />
              </td>
              <td>{produit.price * produit.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
