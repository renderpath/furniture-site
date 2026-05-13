import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Container } from '../../shared/ui/container/container';

const faqItems = [
    {
        question: 'Сколько времени занимает изготовление мебели?',
        answer:
            'В среднем от 20 до 45 рабочих дней. Срок зависит от сложности проекта, материалов и объёма заказа.',
    },
    {
        question: 'Вы делаете замер?',
        answer:
            'Да, мы выполняем замер помещения, учитываем ниши, коммуникации, розетки, трубы и особенности стен.',
    },
    {
        question: 'Можно ли заказать мебель по своему эскизу?',
        answer:
            'Да, можно. Мы можем взять за основу ваш референс, фото, чертёж или просто идею и адаптировать её под размеры помещения.',
    },
    {
        question: 'Можно ли рассчитать стоимость заранее?',
        answer:
            'Да, для предварительного расчёта достаточно указать тип мебели, примерные размеры и пожелания по материалам.',
    },
];

export const Faq = () => {
    return (
        <Box
            id="faq"
            sx={{
                py: 12,
                backgroundColor: '#0B0F17',
                color: '#fff',
            }}
        >
            <Container>
                <Box sx={{ mb: 5 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 1,
                            fontSize: { xs: 32, md: 48 },
                            fontWeight: 900,
                        }}
                    >
                        Частые вопросы
                    </Typography>

                    <Typography sx={{ color: '#AAB0BF', maxWidth: 620 }}>
                        Ответили на основные вопросы перед заказом мебели.
                    </Typography>
                </Box>

                {faqItems.map((item) => (
                    <Accordion
                        key={item.question}
                        sx={{
                            mb: 2,
                            backgroundColor: '#101827',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
                            <Typography sx={{ fontWeight: 800 }}>
                                {item.question}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography sx={{ color: '#AAB0BF' }}>
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
};