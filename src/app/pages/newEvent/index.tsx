"use client";
import { useState, ChangeEvent } from "react";

import { readdir } from "fs/promises";
import Image from "next/image";
import { TextField } from "@/app/components/TextField";
import { AreaField } from "@/app/components/AreaField";
import { ButtonPrimary } from "@/app/components/ButtonPrimary";
import axios from "axios";
import { GetServerSideProps } from "next";
import path from "path";

export default function NewEvent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [eventDate, setEventDate] = useState<Date>();
  const [imageFile, setImageFile] = useState<File>();
  const [loading, setLoading] = useState(false);

  function updateTitle(e: ChangeEvent<HTMLInputElement> | undefined) {
    setTitle(e?.target.value || "");
  }
  function updateContent(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e?.target.value || "");
  }
  function updateAuthorName(e: ChangeEvent<HTMLInputElement> | undefined) {
    setAuthorName(e?.target.value || "");
  }

  function updateEventDate(e: ChangeEvent<HTMLInputElement> | undefined) {
    const newDate = new Date(e?.target.value || "");
    setEventDate(newDate);
  }

  function updateImage(e: ChangeEvent<HTMLInputElement> | undefined) {
    if (e?.target.files) {
      const file = e.target.files[0];
      setImageFile(file);
    }
  }

  async function handleUpload() {
    try {
      if (!imageFile) return;
      const formData = new FormData();
      formData.append("myImage", imageFile);
      const { data } = await axios.post("/api/images", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
  }

  async function onClickSave() {
    setLoading(true);
    try {
      if (eventDate) {
        const newEventId = await axios.post("/api/events", {
          title,
          content,
          authorName,
          eventDate,
          published: true,
        });
        /* if (newEventId) {
          handleUpload();
        }  */
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

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
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <TextField
            id="title"
            name="Nome do evento"
            onchange={updateTitle}
            type="text"
            value={title}
          />
          <AreaField
            id="content"
            name="Descrição do evento"
            onchange={updateContent}
            value={content}
            rows={3}
          />

          <TextField
            id="authorName"
            name="Seu nome"
            onchange={updateAuthorName}
            type="text"
            value={authorName}
          />
          <TextField
            id="eventDate"
            name="Data do evento"
            onchange={updateEventDate}
            type="date"
          />
          <TextField
            id="image"
            name="Imagem do evento"
            onchange={updateImage}
            type="file"
          />
        </div>
        <ButtonPrimary
          title="Publicar"
          onClick={() => onClickSave()}
          disabled={loading}
        />
      </form>
    </main>
  );
}

export async function getStaticProps() {
  readdir;
  return { props: {} };
}

export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await readdir(path.join(process.cwd(), "/public/images"));
    props.dirs = dirs as any;
    return { props };
  } catch (error) {
    return { props };
  }
};
