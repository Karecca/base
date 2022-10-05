import { Box } from '@mui/material';
import React from 'react';

import Filme from './Filme';

export default function Feed() {
    return (
        <Box flex={4} p={2} >
            <Filme />
            <Filme />
            <Filme />
            <Filme />
            <Filme />
        </Box>
    )
}