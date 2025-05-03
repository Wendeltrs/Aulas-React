import { UsuarioLogadoContext } from "@/app/shared/contexts/UsuarioLogado";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const counterRef = useRef({ counter: 0 });
    const { nomeUsuario } = useContext(UsuarioLogadoContext)

    return (
        <>
            <h1>Dashboard</h1>
            <h1>{nomeUsuario}</h1>
            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => counterRef.current.counter++}>somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>log</button>
            <Link to={"/login"}>
                Entrar
            </Link>
        </>
    )
};