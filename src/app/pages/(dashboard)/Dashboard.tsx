import { ApiException } from "@/app/shared/services/api/ApiException";
import { ITarefa, TarefasService } from "@/app/shared/services/api/tarefas/TarefasService";
import { useCallback, useEffect, useState } from "react";

export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ApiException) return alert(result.message);
                setLista(result);
            })
    }, []);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            if (lista.some(item => item.title === value)) return;

            TarefasService.create({ title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException) return alert(result.message);
                    setLista(oldItens => [...oldItens, result]);
                });
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