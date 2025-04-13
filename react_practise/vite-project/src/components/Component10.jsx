import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Component10(props) {
  const [data, setData] = useState([]);

   useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


   return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
