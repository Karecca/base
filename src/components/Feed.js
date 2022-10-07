import { Box, Pagination, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useBusca } from '../providers/busca';
import Filme from './Filme';

export default function Feed() {

    const { tipoSelecao, page, setPage, totalPages, setTotalPages, tipoBusca, query } = useBusca()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        busca();
    }, [tipoSelecao, tipoBusca, page, query])

    let url
    if (tipoSelecao === 'Filmes') {
        switch (tipoBusca) {
            case 'popular': url = process.env.REACT_APP_API_URL_BASE + '/movie/popular' + process.env.REACT_APP_API_KEY + '&language=pt-br&page=' + page;
                break
            case 'avaliado': url = process.env.REACT_APP_API_URL_BASE + '/movie/top_rated' + process.env.REACT_APP_API_KEY + '&language=pt-br&page=' + page;
                break
            case 'exibicao': url = process.env.REACT_APP_API_URL_BASE + '/movie/now_playing' + process.env.REACT_APP_API_KEY + '&language=pt-br&page=' + page;
                break
            case 'busca': url = process.env.REACT_APP_API_URL_BASE + '/search/movie' + process.env.REACT_APP_API_KEY + '&language=pt-br&query=' + query + '&page=' + page + '&include_adult=false';
                break
            default: url = ''
        }

    } else if (tipoSelecao === 'Series') {
        switch (tipoBusca) {
            case 'popular': url = process.env.REACT_APP_API_URL_BASE + '/tv/popular' + process.env.REACT_APP_API_KEY + '&language=pt-br&page=' + page
                break
            case 'avaliado': url = process.env.REACT_APP_API_URL_BASE + '/tv/top_rated' + process.env.REACT_APP_API_KEY + '&language=pt-br&page=' + page
                break
            case 'noAr': url = process.env.REACT_APP_API_URL_BASE + '/tv/on_the_air' + process.env.REACT_APP_API_KEY + '&language=pt-br&page=' + page
                break
            case 'busca': url = process.env.REACT_APP_API_URL_BASE + '/search/tv' + process.env.REACT_APP_API_KEY + '&language=pt-br&query=' + query + '&page=' + page + '&include_adult=false';
                break
            default: url = ''
        }
    }

    const busca = () => {
        axios.get(url).then((response) => {
            setMovies(response.data.results)
            setTotalPages(response.data.total_pages)
        })
    }


    const handleChange = (event, value) => {
        setPage(value)
    }
    return (
        <Box flex={4} p={2}>
            {(movies.length === 0) && (
                <Box>
                    <Typography variant='h4'>
                        Não foram encontrados resultados para a sua buscar
                    </Typography>
                </Box>

            )}
            {movies &&
                movies.map((movie) =>
                    <Filme movie={movie} key={movie.id} />
                )}
            < Pagination count={totalPages} page={page} onChange={handleChange} />

        </Box>
    )
}