import React, { useState } from 'react'
import Modal from '../Modal'

function Card({ titulo, descricao, imagem, id, self_center }) {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  return (
    <div
      className={`my-1 w-full flex justify-center md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4 ${
        self_center ? ' self-center' : ''
      }`}
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={imagem} alt={titulo} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{titulo}</div>
          <p className="text-gray-700 text-base max-h-[5ch] mx-5 overflow-hidden">
            {descricao}
          </p>
          <span>{'...'}</span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <button
              onClick={() => {
                setShow(true)
                setModal(modal)
              }}
            >
              Ver mais
            </button>
          </span>
        </div>
      </div>

      <Modal show={show} movie_id={id} onClose={() => setShow(false)} />
    </div>
  )
}

export default Card
