import { Link } from "react-router-dom";
const MainSection = () => {
  return (
    <main className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          Sfyri
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Sec Message
          </span>
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
          Salama aby ny taigna!
        </p>

        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-blue-300 py-2 font-bold mb-2"
              htmlFor="emailaddress"
            >
              Mba andefaso message agnay
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              id="emailaddress"
              type="text"
              placeholder="you@sfyrisec.com"
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              Envoyer
            </button>
            <li>
              <Link to="/pod-status">Surveillance des Pods</Link>
            </li>{" "}
            {/* Lien vers la page de statut */}
          </div>
        </form>
      </div>

      <div className="w-full xl:w-3/5 p-12 overflow-hidden"></div>

      <div className="mx-auto md:pt-16">
        <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center"></p>
        <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in"></div>
      </div>
    </main>
  );
};

export default MainSection;
