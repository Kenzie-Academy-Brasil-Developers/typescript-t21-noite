import { todoList } from "./database/database";
import { ITodo, ITodoCreateData, ITodoUpdateData } from "./interfaces/todo.interface";

let id = 1;

//A sintaxe de tipos é só uma descrição do que acontece no funcionamento do código:

function createTodo(data: ITodoCreateData): ITodo {
   const now = new Date();

   const newTodo: ITodo = {
      id,
      ...data,
      created_at: now,
   };

   todoList.push(newTodo);

   id++;

   return newTodo;
}

function removeTodo(removingId: number): void | string {
   const index = todoList.findIndex((todo) => todo.id === removingId);

   if (index !== -1) {
      todoList.splice(index, 1);
      return;
   }

   return "Todo not found.";
}

function updateTodo(updatingId: number, data: ITodoUpdateData): ITodo | string {
   const currentTodo = todoList.find((todo) => todo.id === updatingId);

   if (!currentTodo) {
      return "Todo not found";
   }

   const now = new Date();

   const updateTodo: ITodo = { ...currentTodo, ...data, updated_at: now };

   const index = todoList.findIndex((todo) => todo.id === updatingId);

   todoList.splice(index, 1, updateTodo);

   return updateTodo;
}
createTodo({ title: "Título", content: "Conteúdo" });
//createTodo({ title: "Título 2", content: "Conteúdo 2" });
updateTodo(1, { title: "Título novo" });
