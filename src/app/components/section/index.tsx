import { ReactNode } from "react";

interface SectionProps {
  title: string;
  id: string;
  children: ReactNode;
}

export function Section({ title, id, children }: SectionProps) {
  return (
    <section className="flex flex-col text-center py-10 max-lg:py-4" id={id} data-aos="fade-up">
      <h2 className="text-4xl font-black mb-4 my-4 uppercase tracking-widest max-lg:text-2xl">
        {title} <span className="text-red-500 m">.</span>
      </h2>
      {children}
    </section>
  );
}
