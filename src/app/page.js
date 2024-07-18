"use client";

import Image from "next/image";
import Player from "@/models/Player";
import Cookies from "@/models/Cookies";
import imgCookie from "../../public/cookie.png";
import Pointer from "./component/pointer/pointer";

import { useEffect, useState } from "react";
import InitialGameComponent from "@/app/component/InitialGameComponent";

export default function Home() {
  const [playersBanco, SetplayerBanco] = useState(new Player("Daniel", 24,30));
  const [cookie, SetCookie] = useState(new Cookies(imgCookie));

  const [mousePosition, SetmousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      SetmousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.addEventListener('mousemove', handleMouseMove)
    }
  }, []);

  return (
    <main className="flex flex-col items-center bg-slate-300 justify-between p-24 h-screen">
      <Pointer x={mousePosition.x} y={mousePosition.y}/>
      <InitialGameComponent
        cookie={cookie}
        player={playersBanco}
        Setplayer={SetplayerBanco}
        mouse={mousePosition}
      />
    </main>
  );
}
