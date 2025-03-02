import React from "react";

const Challenge = () => {
  const a = 10;
  const b = 15;

  const SomaValores = () => {
    alert(a + b);
  };
  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={SomaValores}>Checar Resultado</button>
    </div>
  );
};

export default Challenge;
