import type {Print} from "~/types/print";

export const printsData: Print[] = [
    {
        id: 1,
        name: 'Оля Астер',
        description: 'Потрет Оли на матовом покрытии',
        vendorCode: 'ПР-002',
        price: 15_000,
        images: [{
            id: 1,
            src: 'images/1.JPG',
            alt: 'Потрет Оли'
        }]
    },
    {
        id: 3,
        name: 'Даша',
        description: 'Потрет Дани на матовом покрытии',
        price: 15_000,
        vendorCode: 'ПР-003',
        images: [{
            id: 3,
            src: 'images/3.JPG',
            alt: 'Потрет Даши'
        }]
    }
]