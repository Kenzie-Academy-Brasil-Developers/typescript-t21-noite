// Interface - descrever objetos e atribuir tipo aos objetos.

// Interface é um TIPO

export interface IProduct {
   id: number;
   name: string;
   price: number;
   description?: string;
}

interface ICategory{
    id: number;
    name: string;
    products: IProduct[]
}

export const productA: IProduct = {
   id: 1,
   name: "Computador",
   price: 3000,
   description: "Este computador é muito poderoso.",
};

const productB: IProduct = {
    id: 2,
    name: "Notebook",
    price: 4000
}

const productList: IProduct[] = [];

export function printProduct({ name, price, description }: IProduct) {
   console.log(`Nome do produto: ${name}`);
   console.log(
      `Preço: ${price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
   );
   console.log(description);
}
