import Child2 from "./Child2"

function Parent2(props) {

  const getDataFromChild = (data) => {
    console.log('from parent', data);
  }
  return (
    <>
      <Child2 getfromchild = {getDataFromChild}></Child2>
    </>
  )
}
export default Parent2
