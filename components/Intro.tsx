
const Intro: React.FC = () => {
  return (
    <div className="bg-black text-white font-mono text-xs md:text-sm lg:text-base">
      <div className="flex flex-col justify-between min-h-screen p-4 md:p-8">
        <div className="flex justify-between">
          <p className="text-green-400">Universidad de Bogotá Jorge Tadeo Lozano</p>
          <p className="text-yellow-300">UJTL</p>
        </div>
        <div className="text-center">
          <p>Released: 06/24</p>
          <p>Copyright (C)2024-UTADEO</p>
          <button className="border border-white p-3 mt-5"> ENTER </button>
        </div>
        <p className="text-right">Fundación para el desarrollo universitario</p>
      </div>
    </div>
  );
};

export default Intro;
