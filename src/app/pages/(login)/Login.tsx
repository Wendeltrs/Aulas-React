import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        console.log(email);
        console.log(password);        
    }
    
    return (
        <>
            <div>
                <form>
                    <label htmlFor="">
                        <span>Email</span>
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>

                    <label htmlFor="">
                        <span>Senha</span>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>

                    <button onClick={handleClick} type="button">Entrar</button>
                </form>
            </div>
        </>
    )
};