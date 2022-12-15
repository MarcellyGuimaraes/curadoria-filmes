import React from 'react'

const Modal = ({ show, onClose, titulo, descricao, imagem }) => {
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
            <img src={imagem} alt="" />
            <div className="mt-3 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">{titulo}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  {descricao}
                  <br />
                  <span>#################</span>
                  <br />
                  <span>########################</span>
                </p>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-red-500 background-transparent font-bold uppercase rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    onClick={onClose}
                  >
                    Fechar
                  </button>
                  <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border hover:bg-yellow-700 hover:text-white ring-offset-2 ring-indigo-600 focus:ring-2">
                    <a target="_blank">Ver Mais</a>
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
