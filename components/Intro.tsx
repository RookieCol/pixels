const Intro: React.FC = () => {
  return (
    <div className="bg-black text-white font-mono text-xs md:text-sm lg:text-base">
      <div className="flex flex-col justify-between min-h-screen p-4 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <p className="text-green-400 text-center md:text-left">
            Universidad de Bogotá Jorge Tadeo Lozano
          </p>
          <p className="text-green-400 text-center md:text-right">
            UJTL
          </p>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center text-green-400">
          <div className="text-center">
            <p>Released: 06/24</p>
            <p>Copyright (C)2024-UTADEO</p>
          </div>
          <button
            className="border border-green-500 p-3 mt-5 bg-black hover:bg-green-500 text-green-500 hover:text-white rounded-md transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            ENTER
          </button>
        </div>

        <p className="text-green-400 text-center md:text-right">
          Fundación para el desarrollo universitario
        </p>
      </div>
    </div>
  );
};

export default Intro;
