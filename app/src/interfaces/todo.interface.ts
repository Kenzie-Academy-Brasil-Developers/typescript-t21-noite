export interface ITodo{
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at?: Date;
}

export interface ITodoCreateData{
    title: string;
    content: string;
}

export interface ITodoUpdateData{
    title?: string;
    content?: string;
}