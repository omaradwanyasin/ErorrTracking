import React, { useContext } from "react";
import "./ErorrCard.css";
import { Mycontext } from "./Mycontext";

function ErorrCard(props) {
  const { theme } = useContext(Mycontext);

  return (
    <div  class="card">
      <p>{props.name} solved </p>
      <h2>Congratulations</h2>
    </div>
  );
}

export default ErorrCard;
