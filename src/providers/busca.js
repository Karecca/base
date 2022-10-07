import React, { useState } from "react";

export const BuscaContext = React.createContext({})

export const BuscaProvider = (props) => {

    const [tipoSelecao, setTipoSelecao] = useState('Filmes')
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [tipoBusca, setTipoBusca] = useState('popular')
    const [query, setQuery] = useState('')
    const [modo, setModo] = useState('light')

    return (
        <BuscaContext.Provider value={{ tipoSelecao, setTipoSelecao, page, setPage, totalPages, setTotalPages, tipoBusca, setTipoBusca, query, setQuery, modo, setModo }}>
            {props.children}
        </BuscaContext.Provider>
    )
}

export const useBusca = () => React.useContext(BuscaContext)