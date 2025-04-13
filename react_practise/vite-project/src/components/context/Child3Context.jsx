import React from 'react'
import { ThemeContext } from '../../App';
import { useContext } from 'react';

export function Child3Context(props) {

  const theme = useContext(ThemeContext);

  return (
    <>
       {theme.name} {theme.age}
    </>
  )
}
