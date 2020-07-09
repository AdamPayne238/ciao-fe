import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = {active: false, id: ""};


const reducer = (state, action) => {
  switch(action.type) {
    case "toggle-on":
      return {
        active: true,
        id: action.id
      }
    case "toggle-off":
      return {
        active: false,
        id: action.id
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("STORE STATE IN Store.js", state)

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
