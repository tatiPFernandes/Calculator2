import React from "react";
import "../components/styles.css";
import { evaluate } from "mathjs";

const App = () =>{
  const clickhandel = function (value) {
    const newExpresstion = expresstion + value;
    setExpresstion(newExpresstion);
  };

  const claculate = function () {
    try {
      const result = evaluate(expresstion);
      setExpresstion(result);
    } catch (ex) {
      setExpresstion("");
    }
  };
  const Clear = function () {
    setExpresstion("");
  };

  const [expresstion, setExpresstion] = React.useState("");

  return (
    <div className="App">
      <div className="display">{expresstion}</div>
      <div class="flex-container wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/"].map((el) => (
        <button class="flex-item" key={el} onClick={() => clickhandel(el)}>
          {el}
        </button>
        
      ))}

      <button class="flex-item" onClick={() => claculate("=")}>=</button>
     <button class="flex-item" onClick={() => Clear("=")}>C</button>
      </div>
      {/* <button onClick={() => clickhandel(1)}>1</button>
      <button onClick={()=>clickhandel(2)}>2</button>
      <button onClick={()=>clickhandel(3)}>3</button>
      <button onClick={()=>clickhandel(4)}>4</button>
      <button onClick={()=>clickhandel(5)}>5</button>
      <button onClick={()=>clickhandel(6)}>6</button>
      <button onClick={()=>clickhandel(7)}>7</button>
      <button onClick={()=>clickhandel(8)}>8</button>
      <button onClick={()=>clickhandel(9)}>9</button>
      <button onClick={()=>clickhandel(0)}>0</button>
      <button onClick={()=>clickhandel("+")}>+</button>
      <button onClick={()=>clickhandel('-')}>-</button>
      <button onClick={()=>clickhandel('/')}>/</button>
      <button onClick={()=>clickhandel('*')}>*</button>
      <button onClick={()=>claculate('=')}>=</button>
      <button onClick={()=>Clear('=')}>C</button> */}
    </div>
  );
}
 export default App