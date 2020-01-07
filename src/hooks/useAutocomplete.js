/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const useAutocomplete = (options, debounceCallback, time) => {
  if (!Array.isArray(options)) {
    options = [];
  }
  const [predictions, setPredictions] = useState(options);
  const [dependencyValue, setDependencyValue] = useState("");
  const element = useRef(null);
  const callback = debounceCallback
    ? debounce(arg => setDependencyValue(arg), time)
    : setDependencyValue;
  useEffect(() => {
    let tempArray = [...options]
      .filter(item => item.includes(element.current.value))
      .map(item => (
        <span
          onClick={() => {
            element.current.value = item;
          }}
        >
          {item}
        </span>
      ));
    setPredictions(tempArray);
  }, [dependencyValue]);
  return [predictions, element, callback];
};

export default useAutocomplete;
