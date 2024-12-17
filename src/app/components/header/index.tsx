import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export function Header() {

  return (
    <header className="bg-gray-100 text-white w-full items-center mx-auto  ">
      <nav className="w-full h-24 flex mx-auto items-center lg:flex-row justify-between px-12 py-3 text-black dark:bg-zinc-950 dark:text-white">
        <Link
          href="/"
          className="text-red-600 uppercase font-extrabold text-3xl italic  "
        >
         A <span className="text-white ">Navalha</span> 
        </Link>

        <div className="flex items-center gap-6 font-medium max-lg:hidden ">
          <Link href="/">Home</Link>
          <a href="#about">Sobre nós</a>
          <a href="#services">Serviços</a>
          <Link href="/agendamento" className="text-red-700 bg-red-50 px-4 py-1 rounded-md">
            Agendar
          </Link>
        </div>

        <div className="lg:hidden cursor-pointer">
        <FiMenu size={30} />
        </div>

       
      </nav>
    </header>
  );
}
