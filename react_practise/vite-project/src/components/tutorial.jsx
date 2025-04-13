import React from 'react'
import './tuts.css'
import styles from './myStyle.module.css'
import styled from 'styled-components';
export function Tutorial(props) {
  let a = 5;

  const myStyle = {
      color:"red",
      backgroundColor: "green"
  }

 const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// template literal

const fname = 'Anand';
const lname = 'Phadnis';



  return (
    <>
    {/* <div style={{color:"red", backgroundColor: "yellow"}}>tutorial {a}</div> */}
    {/* <div style={myStyle}>tutorial</div> */}

    {/* <div className={styles.custom}>Tutorial 3</div> */}
    {/* <TomatoButton>Tutorial 4</TomatoButton> */}
    {`My name is ${fname} ${lname}`}
    </>
  )
}
