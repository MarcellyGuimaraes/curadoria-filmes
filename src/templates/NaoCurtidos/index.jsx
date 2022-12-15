import React from 'react'
import Card from '../../components/Card'

const NaoCurtidos = ({ movie }) => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      FILMES NÃO CURTIDOS
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {movie?.map((m) => (
          <Card
            key={m?.id}
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
