import { useCallback, useState } from "react";

interface IListItem {
    title: string;
    isSelected: boolean;
}

export const Dashboard = () => {
    const [lista, setLista] = useState<IListItem[]>([]);

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
                        isSelected: false
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

            <p>{lista.filter(item => item.isSelected).length}</p>

            <ul>
                {lista.map((itens) => {
                    return <li key={itens.title}>
                        <input 
                            type="checkbox" 
                            checked={itens.isSelected}
                            onChange={
                                () => setLista(oldItens => {
                                    return oldItens.map(item => {
                                        const newIsSelected = item.title === itens.title 
                                        ? !item.isSelected 
                                        : item.isSelected;
                                        
                                        return {
                                            ...item,
                                            isSelected: newIsSelected
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