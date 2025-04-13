import React, { useRef, useState } from 'react';

function Component1() {
  const inputRef = useRef();
  const [num, setNum] = useState([]);

  const handleSubmit = (event) => {
      setNum([...num, inputRef.current.value]);
      event.preventDefault();
  };

  return (
    <>
      <form onSubmit = {handleSubmit}>
          Enter Number
          <input type="text" ref= {inputRef} />
          <input type="submit" name="submit" value="submit"  />
      </form>

      {num.length > 0 &&
        num.map((item , key) => <p key={key}>{item}</p>)
      }
    </>
  )
}

export default Component1;
