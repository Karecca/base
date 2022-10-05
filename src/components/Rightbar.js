import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
import React from 'react';

export default function Rightbar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position='fixed'>
                <Typography variant='h6' fontWeight={100}>Amigos Online
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar alt='João' src='https://material-ui.com/static/images/avatar/1.jpg' />
                    <Avatar alt='Laura' src='https://material-ui.com/static/images/avatar/2.jpg' />
                    <Avatar alt='Ana' src='https://material-ui.com/static/images/avatar/3.jpg' />
                    <Avatar alt='Gabriela' src='https://material-ui.com/static/images/avatar/4.jpg' />
                    <Avatar alt='Anita' src='https://material-ui.com/static/images/avatar/5.jpg' />
                    <Avatar alt='Carlos' src='https://material-ui.com/static/images/avatar/6.jpg' />
                </AvatarGroup>
            </Box>
        </Box>
    );
}