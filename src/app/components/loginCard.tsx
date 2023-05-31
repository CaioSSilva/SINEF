"use client";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginCard() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="bg-white rounded-lg flex flex-col justify-center items-center">
      <div className="p-10 pb-0">
        <h1 className=" font-bold text-lg ">Bem vindo(a) ao SINEF!</h1>
        <p></p>
      </div>
      <form className="flex flex-col gap-8 p-10">
        <div className="flex flex-1 items-center gap-2">
          <label htmlFor="usuario" className="">
            Usuário
          </label>
          <input
            id="usuario"
            type="text"
            className=" p-1 text-sky-600  border-2 rounded-lg border-opacity-50 outline-none border-sky-600 transition duration-200"
            value={user}
            maxLength={20}
            onChange={(e) => {
              setUser(e.target.value.toUpperCase());
            }}
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="senha" className="">
            Senha
          </label>
          <input
            id="senha"
            type={visibility ? "text" : "password"}
            className=" p-1 text-sky-600  border-2 rounded-lg border-opacity-50 outline-none border-sky-600 transition duration-200"
            value={password}
            maxLength={20}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div>
            {visibility ? (
              <Eye
                className="stroke-sky-600 cursor-pointer"
                onClick={() => setVisibility(!visibility)}
              />
            ) : (
              <EyeOff
                className="stroke-sky-600 cursor-pointer"
                onClick={() => setVisibility(!visibility)}
              />
            )}
          </div>
        </div>

        <Link
          className="border-b-2 border-white hover:border-sky-500 m-auto"
          href={"/forgetPassword"}
        >
          Esqueceu sua senha?
        </Link>

        <div
          className="flex justify-center bg-sky-500 rounded-lg w-1/3 p-1 text-white hover:bg-sky-600 m-auto cursor-pointer"
          onClick={() => {
            if (password != "" && user != "") router.push("/dashboard");
          }}
        >
          Login
        </div>
      </form>
    </div>
  );
}
