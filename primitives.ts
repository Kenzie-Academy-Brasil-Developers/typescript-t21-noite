//Tipos primativos
// valores primitivos: string, number, boolean
// string, number, boolean, undefined, null

// Podemos apontar um tipo, devemos apontar um tipo.

// PODEMOS apontar tipos em instâncias de variável e constantes

// (Opcional)

/*
let firstName: string = "Alex";
//firstName = 123;
let age: number = 33;
let isTeacher: boolean = true;
*/

let firstName = "Alex";
//firstName = 123;
let age: number = 33;
let isTeacher = true;

// Inferência - tentando deduzir de forma espontânea o tipo das coisas

// DEVEMOS apontar tipos para os parâmetros das nossas funções

function sayMyName(name: string) {
   console.log(name);
}

function sub(a: number, b: number, c?: number): string {
   let total = 0;

   if (c) {
      total = a - b - c;
   }
   total = a - b;

   return `O resultado é ${total}`;
}

sub(2, 2);
sub(2, 2, 2);

// PODEMOS apontar tipo para o retorno das nossas funções

//(Opcional)

// Listas (arrays)

// []

// Podemos apontar tipo em listas que tem valores preenchidos (Opcional)
let nameList = ["Amaro", "Patricia", "Jonathan", "Vitor", "Júlio", "Caique"];

// DEVEMOS apontar tipo em listas vazias
let petList: string[] = [];
let priceList: number[] = [];

nameList.forEach((name) => {
   console.log(name);
});

function printAllNames(nameList: string[]) {
   nameList.length;
}

priceList.push(123);

// Union Type - as vezes tem um tipo as vezes tem outro (um tipo ou outro)

let user: string | null = null;
user = "Alex";
user = null;
