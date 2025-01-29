export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    images: { url: string }[];
}