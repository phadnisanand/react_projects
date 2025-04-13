import React from 'react'
import { Child1Context } from './context/Child1Context';
import { Child2Context } from './context/Child2Context';
import { Condition1 } from './condition/condition1';
import { Condition2 } from './condition/condition2';

export function DemoComponent({name}) {

  const sum = (a ,b) => a + b;

  const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

  return (
    <>
{/*
{ (1 > 5) ? <Condition1 /> : <Condition2 />} */}
{/* { (19 > 5) && <Condition1 />} */}

{/*
      {

         (sum(10, 20))

      }
       <h1>{person.name}'s Todos</h1>
       <h2>Tea cup for guest {name}</h2>
       <ul style={{
          backgroundColor: 'black',
          color: 'pink'
        }}>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
      </ul> */}


    </>
  )
}
