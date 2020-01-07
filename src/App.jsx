import React, { useState } from "react";
import Input from "./components/Input.jsx";
import useAutocomplete from "./hooks/useAutocomplete";
import options from "./data";

const App = () => {
  const [show, setShow] = useState(false);
  const [predictions, element, callback] = useAutocomplete(options);
  const handleChange = e => {
    if (!show) {
      setShow(true);
    }
    callback(e.target.value);
  };
  const handleClick = () => {
    if (show) {
      setShow(false);
    }
  };
  const handleKeyPress = () => console.log("key press");
  return (
    <div>
      App
      <Input ref={element} onChange={handleChange} />
      <div>
        {show &&
          predictions.map((item, i) => (
            <div
              tabIndex={i}
              role="button"
              key={i}
              onKeyPress={handleKeyPress}
              onClick={handleClick}
            >
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
