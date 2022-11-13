import { useState } from "react";

const useInput = (initialState) => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleChange = ({ target: { value, name } }) =>
    setInputValues({ ...inputValues, [name]: value });

  return [inputValues, handleChange];
};

export default useInput;
