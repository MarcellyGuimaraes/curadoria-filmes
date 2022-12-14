import React from 'react'

function Card({ titulo, descricao, imagem, categoria, classificacao }) {
  return (
    <div className="relative m-2 w-fit cursor-pointer self-center overflow-hidden shadow-lg">
      <img
        className="h-96 w-full object-cover"
        src={imagem}
        alt="Flower and sky"
      />

      <div className="absolute top-48 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
          {titulo}
        </h4>
        <p className="leading-normal text-gray-100">{descricao}</p>
      </div>
    </div>
  )
}

export default Card
