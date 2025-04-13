import { useEffect, useState } from "react"
function ApiComponent(props) {
  const API_URL = 'http://localhost:3000/posts';
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
   fetchData();
  }, []);

 console.log(data);
  return (
    <>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}
export default ApiComponent
