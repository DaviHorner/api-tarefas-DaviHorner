import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Prisma, Tarefa } from '@prisma/client';

@Controller('tarefas')
export class TodoController {
    //prisma: any;
    constructor (private readonly todoService: TodoService){}

    @Get('tarefas')
    async getTarefas():Promise<Tarefa[]>{
        return await this.todoService.getTarefas({});
        }

    @Get('tarefas/:id')
    async getTarefa(@Param('id') id: string):Promise<Tarefa>{
        return await this.todoService.getTarefa({ id: Number(id) });
    }
   
    @Post('tarefas')
    async postTarefas(@Body() dados: Tarefa){
        await this.todoService.postTarefa(dados);
    }

    @Put('tarefas/:id')
    async putTarefas(@Param('id') id: string): Promise<Tarefa> {
        return this.todoService.updateTarefa({
          where: { id: Number(id) },
          data: { completa: true },
        });
      }
    
    @Delete('tarefas/:id')
    async deleteTarefa(@Param('id') id: string):Promise<Tarefa>{
        return await this.todoService.deleteTarefa({ id: Number(id) });
    }

}
