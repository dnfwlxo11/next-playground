import { createContext } from "react";

export default (initialState: any) => {
  const Context = createContext(initialState)

  const Provider = ({ }) => {
    return <></>
    // return (
    //   <Context.Provider value={initialState}>
    //     { children }
    //   </Context.Provider>
    // )
  }

  return { Context, Provider }
}