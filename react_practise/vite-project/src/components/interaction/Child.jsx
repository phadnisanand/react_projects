function Child(props) {

  return (
    <>
    Hello this is child <br />
    {props.children} <br />
    {props.childprop}<br />
    <button name="click" onClick={props.clickPropHandler}>Submit</button>
    </>
  )
}
export default Child
