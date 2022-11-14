import { useState } from "react";

const useInput = (initialState) => {
  const [inputValues, setInputValues] = useState(initialState);

  const updateInputValues = (values) => setInputValues(values);

  const handleChange = ({ target: { value, name } }) =>
    setInputValues({ ...inputValues, [name]: value });

  return [inputValues, handleChange, updateInputValues];
};

export default useInput;
