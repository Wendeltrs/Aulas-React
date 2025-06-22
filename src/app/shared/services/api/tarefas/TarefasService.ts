import { Api } from "../ApiConfig"
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const { data } = await Api().get('/tarefas')
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Ocorreu um erro ao buscar as tarefas')
    }
}

const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`)
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Ocorreu um erro ao buscar a tarefa')
    }
}

const create = async (dataTarefa: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().post('/tarefas', dataTarefa)
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Ocorreu um erro ao criar a tarefa')
    }
}

const updateById = async (id: number, dataTarefa: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataTarefa)
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Ocorreu um erro ao atualizar a tarefa')
    }
}

const deleteteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`)
        return undefined;
    } catch (error: any) {
        return new ApiException(error.message || 'Ocorreu um erro ao deletar a tarefa')
    }
}

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteteById
}