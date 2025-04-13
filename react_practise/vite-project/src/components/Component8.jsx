import {sculptureList} from './data.js';
import { useState } from 'react';


function Component8(props) {

  const [index, setIndex] = useState(0);
  function handleNextClick() {
    setIndex(index + 1);
  }

   function handlePrevClick() {
    setIndex(index - 1);
  }

  let sculpture = sculptureList[index];


  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>

      <button onClick={handlePrevClick}>
        Prev
      </button>


      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

export default Component8
