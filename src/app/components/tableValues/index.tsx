'use client'
import {  useState } from "react";

interface ServicoProps {
  id: number;
  nome: string;
  preco: number;
}

export function TableValues() {
  
  const [dados] = useState<ServicoProps[]>([
    { id: 1, nome: "Corte de tesoura", preco: 30 },
    { id: 2, nome: "Corte de máquina", preco: 25 },
    { id: 3, nome: "Barba", preco: 15 },
    { id: 4, nome: "Combo", preco: 40 },
    { id: 5, nome: "Sobrancelha", preco: 20 },
    { id: 6, nome: "Massagem Facial", preco: 40 },
    { id: 7, nome: "Pigmentação", preco: 20 },
  ]);

 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
      {dados.map((item) => (
        <div key={item.id} className="flex items-center capitalize">
          <p className="font-medium text-lg">{item.nome}</p>
          <div className="flex-1 h-0 border-2 border-dotted border-gray-400 mx-4" />
          <p className="font-medium text-lg text-red-500">R$ {item.preco}</p>
        </div>
      ))}
    </div>
  );
}
