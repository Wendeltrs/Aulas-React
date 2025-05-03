import { useUsuarioLogado } from "@/app/shared/hooks";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const counterRef = useRef({ counter: 0 });
    const { nomeUsuario, logout } = useUsuarioLogado();

    return (
        <>
            <h1>Dashboard</h1>
            <h1>{nomeUsuario}</h1>
            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => counterRef.current.counter++}>somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>log</button>
            <button onClick={logout}>logout</button>
            <Link to={"/login"}>
                Entrar
            </Link>
        </>
    )
};