import { Box, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {

  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)

  useEffect(() => {
    filme();
  }, [])

  const filme = () => {
    axios.get(process.env.REACT_APP_API_URL_BASE + '/movie/popular' + process.env.REACT_APP_API_KEY + '&language=pt-br&page=' + page).then((response) => {
      setMovies(response.data.results)
      setTotalPages(response.data.total_pages)
    })
  }
  const tv = () => {
    axios.get(process.env.REACT_APP_API_URL_BASE + '/tv/popular' + process.env.REACT_APP_API_KEY + '&language=pt-br&page=' + page).then((response) => {
      setMovies(response.data.results)
      setTotalPages(response.data.total_pages)
    })
  }

  const changePage = (data) => {
    console.log(data)
    setPage(data)
  }
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar tv={tv} filme={filme} />
        {movies &&
          <Feed movies={movies} page={page} totalPages={totalPages} changePage={changePage} />
        }
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
