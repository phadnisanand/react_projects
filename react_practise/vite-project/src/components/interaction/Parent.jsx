import Child from "./Child"
import React, { useState } from 'react';
function Parent(props) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const clickPropHandler = (event) => {
      alert('clicked from child');
  };

  return (
    <>
     <input type="text" name="number" value={inputValue} onChange={handleInputChange} /> <br />
      <Child childprop = {inputValue} clickPropHandler= {clickPropHandler}>Passed data</Child>
        Parent
    </>
  )
}
export default Parent
