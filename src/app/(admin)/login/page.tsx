"use client";
import { FormEvent, useState } from "react";

import { Container } from "../../components/container";

import { TbLock } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("teste");
  }
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md m-auto p-10 justify-center text-center rounded-lg flex flex-col gap-2 bg-zinc-950"
        >
          <p className="text-center text-4xl uppercase font-semibold mb-4">Login</p>
          <div className=" flex items-center bg-white w-full p-2 border-2 rounded-md my-2">
            <TfiEmail size={24} className="text-black mr-4" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teste@gmail.com"
              className="flex-1  bg-transparent border-none outline-none text-black"
            />
          </div>

          <div className="flex items-center bg-white w-full p-2 border-2 rounded-md my-2">
            <TbLock size={24} className="text-black mr-4" />
            <input
              type="password"
              value={passowrd}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              className="flex-1 w-full bg-transparent border-none outline-none text-black"
            />
          </div>

          <button
            type="submit"
            className="h-10 bg-red-600 my-2 rounded border-0 text-lg flex justify-center items-center font-medium text-white duration-300 hover:bg-red-700"
          >
            Acessar
          </button>
        </form>
      </div>
    </Container>
  );
}
