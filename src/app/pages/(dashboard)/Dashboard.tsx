import { ApiException } from "@/app/shared/services/api/ApiException";
import { ITarefa, TarefasService } from "@/app/shared/services/api/tarefas/TarefasService";
import { IconTrash } from "@tabler/icons-react";
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
    }, [lista]);

    const handleToggleCompleted = useCallback((id: number) => {
        const tarefaUpdate = lista.find(item => item.id === id);

        if (!tarefaUpdate) return;

        TarefasService.updateById(id, { ...tarefaUpdate, isCompleted: !tarefaUpdate.isCompleted })
            .then((result) => {
                if (result instanceof ApiException) return alert(result.message);
                
                setLista(oldItens => {
                    return oldItens.map(item => {
                        if (item.id === id) return result;

                        return item;
                    })
                })
            });
    }, [lista]);

    const handleDelete = useCallback((id: number) => {
        TarefasService.deleteteById(id)
            .then((result) => {
                if (result instanceof ApiException) return alert(result.message);

                setLista(oldItens => oldItens.filter(item => item.id !== id));
            });
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
                    return (
                        <li key={itens.id}>
                            <div
                                key={itens.id}
                                style={{ display: 'flex', alignItems: 'center', gap: 3 }}
                            >
                                <input
                                    type="checkbox"
                                    checked={itens.isCompleted}
                                    onChange={() => handleToggleCompleted(itens.id)}
                                />
                                {itens.title}
                                <IconTrash 
                                    size={16}
                                    onClick={() => handleDelete(itens.id)}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};