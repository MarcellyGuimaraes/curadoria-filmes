import React from 'react'
import Card from '../../components/Card'

const Curtidos = ({ movie }) => {
  console.log('Filmes Curtidos', movie)
  return (
    <div className="text-center flex flex-col pt-20">
      FILMES CURTIDOS
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
  )
}

export default Curtidos
