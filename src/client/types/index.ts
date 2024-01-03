export interface Category {
    id: number;
    name: string;
}

export interface Book {
    id: number;
    categoryid: number;
    title: string;
    author: string;
    price: number;
    _created: string;
}

export interface Users {
    id: number;
    email: string;
    password: string;
    role: string;
    _created: string;
    name: string;
}
