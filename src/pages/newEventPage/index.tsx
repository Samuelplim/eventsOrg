"use client";
import { useState, useEffect } from "react";
import { EventProps } from "@/api/Events/Models";
import { creatEvent } from "@/api/Events";
import Link from "next/link";
import Image from "next/image";

export default function NewEventPage() {
  const [events, setEvents] = useState<EventProps[]>([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Seu evento para o mundo
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Image
            src="/assets/logo.png"
            alt="ConnectFlock"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
      <p>s</p>
    </main>
  );
}
