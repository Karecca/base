import { Box, Pagination } from '@mui/material';
import React from 'react';

import Filme from './Filme';

export default function Feed(props) {
    const { movies, changePage, page, totalPages } = props

    const handleChange = (event, value) => {
        changePage(value)
    }
    return (
        <Box flex={4} p={2}>
            {movies.map((movie) =>
                <Filme movie={movie} key={movie.id} />
            )}
            <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Box>
    )
}