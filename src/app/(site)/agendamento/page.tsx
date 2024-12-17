"use client";

import Link from "next/link";
import { Container } from "@/app/components/container";
import { Input } from "@/app/components/input";
import { Select } from "@/app/components/select";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Preencha esse campo"),
  whatsapp: z
    .string()
    .min(11, "O telefone é obrigatório")
    .refine((value) => /^(\d{11,12})$/.test(value), {
      message: "Número de telefone inválido.",
    }),
  datetime: z.string().min(1, "Selecione uma data e hora"),
  services: z.string().min(1, "Selecione um serviço"),
  barber: z.string().min(1, "Escolha um barbeiro"),
});

type FormData = z.infer<typeof schema>;

export default function Agendamento() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const services = [
    { value: "corte", label: "Corte de cabelo" },
    { value: "barba", label: " barba" },
    { value: "combo", label: "Corte + Barba" },
  ];

  const barbers = [
    { value: "joao", label: "João" },
    { value: "carlos", label: "Carlos" },
  ];

  const onSubmit = async (data: FormData) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen"> 
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md rounded-lg p-10 bg-zinc-950 justify-center  items-center text-white  shadow-lg"
        >
          <h2 className="text-center text-3xl font-medium mb-4">Agendamento</h2>

          <div className="flex flex-col mb-2 items-center gap-4">
            <div className="w-full">
              <label htmlFor="name" className="mb-2 font-medium">
                Nome completo
              </label>
              <Input
                type="text"
                register={register}
                name="name"
                error={errors.name?.message}
                placeholder="Ex: João da Silva..."
              />
            </div>

            <div className="w-full">
              <label htmlFor="datetime" className="mb-2 font-medium">
                Selecione a data e horário
              </label>
              <Input
                type="datetime-local"
                register={register}
                name="datetime"
                error={errors.datetime?.message}
              />
            </div>

            <div className="w-full">
              <label htmlFor="whatsapp" className="mb-2 font-medium">
                WhatsApp
              </label>
              <Input
                type="text"
                register={register}
                name="whatsapp"
                error={errors.whatsapp?.message}
                placeholder="Ex: 71996783434"
              />
            </div>

            <div className="flex w-full mb-2 flex-row items-center  gap-4 max-sm:flex-col">
              <div className="w-full">
                <label htmlFor="services" className="mb-2 font-medium">
                  Selecione o serviço
                </label>
                <Select
                  register={register}
                  name="services"
                  options={services}
                  error={errors.services?.message}
                />
              </div>

              <div className="w-full">
                <label htmlFor="barber" className="mb-2 font-medium">
                  Selecione o barbeiro
                </label>
                <Select
                  register={register}
                  name="barber"
                  options={barbers}
                  error={errors.barber?.message}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-10 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 duration-300 transition-all ease-in-out"
          >
            Agendar
          </button>
        </form>
      </div>
    </Container>
  );
}
