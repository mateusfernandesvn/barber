import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-black w-full text-center pt-4 dark:bg-zinc-950 dark:text-gray-200">
      <div className="my-4">
      <Link
          href="/"
          className="text-red-600 uppercase font-semibold text-4xl lg: mb-4 lg:mb-0"
        >
         A <span className="text-white">Navalha</span> 
        </Link>
        <div className="flex mt-12 mb-6 flex-col text-lg font-semibold text-black lg:flex-row justify-center gap-4 lg:gap-6 dark:text-gray-200">
          <Link href="/">Home</Link>
          <a href="#about">Sobre nós</a>
          <a href="#services">Serviços</a>
          <Link href="/agendamento" >
            Agendar
          </Link>
        </div>
       

        <div className="flex mt-8 mb-6  justify-center gap-4 ">
          <a href="">
            <MdEmail size={30} />
          </a>

          <a
            href="#"
            target="_blank"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#"
            target="_blank"
          >
            <FaFacebook size={30} />
          </a>
        </div>
        <p className="max-w-2xl text-center m-auto my-6  px-4 max-sm:text-sm">
        Nossa barbearia  oferece atendimento de excelência em um ambiente moderno, com cortes dedicados e cheios de estilo.
        </p>
      </div>
      <div className=" py-4 flex flex-col items-center">
        <p className="text-base">
          &copy; 2024  A Navalha. Todos os direitos reservados.
        </p>
        
      </div>
    </footer>
  );
}
