import React from "react";
import Input from "./components/Input.jsx";
import useAutocomplete from "./hooks/useAutocomplete";
import options from "./data";

const App = () => {
  const [predictions, element, callback] = useAutocomplete(options);
  const handleChange = e => {
    callback(e.target.value);
  };
  return (
    <div>
      App
      <Input ref={element} onChange={handleChange} />
      <div>
        {predictions.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
