'use client'

import React, {useState} from "react";
import ConvertCoins from "../../../../functions/ConvertCoins";
import GamepadColor from "../gamepadColor/gamepadColor";
import Modal from "../modal/Modal";

const Users = ({ user, handleUser, handleDelete, modalView, SetmodalView, setUsers }) => {

  const [name ,SetName] = useState('')

  const handleEdit = () => {
    const storageUsers = JSON.parse(localStorage.getItem("users"));
    console.log(user)
    const indexPlayer = storageUsers.findIndex((p) => p._id == user._id);
   
    if(indexPlayer !== -1) {
        storageUsers[indexPlayer]._name = name
        localStorage.setItem('users', JSON.stringify(storageUsers))
        setUsers(storageUsers)
    }

    SetmodalView(false)
    SetName('')
  } 


  return (
    <div
      className="border-2 p-2 flex rounded-md bg-gray-500 gap-2 "
      style={{ background: user._gamepad.colors.main }}
      key={user._id}
    >
      {modalView.view && modalView.id == user._id && 
      <div className="absolute left-0 top-0 z-40 w-full h-full ">
      <Modal 
      key={user._id}
      SetmodalView={SetmodalView}
       name={name} 
       SetName={SetName} 
       handleEdit={handleEdit} />
       </div>
      }

      <div className="flex justify-between gap-4dd">
        <div className="flex flex-col items-center text-sm">
          <span>Nome</span>
          <p  className="text-ellipsis whitespace-nowrap overflow-hidden max-w-16">{user._name}</p>
          <span>Level</span>
          <p  className="text-ellipsis whitespace-nowrap overflow-hidden max-w-16">{user._level.toFixed(1)}</p>
          <span>Money</span>
          <p className="text-ellipsis whitespace-nowrap overflow-hidden max-w-16">{ConvertCoins(user._money)}</p>
        </div>
        <div>
          <GamepadColor
            main={user._gamepad.colors.main}
            screen={user._gamepad.colors.screen}
            items={user}
          />
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <button
          className="bg-slate-700 p-2 rounded-md btn"
          onClick={() => handleUser(user)}
          style={{ background: user._joystick.colors.buttonY }}
        >
          JOGAR
        </button>
        <button
          className="bg-slate-700 p-2 rounded-md btn"
          onClick={() => SetmodalView({view:true, id:user._id})}
          style={{ background: user._joystick.colors.buttonB }}
        >
          Edit
        </button>
        <button
          className="bg-slate-700 p-2 rounded-md btn"
          onClick={() => handleDelete(user)}
          style={{ background: user._joystick.colors.buttonA }}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Users;
