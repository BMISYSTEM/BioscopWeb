import { createContext, useState } from "react";


export const UsuarioContext = createContext({});
const {Provider} = UsuarioContext; 

export const ProviderUser = ({children}) =>{
    const [modalNewUser,setmodalNewUser] = useState(false);

    return (
        <Provider value={{
            setmodalNewUser,modalNewUser
        }}>
            {children}
        </Provider>
    )
}