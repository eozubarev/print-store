import type {Print} from "~/types/print";

export const printsData: Print[] = [
    {
        id: 2,
        name: 'Бессмысленность',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        vendorCode: 'П-001',
        price: 13_000,
        size: '50x75 см',
        images: [{
            id: 1,
            src: 'images/net-sil.JPG',
            alt: 'Постер Бессмысленность'
        }]
    },
    {
        id: 3,
        name: 'Надежда',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        price: 13_000,
        vendorCode: 'П-002',
        size: '50x75 см',
        images: [{
            id: 3,
            src: 'images/nadezhda.JPG',
            alt: 'Постер Надежда'
        }]
    },
    {
        id: 4,
        name: 'Матрица',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        price: 13_000,
        vendorCode: 'П-002',
        size: '50x75 см',
        images: [{
            id: 3,
            src: 'images/matrix.JPG',
            alt: 'Постер Матрица'
        }]
    },
    {
        id: 1,
        name: 'Кинопленка Kodak Vision 3 - 250D',
        description: 'Профессиональная пленка высокого качества для фотографии (35мм)',
        vendorCode: 'KV3-250D',
        price: 1_500,
        size: '35mm',
        images: [{
            id: 1,
            src: 'images/plenka.jpg',
            alt: 'Кинопленка'
        }]
    },
]