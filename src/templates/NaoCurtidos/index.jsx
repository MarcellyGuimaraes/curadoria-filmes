import React from 'react'
import Card from '../../components/Card'

const NaoCurtidos = ({ movie }) => {
  return (
    <div
      className={`container ${
        movie.length > 6 ? ' h-fit ' : ' h-screen '
      } mx-auto px-4 md:px-12`}
    >
      <p className="text-lg font-bold text-gray-200 mb-9 text-center">
        FILMES NÃO CURTIDOS
      </p>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {movie?.map((m) => (
          <Card
            key={m?.id}
            media_type={movie?.media_type}
            id={m?.id}
            titulo={m?.title}
            descricao={m?.overview}
            imagem={`https://image.tmdb.org/t/p/w500/${m?.backdrop_path}`}
            categoria={m?.media_type}
          />
        ))}
      </div>
    </div>
  )
}

export default NaoCurtidos
