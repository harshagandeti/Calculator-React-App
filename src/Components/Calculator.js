import React, { useState } from "react";
import "../Styles/CalculatorStyles.scss";
// import useKeyBoard from "../Hooks/useKeyBoard";
import useKeyBoard from "../Hooks/useKeyBoard";
import useCalculator from "../Hooks/useCalculator";

const Calculator = () => {
  const { handleClick, onClickResult, currentOperand, result } =
    useCalculator();
  const [data, setData] = useState();
  const { KEYS_PATTERN } = useKeyBoard();
  const targetValue = (e) => {
    console.log(e.target.value);
    return e.target.value;
  };
  return (
    <div className="Calculator__Container">
      <div className="Calculator__Container--Display">
        <div
          className="Calculator__Container--Display--Text"
          onClick={onClickResult}
        >
          {result !== "" ? result : "00"}
        </div>
        <div className="Calculator__Container--Display--Input">
          <input
            type="text"
            value={currentOperand}
            placeholder="00"
            onChange={targetValue}
          ></input>
        </div>
      </div>
      <div className="Calculator__Container--Keyboard">
        {KEYS_PATTERN.flat(1).map((v, i) => {
          return (
            <button
              value={v}
              onClick={() => {
                handleClick(v);
              }}
              className={
                /[A-Z]/.test(v)
                  ? "Keys--Orange--color"
                  : /[*%.+/-]/.test(v)
                  ? "Keys--Green--color"
                  : /[=]/.test(v)
                  ? " Keys--Green--Bg--color"
                  : ""
              }
              key={i}
            >
              {v}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
