// React useContext Hook
// React Context
// React Context is a way to manage state globally 
// It can be used together with the useState Hook to
// share between deeply nested components more easily
// than with useState alone

// The Problem

// State should be held by the highest parent component 
// in the stack that requires access to the state.

// To illustrate, we have many nested components.
// The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state
// as 'props' through each nested Component.
// This is called "prop drilling".

// The Solution
// The solution is to create context.
// Create Context 
// To create context, you mmust Import createContext and initialize it 

import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()
const UseContextHook = () => {
  
  const [user, setUser] = useState("Jesse Hall");
  
  return (
    <UserContext.Provider value={user}>
      <Com1 />
    </UserContext.Provider>
  )
}

export default UseContextHook

export const Com1 = () => {
  return (<>
    com1111
    <Com2 />
    <br />
  </>)
}
export const Com2 = () => {
  return (<>
    COm2222
    <Com3 />
    <br />
  </>)
}
export const Com3 = () => {
  return (<>
    <Com4 />
    COm3333
    <br />
  </>)
}
export const Com4 = () => {
  return (<>
    COm4444
    <Com5 />
    <br />
  </>)
}
export const Com5 = () => {
  const user = useContext(UserContext);
  return (<>
    COm555
    <h2>{user}</h2>
  </>)
}