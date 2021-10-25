import { Tarefa, Prisma } from '.prisma/client';
import { PrismaService } from '../prisma.service';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    getTarefa(tarefaWhereUniqueInput: Prisma.TarefaWhereUniqueInput): Promise<Tarefa | null>;
    getTarefas(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TarefaWhereUniqueInput;
        where?: Prisma.TarefaWhereInput;
        orderBy?: Prisma.TarefaOrderByWithRelationInput;
    }): Promise<Tarefa[]>;
    createTarefa(data: Prisma.TarefaCreateInput): Promise<Tarefa>;
    postTarefa(data: Prisma.TarefaCreateInput): Promise<Tarefa>;
    updateTarefa(params: {
        where: Prisma.TarefaWhereUniqueInput;
        data: Prisma.TarefaUpdateInput;
    }): Promise<Tarefa>;
    deleteTarefa(where: Prisma.TarefaWhereUniqueInput): Promise<Tarefa>;
}
