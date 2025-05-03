import React from "react";

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}
interface IUsuarioLogadoContextData {
    nomeUsuario: string
}

export const UsuarioLogadoContext: React.Context<IUsuarioLogadoContextData> = React.createContext({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    return (
        <UsuarioLogadoContext.Provider value={{nomeUsuario: "Wendel"}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}