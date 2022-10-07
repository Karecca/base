import { Description, Home } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useBusca } from '../providers/busca';

export default function Sidebar() {

    const { tipoSelecao, setTipoSelecao, setPage, setTotalPages, tipoBusca, setTipoBusca } = useBusca()
    const [expanded, setExpanded] = useState('FilmesAccordion')

    const changeSelection = (categoria, tipo) => {
        if (tipoSelecao !== categoria || tipoBusca !== tipo) {
            if (tipoSelecao !== categoria)
                setTipoSelecao(categoria)
            setTipoBusca(tipo)
            setPage(1)
            setTotalPages(1)
        }
    }

    const handleChange = (oQueExpandir) => (event, newExpanded) => {
        setExpanded(newExpanded ? oQueExpandir : false)
    }

    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position='fixed'>
                <Accordion square expanded={expanded === 'FilmesAccordion'} onChange={handleChange('FilmesAccordion')}>
                    <AccordionSummary>
                        <Typography>Filmes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton component='a' href='#popular' onClick={() => changeSelection('Filmes', 'popular')}>
                                    <ListItemIcon>
                                        <Home />
                                    </ListItemIcon>
                                    <ListItemText primary="Populares" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component='a' href='#avaliado' onClick={() => changeSelection('Filmes', 'avaliado')}>
                                    <ListItemIcon>
                                        <Description />
                                    </ListItemIcon>
                                    <ListItemText primary="Avaliados" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component='a' href='#exibicao' onClick={() => changeSelection('Filmes', 'exibicao')}>
                                    <ListItemIcon>
                                        <Description />
                                    </ListItemIcon>
                                    <ListItemText primary="Em Exibição" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </AccordionDetails>

                </Accordion>
                <Accordion square expanded={expanded === 'SeriesAccordion'} onChange={handleChange('SeriesAccordion')}>
                    <AccordionSummary>
                        <Typography>Séries</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton component='a' href='#popular' onClick={() => changeSelection('Series', 'popular')}>
                                    <ListItemIcon>
                                        <Home />
                                    </ListItemIcon>
                                    <ListItemText primary="Populares" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component='a' href='#avaliado' onClick={() => changeSelection('Series', 'avaliado')}>
                                    <ListItemIcon>
                                        <Description />
                                    </ListItemIcon>
                                    <ListItemText primary="Avaliados" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component='a' href='#noar' onClick={() => changeSelection('Series', 'noAr')}>
                                    <ListItemIcon>
                                        <Description />
                                    </ListItemIcon>
                                    <ListItemText primary="Em Exibição" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </AccordionDetails>

                </Accordion>

            </Box>
        </Box>
    );
}