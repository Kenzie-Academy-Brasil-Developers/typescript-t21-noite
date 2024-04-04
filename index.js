const firstName = "Alex";
const petName = "Luz";

function sum(a, b){
    return a + b;
}

sum(2, 2);
sum(firstName, petName);

const todoList = [{ id: 1 }];

function removeTodo(removingId){
    const index = todoList.findIndex(todo => todo.id === removingId);

    console.log(index);
}

removeTodo(1);