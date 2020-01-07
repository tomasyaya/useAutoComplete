import React from "react";

const Input = React.forwardRef((props, ref) => (
  <input ref={ref} type="text" {...props} />
));

Input.displayName = "Input";

export default Input;
