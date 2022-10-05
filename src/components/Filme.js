import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react';

export default function Filme() {
    return (
        <Card sx={{ margin: 3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreVert />
                    </IconButton>
                }
                title='Férias em Dubai'
                subheader='04 de Outubro de 2022' />
            <CardMedia component='img'
                height='20%'
                image='https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2115367.jpg&fm=jpg'
                alt='Férias boas' />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    Sempre que vejo uma cena dessas me volta a cabeça como é bom olhar o horizonte.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='Favoritar'>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                </IconButton>
                <IconButton aria-label='Compartilhar'>
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}