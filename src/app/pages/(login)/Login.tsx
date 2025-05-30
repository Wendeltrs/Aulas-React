import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "@/app/shared/hooks";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { nomeUsuario } = useUsuarioLogado();

    const emailLength = useMemo(() => {
        return email.length
    }, [email]);

    const handleClick = useCallback(() => {
        console.log(email);
        console.log(password);        
    }, [email, password]);
    
    return (
        <>
            <div>
                <p>Quantidade de caracteres do email: {emailLength}</p>
                <p>{nomeUsuario}</p>
                <form>
                    <InputLogin 
                        label="Email" 
                        value={email} 
                        onChange={newValue => setEmail(newValue)} 
                        onPressEnter={() => inputPasswordRef.current?.focus()}
                    />
                    <InputLogin 
                        label="Senha" 
                        type="password" 
                        value={password} 
                        ref={inputPasswordRef}
                        onChange={newValue => setPassword(newValue)}
                    />

                    <ButtonLogin type="button" onClick={handleClick}>
                        Entrar
                    </ButtonLogin>

                    <ButtonLogin type="submit">Enviar</ButtonLogin>
                </form>
            </div>
        </>
    )
};