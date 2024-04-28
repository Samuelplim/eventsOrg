"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { EventProps } from "@/app/Models";
import { indexEvents } from "@/app/api/events";

export const Home = () => {
  const [events, setEvents] = useState<EventProps[]>([]);

  async function getEvents() {
    const events = await indexEvents();
    if (events) {
      setEvents(events);
    }
  }
  useEffect(() => {
    getEvents();
  }, []);

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

      <div className="flex gap-6 flex-col">
        <form className="md:w-96 sm:w-full">
          <label
            form="search"
            className="mb-2 xl:text-sm  md:text-xs font-medium text-gray-900 sr-only dark:text-white"
          >
            Pesquisar Evento
          </label>
          <div className="flex gap-2">
            <input
              type="search"
              id="search"
              className="block w-full p-4 md:ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Pesquisar evento"
              required
            />
            <button
              type="submit"
              className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-100"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className="font-medium w-fit text-gray-900 dark:text-white block p-4 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <p>Você viu um evento incrivel?</p>
          <p>Compartilha com a gente!</p>
          <Link
            href={"/newEvent"}
            className="underline text-gray-900 dark:text-white"
          >
            {" "}
            Cadastrar um evento
          </Link>
        </div>
      </div>

      {events.length > 0 ? (
        events.map((event, i) => (
          <div key={i}>
            {" "}
            <div className="">{event.title}</div>
          </div>
        ))
      ) : (
        <div>
          <p>Buscando eventos...</p>
        </div>
      )}
    </main>
  );
};
