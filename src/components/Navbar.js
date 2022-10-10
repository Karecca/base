import { LiveTv, Menu as MenuIcon, ModeNight } from '@mui/icons-material';
import { AppBar, Box, Divider, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, styled, Switch, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useBusca } from '../providers/busca';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "background.default",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }
}))

export default function Navbar() {

    const { setQuery, tipoBusca, setTipoBusca, modo, setModo, tipoSelecao, setTipoSelecao, setPage, setTotalPages } = useBusca()

    const [open, setOpen] = useState(false)
    const [textInput, setTextInput] = useState('')

    const buscar = (event) => {
        if (event.key === 'Enter') {
            setTipoBusca('busca')
            setQuery(textInput)
            setTextInput('')

        }
    }

    const changeSelection = (categoria, tipo) => {
        if (tipoSelecao !== categoria || tipoBusca !== tipo) {
            if (tipoSelecao !== categoria)
                setTipoSelecao(categoria)
            setTipoBusca(tipo)
            setPage(1)
            setTotalPages(1)
            setOpen(false)
        }
    }


    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>QUINZE</Typography>
                <LiveTv sx={{ display: { xs: "block", sm: "none" } }} />
                <Search sx={{ bgcolor: (modo === 'light' ? '#fff' : '#000') }} >
                    <InputBase id='txtBuscar' placeholder='buscar...'
                        value={textInput} onChange={(e) => setTextInput(e.target.value)} onKeyDown={(e) => buscar(e)} onBlur={() => setTextInput('')} />
                </Search>
                <Icons>
                    <List>
                        <ListItem>
                            <ListItemButton component='a' href='#'>
                                <ListItemIcon>
                                    <ModeNight />
                                </ListItemIcon>
                                <Switch onChange={(e) => setModo(modo === 'light' ? 'dark' : 'light')} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <MenuIcon />
                    {/* <Avatar sx={{ width: 30, height: 30 }} src="https://avatars.githubusercontent.com/u/2?v=4"
                    />
                    <Typography variant='span'>Seu Zé</Typography> */}
                </UserBox>
            </StyledToolbar>
            <Menu
                id='principal'
                aria-labelledby='principal'
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}>
                <MenuItem>Filmes</MenuItem>
                <MenuItem onClick={() => changeSelection('Filmes', 'popular')}>
                    <ListItemText inset>
                        Populares
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={() => changeSelection('Filmes', 'avaliado')}>
                    <ListItemText inset>
                        Avaliados
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={() => changeSelection('Filmes', 'exibicao')}>
                    <ListItemText inset>
                        Em Exibição
                    </ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>Series</MenuItem>
                <MenuItem onClick={() => changeSelection('Series', 'popular')}>
                    <ListItemText inset>
                        Polulares
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={() => changeSelection('Series', 'avaliado')}>
                    <ListItemText inset>
                        Avaliados
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={() => changeSelection('Series', 'noAr')}>
                    <ListItemText inset>
                        Em Exibição
                    </ListItemText>
                </MenuItem>
            </Menu>
        </AppBar>
    );
}