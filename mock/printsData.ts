import type {Print} from "~/types/print";

export const printsData: Print[] = [
    {
        id: 1,
        name: 'Оля Астер',
        description: 'Потрет Оли на матовом покрытии',
        price: 15_000,
        images: [{
            id: 1,
            src: '/images/1.JPG',
            alt: 'Потрет Оли'
        }]
    },
    {
        id: 2,
        name: 'Таня Асмодеус',
        description: 'Потрет Тани на матовом покрытии',
        price: 15_000,
        images: [{
            id: 2,
            src: '/images/2.JPG',
            alt: 'Потрет Тани'
        }]
    },
    {
        id: 3,
        name: 'Даша',
        description: 'Потрет Дани на матовом покрытии',
        price: 15_000,
        images: [{
            id: 3,
            src: '/images/3.JPG',
            alt: 'Потрет Даши'
        }]
    }
]