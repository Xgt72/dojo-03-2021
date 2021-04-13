import React, { useState } from "react";
import "./App.css";

const initialProductList = [
  { id: 1, name: "produit 1", price: 50, quantity: 1 },
  { id: 2, name: "produit 2", price: 75, quantity: 2 },
  { id: 3, name: "produit 3", price: 20, quantity: 5 }
];

function App() {
  const [tableau, setTableau] = useState(initialProductList);

  const handleChangeQuantity = (event) => {
    const id = parseInt(event.target.id, 10);
    const value = parseInt(event.target.value, 10);
    const tableauMisAJour = tableau.map((product) => {
      if (id === product.id) {
        product.quantity = value;
      }
      return product;
    });
    setTableau(tableauMisAJour);
  };

  return (
    <div className="App">
      <h1>Ma commande</h1>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Prix total</th>
          </tr>
        </thead>
        <tbody>
          {tableau.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price} €</td>
              <td>
                <input
                  id={product.id}
                  value={product.quantity}
                  type="number"
                  min="1"
                  onChange={handleChangeQuantity}
                />
              </td>
              <td>{product.quantity * product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
