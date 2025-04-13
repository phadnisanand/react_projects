function Component3() {
  const employeesData = [
  {
    name: 'Saka manje',
    address: '14, cassava-garri-ewa street',
    attributes: {
      height: '6ft',
      hairColor: 'Brown',
      eye: 'Black',
    },
    gender: 'Male',
  },
  {
    name: 'Adrian Toromagbe',
    address: '14, kogbagidi street',
    attributes: {
      height: '5ft',
      hairColor: 'Black',
      eye: 'Red',
    },
    gender: 'Male',
  },
]

  return (
    <>
       {employeesData.map(
        (
          { name, address, gender, attributes: { height, hairColor, eye } },
          index
        ) => {
          return (
            <div className="employees" key={index}>
              <p>{name}</p>
              <p>{address}</p>
              <p>{gender}</p>
              <p>{height}</p>
              <p>{eye}</p>
              <p>{hairColor}</p>
              <hr></hr>
            </div>
          )
        }
      )}
    </>
  )
}
export default Component3;
