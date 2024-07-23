import React from 'react'
import { TbCookieManFilled } from "react-icons/tb";

const FormUser = ({user,Setuser,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Criar seu biscoito
      </h2>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-md">
           <TbCookieManFilled className="text-gray-900 text-2xl"/>
          </div>
          <input
            type="text"
            id="criar"
            className="block w-full p-4 ps-10 text-xm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  focus:outline-gray-600"
            placeholder="Escolha um apelido"
            value={user}
            onChange={(e) => Setuser(e.target.value)}
            autoComplete='off'
            required
            maxLength={15}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-gray-700-700 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-gray-900 font-medium rounded-lg text-sm px-4 py-2 btn"
          >
            Criar
          </button>
        </div>
      </form>
  )
}

export default FormUser