"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MainImg from "./components/mainImg";

export default function Home() {
  // framer-motion variants
  const craneVariants01 = {
    initial: {
      opacity: 0,
      right: "-16vw",
    },
    animate: {
      opacity: 1,
      right: "3vw",
    },
  }
  const craneVariants02 = {
    initial: {
      opacity: 0,
      top: "-14vh",
    },
    animate: {
      opacity: 1,
      top: "9vh",
    },
  }
  const craneVariants03 = {
    initial: {
      opacity: 0,
      top: "-16vh",
      right: "4vw",
    },
    animate: {
      opacity: 1,
      top: "8vh",
      right: "14vw",
    },
  }
  const craneVariants04 = {
    initial: {
      opacity: 0,
      right: "-16vw",
    },
    animate: {
      opacity: 1,
      right: "3vw",
    },
  }
  const sunVariants = {
    initial: {
      opacity: 0,
      bottom: "16vh",
    },
    animate: {
      opacity: 1,
      bottom: "48vh",
    },
  }
  const mountainVariants01 = {
    initial: {
      clipPath: "inset(0 52vw 0 0)",
    },
    animate: {
      clipPath: "inset(0 0 0 0)",
    },
  }
  const mountainVariants02 = {
    initial: {
      clipPath: "inset(0 0 0 62vw)",
    },
    animate: {
      clipPath: "inset(0 0 0 0)",
    },
  }

  // framer-motion transition
  const craneTransition01 = {
    ease: "easeInOut",
    delay: 2,
    duration: 1.6, // 애니메이션이 총 걸리는 시간
  }
  const craneTransition02 = {
    ease: "easeInOut",
    delay: 2.8,
    duration: 0.8, // 애니메이션이 총 걸리는 시간
  }
  const craneTransition03 = {
    ease: "easeInOut",
    delay: 2.4,
    duration: 1.2, // 애니메이션이 총 걸리는 시간
  }
  const craneTransition04 = {
    ease: "easeInOut",
    delay: 2,
    duration: 1.6, // 애니메이션이 총 걸리는 시간
  }
  const sunTransition = {
    ease: "easeInOut",
    delay: 2,
    duration: 2, // 애니메이션이 총 걸리는 시간
  }
  const mountainTransition01 = {
    ease: "easeInOut",
    delay: 0.6,
    duration: 2, // 애니메이션이 총 걸리는 시간
  }
  const mountainTransition02 = {
    ease: "easeInOut",
    duration: 2, // 애니메이션이 총 걸리는 시간
  }
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-background bg-cover from-white to-white">
      <MainImg src="/crane01.png" alt="두루미01" className="absolute top-[3vh] w-[16vw] aspect-[272/280]" variants={craneVariants01} transition={craneTransition01}/>
      <MainImg src="/crane02.png" alt="두루미02" className="absolute right-[24vw] w-[15vw] aspect-[209/142]" variants={craneVariants02} transition={craneTransition02}/>
      <MainImg src="/crane03.png" alt="두루미03" className="absolute w-[11vw] aspect-[137/84]" variants={craneVariants03} transition={craneTransition03}/>
      {/* <MainImg src="/crane04.png" alt="두루미04" className="absolute top-0 w-[240px] aspect-[240/243]" variants={craneVariants04} transition={craneTransition04}/> */}
      <MainImg src="/sun.png" alt="태양" className="absolute left-[8vw] w-[8vw] h-[8vw]" variants={sunVariants} transition={sunTransition}/>
      <MainImg src="/mountain01.png" alt="산01" className="absolute bottom-[10vh] left-0 w-[52vw] h-[38vh]" variants={mountainVariants01} transition={mountainTransition01}/>
      <MainImg src="/mountain02.png" alt="산02" className="absolute bottom-0 right-0 w-[62vw] h-[40vh]" variants={mountainVariants02} transition={mountainTransition02}/>
    </div>
  );
}
