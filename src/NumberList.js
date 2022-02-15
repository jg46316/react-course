import React from "react";

function NumberList(props) {
    const numeri = props.numeri;
    const lista = numeri.map((numero) =>
      <li key={numero.toString()}>      {numero}
      </li>
    );
    return (
      <ul>{lista}</ul>
    );
  }
export default NumberList;