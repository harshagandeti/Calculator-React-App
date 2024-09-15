import React, { useEffect, useRef, useState } from "react";

function useCalculator() {
  const number = useRef();
  const [result, setResult] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  let len = currentOperand.length - 1;
  const regXSymbol = /[/.*+%]/;
  const handleClick = (value) => {
    if (value === "AC") {
      setCurrentOperand("");
      setResult("");
    } else if (value === "DEL") {
      let res = currentOperand.slice(0, -1);
      setCurrentOperand(res);
    } else if (value === "=") {
      computeHandler(currentOperand);
      setCurrentOperand("");
    } else if (value) {
      if (regXSymbol.test(currentOperand.charAt(len)) && regXSymbol.test(value))
        return;
      if ((value === "0" || value === "00") && currentOperand === "") return;
      let res = currentOperand + value;
      setCurrentOperand(res);
    }
  };
  const computeHandler = (value) => {
    let currentNumber = String(value);
    let res = eval(currentNumber);
    setResult(res);
  };

  const onClickResult = () => {
    if (result !== "") {
      setCurrentOperand(result.toString());
      setResult("");
    }
  };
  return {
    handleClick,
    onClickResult,
    number,
    currentOperand,
    result,
  };
}

export default useCalculator;
