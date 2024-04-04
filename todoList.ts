interface ITodo {
   id: number;
   title: string;
   content: string;
}

const todoList: ITodo[] = [];

let id = 1;

function addTodo(title: string, content: string): ITodo {
   const newTodo = {
      id,
      title,
      content,
   };

   todoList.push(newTodo);

   id++;

   return newTodo;
}

function removeTodo(removingId: number): void | string {
   const index = todoList.findIndex((todo) => todo.id === removingId);
   // -1 (verdadeiro)

   if (index !== -1) {
      todoList.splice(index, 1);
      return;
   }

   return "Todo not found.";
}

console.log("Rodei lisinho!")

// É Javascript + Sintaxe de tipos

// Express