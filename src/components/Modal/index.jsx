import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Modal = ({ show, onClose, movie_id, type }) => {
  const [filme, setFilme] = useState(null)
  const baseUrlApi = `https://api.themoviedb.org/3/${type}/${movie_id}?api_key=25a54fb078f05780554c0c17f94855eb&language=pt-BR`

  useEffect(() => {
    axios.get(baseUrlApi).then((r) => setFilme(r.data))
  }, [])
  if (!filme) return null
  if (!show) {
    return null
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={onClose}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                filme?.backdrop_path || filme?.poster_path
              }`}
              alt={filme?.title || filme?.name}
            />
            <div className="mt-3 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">
                  {filme?.title || filme?.name}
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  {filme?.overview}
                  <br />

                  <span>
                    Data de lançamento:{' '}
                    {filme.release_date
                      ? filme.release_date
                      : 'Sem informações'}
                  </span>
                  <br />
                  {filme?.genres.map((genre) => (
                    <span
                      key={genre.name}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {genre.name}
                    </span>
                  ))}
                </p>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-red-500 border border-4s border-red-500 background-transparent font-bold uppercase rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    onClick={onClose}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
