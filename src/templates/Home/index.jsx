import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import curti from '../../assets/images/curti.png'
import nao_curti from '../../assets/images/n-curti.png'

function Home() {
  const baseUrlApi =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=25a54fb078f05780554c0c17f94855eb&language=pt-BR'
  const [filmes, setFilmes] = useState(null)

  useEffect(() => {
    axios.get(baseUrlApi).then((r) => setFilmes(r.data.results))
  }, [])
  if (!filmes) return null

  const handleClickLeft = () => {
    console.log('Curtir Clicado :D')
  }
  const handleClickRight = () => {
    console.log('Não curtir Clicado :(')
  }

  const handleClickCenter = () => {
    console.log('Pular Clicado :/')
  }

  return (
    <div
      className={`bg-[url('https://image.tmdb.org/t/p/original/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg')]`}
    >
      <div className={`h-screen bg-opacity-90 bg-red-500`}>
        <Header />
        <div className="text-center flex flex-col pt-20">
          <div className="flex flex-col">
            <Card
              key={filmes[0].id}
              titulo={filmes[0].title}
              descricao={filmes[0].overview}
              imagem={`https://image.tmdb.org/t/p/w500/${filmes[0].backdrop_path}`}
              categoria={filmes[0].media_type}
            />

            <div className="flex justify-center">
              <button
                onClick={handleClickLeft}
                className="bg-white px-10 py-5 text-center rounded-full m-3"
              >
                <img src={curti} />
              </button>
              <button
                onClick={handleClickCenter}
                className="bg-white text-center px-10 rounded-full m-3"
              >
                PULAR
              </button>
              <button
                onClick={handleClickRight}
                className="bg-white text-center px-10 rounded-full m-3"
              >
                <img src={nao_curti} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
