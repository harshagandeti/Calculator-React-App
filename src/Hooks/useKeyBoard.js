import React from "react";

const useKeyBoard = () => {
  const KEYS_PATTERN = [
    ["AC", "DEL", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];
  return { KEYS_PATTERN };
};

export default useKeyBoard;
