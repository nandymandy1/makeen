import { useState } from "react";

const useArray = (defaultValue = []) => {
  const [array, setArray] = useState(defaultValue);

  /**
   * @name push
   * @desc pushes an item in the array
   */
  const push = (element) => setArray((a) => [...a, element]);

  /**
   * @name filter
   * @desc Filter items from array based on condition passed
   */
  const filter = (callback) => setArray((a) => a.filter(callback));

  /**
   * @name update
   * @desc Updates an element from a particular index
   */
  const update = (index, newElement) =>
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);

  /**
   * @name remove
   * @desc Removes an element from a particular index
   */
  const remove = (index) =>
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);

  /**
   * @name clear
   * @desc Clears whole array
   */
  const clear = () => setArray([]);

  return [array, push, clear, filter, remove, update, setArray];
};

export default useArray;
