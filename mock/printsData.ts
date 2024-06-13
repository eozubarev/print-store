import type {Print} from "~/types/print";

export const printsData: Print[] = [
    {
        id: 1,
        name: 'Бессмысленность',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        vendorCode: 'П-001',
        price: 5_000,
        size: '50x75 см',
        images: [{
            id: 1,
            src: 'images/net-sil.JPG',
            alt: 'Постер Бессмысленность'
        }]
    },
    {
        id: 2,
        name: 'Асмодеус',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        vendorCode: 'П-001',
        price: 5_000,
        size: '50x75 см',
        images: [{
            id: 1,
            src: 'images/asmodeus.JPG',
            alt: 'Постер Асмодеус'
        }]
    },
    {
        id: 3,
        name: 'Асмодеус - 2',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        vendorCode: 'П-001',
        price: 5_000,
        size: '50x75 см',
        images: [{
            id: 1,
            src: 'images/asmodeus-2.JPG',
            alt: 'Постер Асмодеус'
        }]
    },
    {
        id: 4,
        name: 'Надежда',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        price: 5_000,
        vendorCode: 'П-002',
        size: '50x75 см',
        images: [{
            id: 3,
            src: 'images/nadezhda.JPG',
            alt: 'Постер Надежда'
        }]
    },
    {
        id: 5,
        name: 'Матрица',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        price: 5_000,
        vendorCode: 'П-002',
        size: '50x75 см',
        images: [{
            id: 3,
            src: 'images/matrix.JPG',
            alt: 'Постер Матрица'
        }]
    },
    {
        id: 6,
        name: 'Астер',
        description: 'Постер БЕЗ ЦЕНЗУРЫ на матовой бумаги выского качества (50 x 75 см)',
        price: 5_000,
        vendorCode: 'П-002',
        size: '50x75 см',
        images: [{
            id: 3,
            src: 'images/aster.JPG',
            alt: 'Постер Астер'
        }]
    },
    {
        id: 7,
        name: 'Олимпус',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        price: 5_000,
        vendorCode: 'П-002',
        size: '50x75 см',
        images: [{
            id: 3,
            src: 'images/olimpus.JPG',
            alt: 'Постер олимпус'
        }]
    },
    {
        id: 8,
        name: 'Триумф',
        description: 'Постер на матовой бумаги выского качества (50 x 75 см)',
        price: 5_000,
        vendorCode: 'П-002',
        size: '50x75 см',
        images: [{
            id: 3,
            src: 'images/triumph.JPG',
            alt: 'Постер триумф'
        }]
    },
    {
        id: 99,
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