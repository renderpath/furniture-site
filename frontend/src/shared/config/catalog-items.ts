export interface CatalogItem {
    id: number;
    title: string;
    category: string;
    price: string;
    image: string;
    description: string;
    features: string[];
    materials: string[];
}

export const catalogItems: CatalogItem[] = [
    {
        id: 1,
        title: 'Современная кухня',
        category: 'kitchens',
        price: 'от 120 000 ₽',
        image:
            'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80',
        description: 'Минималистичная кухня с подсветкой и встроенной техникой.',
        features: [
            'Проект под размеры помещения',
            'Встроенная техника',
            'LED-подсветка рабочей зоны',
            'Ящики и фасады с доводчиками',
        ],
        materials: [
            'МДФ',
            'ЛДСП Egger',
            'Фурнитура Blum',
            'Влагостойкая столешница',
        ],
    },
    {
        id: 2,
        title: 'Встроенный шкаф',
        category: 'wardrobes',
        price: 'от 85 000 ₽',
        image:
            'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
        description: 'Шкаф с матовыми фасадами и продуманной системой хранения.',
        features: [
            'Разработка внутреннего наполнения',
            'Штанги, полки и выдвижные ящики',
            'Встроенное решение до потолка',
            'Возможность зеркальных фасадов',
        ],
        materials: [
            'ЛДСП',
            'МДФ-фасады',
            'Алюминиевый профиль',
            'Надёжная направляющая система',
        ],
    },
    {
        id: 3,
        title: 'Гардеробная система',
        category: 'dressing',
        price: 'от 140 000 ₽',
        image:
            'https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&w=1200&q=80',
        description: 'Гардеробная с подсветкой, секциями хранения и открытыми полками.',
        features: [
            'Отдельные зоны для одежды и обуви',
            'Открытые и закрытые секции',
            'Подсветка полок',
            'Индивидуальное наполнение',
        ],
        materials: [
            'ЛДСП Egger',
            'Металлические стойки',
            'LED-профиль',
            'Выдвижные системы хранения',
        ],
    },
    {
        id: 4,
        title: 'Прихожая',
        category: 'hallway',
        price: 'от 60 000 ₽',
        image:
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        description: 'Компактная прихожая с местом для хранения одежды, обуви и аксессуаров.',
        features: [
            'Компактное хранение',
            'Место для обуви',
            'Крючки и закрытые шкафы',
            'Возможность мягкой сидушки',
        ],
        materials: [
            'ЛДСП',
            'МДФ',
            'Металлическая фурнитура',
            'Износостойкое покрытие',
        ],
    },
];