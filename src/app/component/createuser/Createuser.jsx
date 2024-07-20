import React, { useReducer, useState, useEffect } from "react";
import FormUser from "./FormUser";
import Users from "./Users";
import { TbCookieManFilled } from "react-icons/tb";
import Player from "@/models/Player";

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

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = new Player(
      user,
      24,
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
  };

  return (
    <div className="absolute min-h-full p-2  rounded-md text-white flex flex-col justify-between gap-2 overflow-auto w-full z-20 bg-gray-800">
      {state.main == "exebition" && (
        <div className="flex flex-col h-44 gap-1 overflow-auto">
          {users &&
            users.map((user) => (
              <Users key={user._id} user={user} handleUser={handleUser} />
            ))}
        </div>
      )}

      {state.main == "create" && (
        <FormUser user={user} Setuser={Setuser} handleSubmit={handleSubmit} />
      )}
      <div className="flex gap-2">
        <button
          className="text-lg border-2 rounded-md px-3 p-1"
          onClick={() => dispatch({ type: "create" })}
        >
          +
        </button>
        <button
          className="text-lg border-2 rounded-md px-3 p-1"
          onClick={() => dispatch({ type: "exebition" })}
        >
          {" "}
          <TbCookieManFilled className="" />
        </button>
      </div>
    </div>
  );
};

export default Createuser;
