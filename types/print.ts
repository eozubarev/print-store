interface Image {
    id: number;
    src: string;
    alt: string;
}

export interface Print {
    id: number;
    name: string;
    description: string;
    price: number;
    vendorCode: string;
    size: string;
    images: Image[]
}