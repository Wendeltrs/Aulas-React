import React from "react";

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}
interface IUsuarioLogadoContextData {
    nomeUsuario: string
    logout: () => void
}

export const UsuarioLogadoContext: React.Context<IUsuarioLogadoContextData> = React.createContext({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    const handleLogout = () => {
        console.log('logout executou');        
    }

    return (
        <UsuarioLogadoContext.Provider value={{nomeUsuario: "Wendel", logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}