"use client";
import { useState, useEffect, ChangeEvent } from "react";

import Link from "next/link";
import Image from "next/image";
import { TextField } from "@/app/components/TextField";
import { AreaField } from "@/app/components/AreaField";
import { ButtonPrimary } from "@/app/components/ButtonPrimary";

export default function NewEvent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  function updateTitle(e: ChangeEvent<HTMLInputElement> | undefined) {
    setTitle(e?.target.value || "");
  }
  function updateContent(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e?.target.value || "");
  }
  function updateAuthorName(e: ChangeEvent<HTMLInputElement> | undefined) {
    setAuthorName(e?.target.value || "");
  }

  function onClickSave() {}

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
            id="authorName"
            name="Data do evento"
            onchange={updateAuthorName}
            type="date"
            value={authorName}
          />
          <TextField
            id="authorName"
            name="Imagem do evento"
            onchange={updateAuthorName}
            type="file"
            value={authorName}
          />
        </div>
        <ButtonPrimary title="Publicar" onClick={onClickSave} />
      </form>
    </main>
  );
}
