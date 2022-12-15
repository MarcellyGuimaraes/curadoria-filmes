import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import { DislikedIcon, LikedIcon } from '../../components/Icons'

function Home({ movie, handleClickCenter, handleClickRight, handleClickLeft }) {
  return (
    <div className="h-screen text-center flex flex-col pt-20">
      <div className="flex flex-col">
        {movie ? (
          <>
            <Card
              key={movie?.id}
              titulo={movie?.title}
              descricao={movie?.overview}
              imagem={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              categoria={movie?.media_type}
              self_center
            />
            <div className="flex justify-center">
              <button
                onClick={handleClickRight}
                className="m-3 flex rounded-full bg-white px-5 py-5 text-center lg:px-10 lg:py-5"
              >
                <DislikedIcon />
                <span className="ml-2 hidden lg:block">Não curti! :(</span>
              </button>
              <button
                onClick={handleClickCenter}
                className="m-3 rounded-full bg-white px-5 py-5 text-center lg:px-10 lg:py-5"
              >
                PULAR
              </button>
              <button
                onClick={handleClickLeft}
                className="m-3 rounded-full flex bg-white px-5 py-5 text-center lg:px-10 lg:py-5"
              >
                <LikedIcon />
                <span className="ml-2 hidden lg:block">Curti! :D</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <p>Acabaram os filmes</p>
            <div className="flex justify-center">
              <Link
                to="/curtidos"
                className="bg-white px-10 py-5 text-center rounded-full m-3"
              >
                Ver filmes curtidos
              </Link>
              <Link
                to="nao_curtidos"
                className="bg-white text-center px-10 py-5 rounded-full m-3"
              >
                Ver filmes não curtidos
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
