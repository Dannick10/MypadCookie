import React from "react";
import ConvertCoins from "../../../../functions/ConvertCoins";

const Users = ({user,handleUser}) => {

  return (
    <div className="border-2 p-2 rounded-md bg-gray-500">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
        <p>{user._name}</p>
        <p>LV{user._level}</p>
        </div>
        <button className="bg-slate-700 p-2 rounded-md" onClick={() =>handleUser(user)}>JOGAR</button>
      </div>
    </div>
  );
};

export default Users;
