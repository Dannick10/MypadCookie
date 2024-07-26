import React, { useReducer, useState, useEffect } from "react";
import FormUser from "./FormUser";
import Users from "./Users";
import { TbCookieManFilled } from "react-icons/tb";
import { FaGithubAlt } from "react-icons/fa";
import Player from "@/models/Player";
import Link from "next/link";

const initalState = { main: "create" };

const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return { main: "create" };
    case "exebition":
      return { main: "exebition" };
  }
};

const Createuser = ({ handleUser }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [user, Setuser] = useState("");
  const [users, setUsers] = useState([]);
  const [modalView, SetmodalView] = useState(true)

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if(storedUsers){
      dispatch({type: 'exebition'})
    }

    setUsers(storedUsers);
  }, []);

  const handleDelete = (user) => {
    const storageUsers = JSON.parse(localStorage.getItem("users"));
    const playerRemove = storageUsers.filter((p) => p._id !== user._id);

    if (playerRemove) {
      localStorage.setItem("users", JSON.stringify(playerRemove));
      setUsers(playerRemove);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = new Player(
      `${Math.random()}-${user}`,
      user,
      1,
      0,
      1,
      {
        gamepads: [],
        joystick: [],
      },
      {
        id: 5055,
        level: 1,
        preco: 1,
        colors: { main: "#593C39", screen: "#D9B1A3" },
      },
      {
        id: "btn-5055",
        level: 1,
        preco: 0,
        colors: {
          analogic: "#1A1A1A",
          innerAnalogic: "#2B2B2B",
          buttonA: "#4A90E2",
          buttonB: "#50E3C2",
          buttonX: "#BD10E0",
          buttonY: "#F5A623",
        },
      }
    );

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    Setuser("");

    dispatch({type: 'exebition'})
  };

  return (
    <div className="absolute min-h-full p-2  rounded-md text-white flex flex-col justify-between gap-2 w-full z-20 bg-gray-800 overflow-hidden">
      {state.main == "exebition" && (
        <div className="flex flex-col h-44 gap-1 overflow-auto">
             <h2>Todos os seus biscoitos</h2>
          {users &&
            users.map((user) => (
              <Users
                key={user._id}
                user={user}
                setUsers={setUsers}
                handleUser={handleUser}
                handleDelete={handleDelete}
                SetmodalView={SetmodalView} 
                modalView={modalView} 
              />
            ))}
        </div>
      )}

      {state.main == "create" && (
        <FormUser user={user} Setuser={Setuser} handleSubmit={handleSubmit} />
      )}
      <div className="flex gap-2">
        <button
          className={`text-lg border-2 rounded-md px-3 p-1 btn itemsAnimation2 ${state.main == 'create' ? 'bg-gray-950' : 'bg-none' }`}
          onClick={() => dispatch({ type: "create" })}
        >
          <span className="absolute hidden -top-7 left-0 text-sm min-w-32">Criar biscoito</span>
          +
        </button>
        <button
            className={`text-lg border-2 rounded-md px-3 p-1 btn itemsAnimation2 ${state.main == 'exebition' ? 'bg-gray-950' : 'bg-none' }`}
          onClick={() => dispatch({ type: "exebition" })}
        >
          {" "}
          <span className="absolute hidden -top-7 left-0 text-sm min-w-32">Escolher biscoito</span>
          <TbCookieManFilled className="" />
        </button>
        <Link href={'https://github.com/Dannick10/MypadCookie'} target="_blank" alt="Link do codigo">
        <button
          className="text-lg border-2 rounded-md px-3 p-1 btn h-full itemsAnimation2"
          >
          <span className="absolute hidden -top-7 left-0 text-sm min-w-32">Link do codigo</span>
          {" "}
          <FaGithubAlt className="" />
        </button>
          </Link>
       
      </div>
    </div>
  );
};

export default Createuser;
