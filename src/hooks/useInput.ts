import React, { useState } from "react";

type isValidFnType = (value: string) => boolean;
type inputEventType = React.ChangeEvent<HTMLInputElement>;

function useInput(isValidFn: isValidFnType) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isValueValid = isValidFn(value);
  const hasError = !isValueValid && isFocused;

  function valueChangeHandler(e: inputEventType) {
    setValue(e.target.value);
  }

  function focusHandler() {
    setIsFocused(true);
  }

  function resetHandler() {
    setValue("");
    setIsFocused(false);
  }

  return {
    value,
    isValueValid,
    hasError,
    valueChangeHandler,
    focusHandler,
    resetHandler,
  };
}

export default useInput;
