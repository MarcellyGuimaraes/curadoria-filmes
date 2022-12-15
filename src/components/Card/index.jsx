import React, { useState } from 'react'
import Modal from '../Modal'

function Card({ titulo, descricao, imagem, id, self_center }) {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  return (
    <div
      className={`my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ${
        self_center ? ' self-center' : ''
      }`}
    >
      <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src={imagem} />
      </a>
      <article className="bg-white overflow-hidden shadow-lg">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {titulo}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">11/1/19</p>
        </header>
        <p className="max-h-[5ch] mx-5 overflow-hidden">{descricao}</p>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <button
            onClick={() => {
              setShow(true)
              setModal(modal)
            }}
          >
            Ver mais
          </button>
        </footer>
      </article>

      <Modal show={show} movie_id={id} onClose={() => setShow(false)} />
    </div>
  )
}

export default Card
