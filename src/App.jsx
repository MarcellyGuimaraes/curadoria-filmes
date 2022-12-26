import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from './templates/Home'
import Curtidos from './templates/Curtidos'
import NaoCurtidos from './templates/NaoCurtidos'
import Header from './components/Header'

function App() {
  const baseUrlApi =
    'https://api.themoviedb.org/3/trending/all/day?api_key=25a54fb078f05780554c0c17f94855eb&language=pt-BR'
  const [filmes, setFilmes] = useState(null)
  const [number, setNumber] = useState(0)
  const [likedFilm, setLikedFilm] = useState([])
  const [dislikedFilm, setDislikedFilm] = useState([])

  const movie = !!filmes && filmes[number]

  useEffect(() => {
    axios.get(baseUrlApi).then((r) => setFilmes(r.data.results))
  }, [])
  if (!filmes) return null

  const handleClickLeft = () => {
    setLikedFilm((prev) => [...prev, movie])
    setNumber((prev) => prev + 1)
    console.log('Curtir Clicado :D')
  }

  const handleClickRight = () => {
    setDislikedFilm((prev) => [...prev, movie])
    setNumber((prev) => prev + 1)
    console.log('Não curtir Clicado :(')
  }

  const handleClickCenter = () => {
    setNumber((prev) => prev + 1)
  }

  return (
    <div className={`h-fit bg-red-600`}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movie={movie}
                handleClickCenter={handleClickCenter}
                handleClickLeft={handleClickLeft}
                handleClickRight={handleClickRight}
              />
            }
          />
          <Route path="/curtidos" element={<Curtidos movie={likedFilm} />} />
          <Route
            path="/nao_curtidos"
            element={<NaoCurtidos movie={dislikedFilm} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
