import React, { useState } from 'react';
function Component2() {
  const [inputValue, setInputValue] = useState('');
  const [num, setNum] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    setNum([...num, inputValue]);
    event.preventDefault();
  };

  return (
    <>
        <form onSubmit = {handleSubmit}>
          Enter Number
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <input type="submit" name="submit" value="submit"  />
        </form>

        {num.length > 0 &&
          num.map((item , key) => <p key={key}>{item}</p>)
        }
    </>
  )
}
export default Component2;
