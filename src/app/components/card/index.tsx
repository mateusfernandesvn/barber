interface CardProps {
    icon: React.ReactNode;
    icon2?: React.ReactNode; // Icon2 é opcional
    title: string;
  }
  
  export const Card: React.FC<CardProps> = ({ icon, icon2, title }) => {
    return (
      <div className="w-44 h-44  rounded-full text-center flex flex-col items-center justify-center mx-auto bg-white my-12 hover:scale-105 transition-all duration-300 shadow-lg">
        <div className="flex gap-2 items-center">
          <div className="text-black text-2xl">{icon}</div>
          {icon2 && (
            <>
              <span className="text-black text-3xl font-bold">+</span>
              <div className="text-black text-2xl">{icon2}</div>
            </>
          )}
        </div>
        <p className="text-base uppercase text-black font-semibold mt-4">{title}</p>
      </div>
    );
  };
  