import { Link } from "react-router-dom"; // Importer Link pour la navigation

const Header = () => {
  return (
    <header className="w-full container mx-auto flex items-center justify-between p-6 bg-white shadow-md">
      {/* Logo et titre */}
      <a
        href="#"
        className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
      >
        Sfyri
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
          Sec
        </span>
      </a>

      {/* Navigation principale */}
      <nav className="flex space-x-4">
        <Link
          to="/"
          className="text-blue-300 no-underline hover:text-pink-500 hover:underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          Accueil
        </Link>
        <Link
          to="/pod-status"
          className="text-blue-300 no-underline hover:text-pink-500 hover:underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          Tableau de Bord
        </Link>
      </nav>

      {/* Liens de partage */}
      <div className="flex space-x-4">
        <a
          href="https://twitter.com/intent/tweet?url=#"
          className="text-blue-300 no-underline hover:text-pink-500 hover:underline text-center h-10 p-2 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          aria-label="Partager sur Twitter"
        >
          <svg
            className="fill-current h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=#"
          className="text-blue-300 no-underline hover:text-pink-500 hover:underline text-center h-10 p-2 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          aria-label="Partager sur Facebook"
        >
          <svg
            className="fill-current h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
