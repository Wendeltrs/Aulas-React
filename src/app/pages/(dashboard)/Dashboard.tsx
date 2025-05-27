import { useCallback, useState } from "react";

interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.some(item => item.title === value)) return oldLista;    

                return [
                    ...oldLista, 
                    {
                        title: value,
                        isCompleted: false,
                        id: oldLista.length,
                    }
                ]
            })
        }
    }, []);

    return (
        <>
            <p>Lista</p>

            <input 
                onKeyDown={handleInputKeyDown}
            />

            <p>{lista.filter(item => item.isCompleted).length}</p>

            <ul>
                {lista.map((itens) => {
                    return <li key={itens.id}>
                        <input 
                            type="checkbox" 
                            checked={itens.isCompleted}
                            onChange={
                                () => setLista(oldItens => {
                                    return oldItens.map(item => {
                                        const newIsCompleted = item.title === itens.title 
                                        ? !item.isCompleted 
                                        : item.isCompleted;
                                        
                                        return {
                                            ...item,
                                            isCompleted: newIsCompleted
                                        }
                                    })
                                })
                            }
                        />                    
                        {itens.title}
                    </li>
                })}
            </ul>
        </>
    )
};