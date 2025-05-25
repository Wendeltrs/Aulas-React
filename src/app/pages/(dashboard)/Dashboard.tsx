import { useCallback, useState } from "react";

export const Dashboard = () => {
    const [lista, setLista] = useState<string[]>(['a', 'b', 'c']);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.includes(value)) return oldLista;    

                return [...oldLista, value]
            })

            e.currentTarget.value = '';
        }
    }, []);

    return (
        <>
            <p>Lista</p>

            <input 
                onKeyDown={handleInputKeyDown}
            />

            <ul>
                {lista.map((value) => {
                    return <li key={value}>{value}</li>
                })}
            </ul>
        </>
    )
};