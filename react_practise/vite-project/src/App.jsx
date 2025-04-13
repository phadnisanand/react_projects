
import './App.css'
// import Component1 from './components/Component1'
// import Component2 from './components/Component2'
// import Component3 from './components/component3'
// import Parent from './components/interaction/Parent'
// import Child from './components/interaction/Child'
// import Parent2 from './components/interaction/Parent2'
// import ApiComponent from './components/ApiComponent'
// import Component5 from './components/Component5'
// import Component6 from './components/Component6'
// import Component4 from './components/Component4'
// import Component7 from './components/Component7'
// import Component8 from './components/Component8'
// import Component9 from './components/Component9'
import { Component10 } from './components/Component10'
import { ContextDemo } from './components/ContextDemo'
import { createContext } from 'react';
import { Child1Context } from './components/context/Child1Context'
import { DemoComponent } from './components/DemoComponent';

export const ThemeContext = createContext(null);

function App() {

  return (
    <>
       {/* { <Component1></Component1> } */}
       {/* { <Component2></Component2> } */}
       {/* { <Component3></Component3>} */}
       {/* <Parent></Parent>
       <Parent2></Parent2> */}
      {/* <ApiComponent></ApiComponent> */}
      {/* <Component5></Component5> */}
      {/* <Component6></Component6> */}
      {/* <Component4></Component4> */}
      {/* <Component7></Component7> */}
      {/* <Component8></Component8> */}
      {/* <Component9></Component9> */}
      {/* <Component10></Component10> */}
     {/* <ThemeContext.Provider value={{name:'Anand', age: '35'}}>
         <Child1Context />
    </ThemeContext.Provider> */}
    <DemoComponent name="anand"></DemoComponent>
    </>
  )
}

export default App;
