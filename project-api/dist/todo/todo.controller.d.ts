import { TodoService } from './todo.service';
import { Tarefa } from '@prisma/client';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTarefas(): Promise<Tarefa[]>;
    getTarefa(id: string): Promise<Tarefa>;
    postTarefas(dados: Tarefa): Promise<void>;
    putTarefas(id: string): Promise<Tarefa>;
    deleteTarefa(id: string): Promise<Tarefa>;
}
