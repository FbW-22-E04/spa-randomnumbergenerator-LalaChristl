import { useState } from "react";

const RandomNumbers = () => {

  const [number, setNumber] = useState([]);
    const getRandomNumber = () => {
       
        setNumber(Math.round(Math.random() * 20))
    }
  return (
    <div>
      <h1>Random Number</h1>
      <button onClick={getRandomNumber}>Generate</button>
      <p>{number}</p>
    </div>
  );
};

export default RandomNumbers;
