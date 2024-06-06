"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkless";
import Heading from "./ui/heading";
import { FlipWords } from "./ui/flip-words";
const words = ["Space", "Apps", "Services", "Team"];

export function SpaceSparkless() {
  return (
    <div className="hidden h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white lg:flex">
      <h1 className="relative z-20 text-center text-3xl font-bold text-black md:text-7xl lg:text-9xl">
        Space
      </h1>{" "}
      <div className="relative h-40 w-[40rem]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        <span className="absolute left-1/2 top-8 w-full -translate-x-1/2 break-words text-3xl font-bold md:text-left">
          Welcome, and from here you can explore our <FlipWords words={words} />
        </span>
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#000000"
        />
        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      </div>
    </div>
  );
}
