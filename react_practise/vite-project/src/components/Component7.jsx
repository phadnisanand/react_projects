import { useState } from "react";

function Component7(props) {

  const [toggle, setToggle] = useState(false);

  const toogleDisplay = () => {
      setToggle(!toggle)
  }

  return (
    <>
      {toggle ? 'Log in' : 'Log out'}
      <button onClick={toogleDisplay}>Toggle</button>
    </>
  )
}
export default Component7;
