import { useCallback, useMemo, useRef, useState } from "react";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <form>
                    <label htmlFor="">
                        <span>Email</span>
                        <input 
                            type="text" 
                            onChange={e => setEmail(e.target.value)}
                            onKeyDown={e => e.key === "Enter" ? inputPasswordRef.current?.focus() : null}
                        />
                    </label>

                    <label htmlFor="">
                        <span>Senha</span>
                        <input 
                            type="password" 
                            onChange={e => setPassword(e.target.value)}
                            ref={inputPasswordRef}/>
                    </label>

                    <button onClick={handleClick} type="button">Entrar</button>
                </form>
            </div>
        </>
    )
};