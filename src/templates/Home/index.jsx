import Card from '../../components/Card'
import curti from '../../assets/images/curti.png'
import nao_curti from '../../assets/images/n-curti.png'

function Home({ movie, handleClickCenter, handleClickRight, handleClickLeft }) {
  return (
    <div className="text-center flex flex-col pt-20">
      <div className="flex flex-col">
        <Card
          key={movie?.id}
          titulo={movie?.title}
          descricao={movie?.overview}
          imagem={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          categoria={movie?.media_type}
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
  )
}

export default Home
