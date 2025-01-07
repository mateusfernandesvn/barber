import Image from "next/image";
import Link from "next/link";

import { Container } from "./components/container";
import { Section } from "./components/section";
import { TableValues } from "./components/tableValues";
import { Gallery } from "./components/gallery";
import { Card } from "./components/card";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { PiHairDryer, PiScissors } from "react-icons/pi";
import { GiBeard } from "react-icons/gi";
import { MdSpa } from "react-icons/md";

export default function Home() {
  return (
    <main className="bg-zinc-900 text-gray-200">

      <div className="relative w-full">
        <Image
          src="/banner.png"
          alt="Banner"
          width={1920}
          height={1080}
          quality={100}
          priority={true}
          className="brightness-50 object-cover w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
        />
        <div className="absolute w-full inset-0 flex flex-col items-center justify-center text-center bg-opacity-50">
          <h1 className="text-5xl font-semibold uppercase text-white mb-4 overflow-hidden tracking-wider font-heading select-none max-sm:text-3xl ">
            Agende seu estilo <br /> hoje mesmo!
          </h1>
          <p className="font-semibold uppercase text-gray-100 mb-5 overflow-hidden select-none text-base ">
            Cortes que refletem sua personalidade e elegância.
          </p>
          <Link
            href="/agendamento"
            className="w-full max-w-[12rem] text-sm md:max-w-[15rem] py-2 overflow-hidden bg-red-600 text-white font-bold rounded-lg md:py-3 md:text-lg uppercase hover:bg-red-700 duration-300 mx-auto"
          >
            Agende agora
          </Link>
        </div>
      </div>

      <Container>
        <Section title="Seu Estilo, Nossa Missãos" id="about">
          <div className="flex flex-col justify-center mx-8 text-lg max-sm:mx-1 ">
            <p className="text-center max-sm:text-justify">
              Na Master Barber, acreditamos que um corte de cabelo vai além de
              um simples serviço: é uma experiência de cuidado e estilo. Desde a
              nossa inauguração, nos dedicamos a oferecer o que há de melhor no
              universo da barbearia, combinando tradição e tendências modernas
              para criar um visual único e personalizado para cada cliente. Com
              uma equipe de profissionais altamente qualificados, garantimos um
              atendimento de excelência, em um ambiente acolhedor e
              descontraído. Nossa missão é não apenas realçar a aparência, mas
              também proporcionar um momento de relaxamento e bem-estar, sempre
              com um toque de sofisticação.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center bg-gray-200 m-auto border border-gray-300 rounded-lg p-12 justify-around gap-8 my-8 dark:bg-zinc-950 dark:text-white">
            <div className="flex flex-col items-center gap-4 text-base justify-center">
              <FaLocationDot size={40} color="gray" />
              <p className="font-semibold text-2xl uppercase text-gray-400 underline underline-offset-8 decoration-red-500">
                Local
              </p>
              <p className="font-semibold text-center">
                Av. Dorival Caymmi, Itapuã
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 text-sm justify-center">
              <FaPhone size={40} color="gray" />
              <p className="font-semibold text-2xl uppercase text-gray-400 underline underline-offset-8 decoration-red-500">
                Telefone
              </p>
              <p className="font-semibold text-center">(71) 99999-9999</p>
            </div>

            <div className="flex flex-col items-center gap-4  justify-center">
              <FaClock size={40} color="gray" />
              <p className="font-semibold text-2xl  uppercase text-gray-400 underline underline-offset-8 decoration-red-500">
                Horário
              </p>
              <span className=" text-center">Seg a Sáb: 8h às 19h</span>
            </div>
          </div>
        </Section>

        <Section title="Principais Serviços" id="services">
          <div className="grid grid-cols-4  max-lg:grid-cols-2 max-md:grid-cols-1 ">
            <Card icon={<PiScissors size={40} />} title="Cortes" />
            <Card
              icon={<GiBeard size={40} />}
              icon2={<PiScissors size={40} />}
              title="Combo"
            />
            <Card icon={<GiBeard size={40} />} title="Barba" />
            <Card icon={<MdSpa size={40} />} title="Massagem Facial" />
          </div>
        </Section>

        <Section title="Tabela de valores" id="prices">
          <TableValues />
        </Section>

        <Section title=" Nossa Galeria" id="gallery">
          <Gallery />
        </Section>
      </Container>
    </main>
  );
}
