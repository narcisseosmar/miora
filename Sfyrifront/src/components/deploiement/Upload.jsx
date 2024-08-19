import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName] = useState("");

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleUpload = () => {
    // Logique d'upload des fichiers
    console.log("Files to upload:", files);
    console.log("Project name:", projectName);
    // Ajoutez ici la logique d'upload des fichiers
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "modal-container") {
      setIsModalOpen(false);
    }
  };

  return (
    <section>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 border-cyan-500">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Projet</h2>
          <button
            onClick={toggleModal}
            className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            Nouveau projet
          </button>
        </div>
      </header>

      {/* CORPS ANLE IZY  NO ETO */}

<form action="">


<div className="border-b border-w-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Information sur le projet
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Veuillez utiliser un email valide et fixe pour la notification sur le
          projet.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nom du projet
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                placeholder="       Nom de votre projet"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-white focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm leading-6 text-gray-900 font-semibold"
              >
                Votre nom de domaine
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="   Votre nom de domaine:net,com,dev,org..."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-white focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Comment voulez-vous gérez votre certificat SSL?
            </legend>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Certbot automatique
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="push-email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Certificat personelle
                </label>
              </div>
            </div>
            <br />
            <div className="flex items-center justify-center">
            <label className="block">
              <span className="sr-only">Choisisez le certificat</span>
              <input
                type="file"
                className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
              />
            </label>
          </div>
          </fieldset>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
         Options pour le deploiement
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Veuillez cocher les options que vous voulez appliquez à votre projet et tout cela se fera
          automatiquement sans vous soucier de rien.
        </p>

        <div className="mt-10 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Déploiement
            </legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="comments"
                    className=" text-gray-900 font-semibold"
                  >
                   Dockerisé
                  </label>
                  <p className="text-gray-500">
                    Votre application sera directement dockerisé dans un dockerfile et déployé directement 
                  </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="candidates"
                    className=" text-gray-900 font-semibold"
                  >
                    Repository
                  </label>
                  <p className="text-gray-500">
                   Création de ŕepository gitlab automatique pour votre projet afin déposez votre code.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className=" text-gray-900 font-semibold">
                   Kubernetes
                  </label>
                  <p className="text-gray-500">
                   Utilisation de kubernetes pour un performance de votre application lors de son déploiement
                  </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-semibold text-gray-900">
                    Hautes disponnibilité de votre application
                  </label>
                  <p className="text-gray-500">
                   Ajout de fonctionalité de clustering pour votre application avec orchestration 
                  </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-semibold text-gray-900">
                    Notifications
                  </label>
                  <p className="text-gray-500">
                  Vous allez recevoir des notifications  via votre email 
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Push Notifications
            </legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              These are delivered via SMS to your mobile phone.
            </p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Everything
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="push-email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Same as email
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="push-nothing"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>

          <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-semibold leading-6 text-gray-900">
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="mail"
                  autoComplete="street-address"
                  className=" block w-1/4 rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="     user@email.com"
                />
              </div>
            </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Annuler
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Deployez
        </button>
      </div>





</form>
      {/* MODAL POUR LE PROMPT DU NOUVEAU PROJET A FAIRE */}

      {isModalOpen && (
        <div
          id="modal-container"
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="mb-4 text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mb-5 flex flex-col items-end gap-6 w-full">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Nom du projet
                </label>
              </div>
            </div>

            <div
              className="border-2 border-dashed rounded-lg p-8 w-full text-center"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <PhotoIcon
                  aria-hidden="true"
                  className="mx-auto h-12 w-12 text-gray-300"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="text-blue-500">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only text-gray-600"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">
                    or drag and drop PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {files.length > 0 && (
              <div className="mt-6">
                <p>Selected Files:</p>
                <ul className="list-disc pl-5">
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleUpload}
                className="bg-green-200 text-gray-700 px-6 py-3 rounded hover:bg-green-400"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Upload;
