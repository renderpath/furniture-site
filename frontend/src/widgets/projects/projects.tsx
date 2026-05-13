import { useState } from 'react';

import {
    Box,
    Card,
    CardActionArea,
    Dialog,
    DialogContent,
    Grid,
    Typography,
} from '@mui/material';

import { Container } from '../../shared/ui/container/container';

interface ProjectItem {
    title: string;
    description: string;
    image: string;
}

const projects: ProjectItem[] = [
    {
        title: 'Современная кухня',
        description: 'Фасады в спокойных тонах, встроенная техника и удобная рабочая зона.',
        image:
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Гардеробная система',
        description: 'Продуманное хранение одежды, обуви и аксессуаров.',
        image:
            'https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Шкаф в спальню',
        description: 'Встроенный шкаф с лаконичным дизайном и большим объёмом хранения.',
        image:
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Мебель для прихожей',
        description: 'Компактное решение для хранения верхней одежды и обуви.',
        image:
            'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    },
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
        null
    );

    return (
        <Box
            id="projects"
            sx={{
                py: 12,
                backgroundColor: '#080B10',
                color: '#fff',
                scrollMarginTop: '100px',
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
                        Реализованные проекты
                    </Typography>

                    <Typography sx={{ color: '#AAB0BF', maxWidth: 620 }}>
                        Примеры мебели, которую можно адаптировать под ваши размеры,
                        планировку и стиль интерьера.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {projects.map((project) => (
                        <Grid key={project.title} size={{ xs: 12, md: 6 }}>
                            <Card
                                sx={{
                                    height: { xs: 320, md: 420 },
                                    overflow: 'hidden',
                                    backgroundColor: '#101827',
                                }}
                            >
                                <CardActionArea
                                    onClick={() => setSelectedProject(project)}
                                    sx={{ height: '100%' }}
                                >
                                    <Box
                                        sx={{
                                            height: '100%',
                                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            p: 3,
                                        }}
                                    >
                                        <Box>
                                            <Typography sx={{ fontSize: 26, fontWeight: 900 }}>
                                                {project.title}
                                            </Typography>

                                            <Typography sx={{ color: '#C7CBD6', maxWidth: 520 }}>
                                                {project.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Dialog
                open={Boolean(selectedProject)}
                onClose={() => setSelectedProject(null)}
                maxWidth="md"
                fullWidth
            >
                {selectedProject && (
                    <DialogContent sx={{ p: 0, backgroundColor: '#0B0F17' }}>
                        <Box
                            component="img"
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            sx={{
                                width: '100%',
                                display: 'block',
                            }}
                        />

                        <Box sx={{ p: 3 }}>
                            <Typography variant="h4" sx={{ fontWeight: 800 }}>
                                {selectedProject.title}
                            </Typography>

                            <Typography sx={{ color: '#AAB0BF' }}>
                                {selectedProject.description}
                            </Typography>
                        </Box>
                    </DialogContent>
                )}
            </Dialog>
        </Box>
    );
};