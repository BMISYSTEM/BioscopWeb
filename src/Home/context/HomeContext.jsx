import React, { createContext, ReactElement, useState,Dispatch } from "react";
// interfaz de mi context.

export const HomeContext = createContext({});
// proveedor de informacion
const { Provider } = HomeContext;
export const HomeProvider = ({children}) => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <Provider
      value={{
        loginModal,
        setLoginModal
      }}
    >
      {children}
    </Provider>
  );
};