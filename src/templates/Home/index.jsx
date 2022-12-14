import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'

function Home() {
  const baseUrlApi =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=25a54fb078f05780554c0c17f94855eb&language=pt-BR'
  const [filmes, setFilmes] = useState(null)

  useEffect(() => {
    axios.get(baseUrlApi).then((r) => setFilmes(r.data.results))
  }, [])
  if (!filmes) return null

  return (
    <div
      className={`bg-[url('https://image.tmdb.org/t/p/original/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg')]`}
    >
      <div className={`h-screen bg-opacity-90 bg-red-500`}>
        <Header />
        <div>
          <div className="text-center flex flex-col pt-20">
            <Card
              key={filmes[0].id}
              titulo={filmes[0].title}
              descricao={filmes[0].overview}
              imagem={`https://image.tmdb.org/t/p/w500/${filmes[0].backdrop_path}`}
              categoria={filmes[0].media_type}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
