import React from "react";
import { TbCookieManFilled } from "react-icons/tb";

const Modal = ({ name, SetName, SetmodalView, handleEdit }) => {
  const handleClose = () => {
    SetmodalView(false);
    SetName('')
  };

  return (
    <div className="bg-gray-700 flex gap-2 flex-col p-2 rounded-md">
      <p>Digite um novo nome do seu cookie</p>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-md">
            <TbCookieManFilled className="text-gray-900 text-2xl" />
          </div>
          <input
            type="text"
            id="criar"
            className="block w-full p-4 ps-10 text-xm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  focus:outline-gray-600"
            placeholder="nome do seu Cookie"
            autoComplete="off"
            required
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>

        <div className="flex gap-2 p-2">
          <button className="text-lg border-2 rounded-md px-3 p-1 bg-lime-400" onClick={handleEdit}>
            Confirmar
          </button>
          <button
            className="text-lg border-2 rounded-md px-3 p-1 bg-red-400"
            onClick={handleClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
