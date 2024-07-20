"use client";

import Image from "next/image";
import Player from "@/models/Player";
import Cookies from "@/models/Cookies";
import imgCookie from "../../public/cookie.png";

import { useEffect, useState } from "react";
import InitialGameComponent from "@/app/component/InitialGameComponent";

export default function Home() {
  const [playersBanco, SetplayerBanco] = useState(new Player("Daniel", 24,100,100));
  const [cookie, SetCookie] = useState(new Cookies(imgCookie));

  return (
    <main className="flex flex-col items-center bg-slate-300 justify-between p-24 h-screen">

      <InitialGameComponent
        cookie={cookie}
        player={playersBanco}
        Setplayer={SetplayerBanco}

      />
    </main>
  );
}
