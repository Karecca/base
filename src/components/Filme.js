import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react';

export default function Filme(props) {
    const { movie } = props

    return (
        <Card sx={{ margin: 3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        {(movie.title ? movie.title : movie.original_name).substr(0, 1)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreVert />
                    </IconButton>
                }
                title={movie.title ? movie.title : movie.original_name
                }
                subheader={movie.release_date} />
            <CardMedia component='img'
                height='20%'
                image={process.env.REACT_APP_BASE_URL_IMAGEM + movie.poster_path}
                alt={movie.title} />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    {movie.overview}
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