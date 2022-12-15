import React from 'react'
import Card from '../../components/Card'

const Curtidos = ({ movie }) => {
  return (
    <div className="container my-12 h-fit mx-auto px-4 md:px-12">
      <p className="text-lg font-bold text-gray-200 mb-9 text-center">
        FILMES CURTIDOS
      </p>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {movie?.map((m) => (
          <Card
            id={m?.id}
            key={m?.id}
            titulo={m?.title || m?.name}
            descricao={m?.overview}
            imagem={`https://image.tmdb.org/t/p/w500/${m?.backdrop_path}`}
            categoria={m?.media_type}
          />
        ))}
      </div>
    </div>
  )
}

export default Curtidos
