import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
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

    const [open, setOpen] = useState(false)

    return (
        <AppBar position='stick'>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>QUINZE</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='buscar...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={5} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://avatars.githubusercontent.com/u/2?v=4" onClick={e => setOpen(true)} />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://avatars.githubusercontent.com/u/2?v=4"
                    />
                    <Typography variant='span'>Seu Zé</Typography>
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
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Minha Conta</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}