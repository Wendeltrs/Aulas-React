import React, { useEffect, useState } from "react";

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}
interface IUsuarioLogadoContextData {
    nomeUsuario: string
    logout: () => void
}

export const UsuarioLogadoContext: React.Context<IUsuarioLogadoContextData> = React.createContext({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    const [nomeUsuario, setNomeUsuario] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setNomeUsuario("Wendel")
        }, 2000)
    }, [])

    const handleLogout = () => {
        console.log('logout executou');        
    }

    return (
        <UsuarioLogadoContext.Provider value={{nomeUsuario, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}