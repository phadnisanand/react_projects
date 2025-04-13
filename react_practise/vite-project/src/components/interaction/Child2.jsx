import React, { useState } from 'react';
function Child2(props) {
 const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getfromchild(inputValue);
  };

  return (
    <>
      <form onSubmit = {handleSubmit}>
          Enter Name
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    </>
  )
}
export default Child2;
