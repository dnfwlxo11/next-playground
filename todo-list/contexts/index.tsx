import { createContext } from "react";

export default (initialState) => {
  const Context = createContext(initialState)

  const Provider = ({ children }) => {
    return (
      <Context.Provider value={initialState}>
        { children }
      </Context.Provider>
    )
  }

  return { Context, Provider }
}