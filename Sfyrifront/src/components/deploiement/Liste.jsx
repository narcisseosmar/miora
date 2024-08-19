import Card from "./Card";

function Liste() {
  const applications = [
    {
      domain: "example1.com",
      email: "contact@example1.com",
      repository: "https://github.com/example1/repo",
      technos: "React, Node.js, Docker",
      image: "example1:latest",
    },
    {
      domain: "example2.com",
      email: "contact@example2.com",
      repository: "https://github.com/example2/repo",
      technos: "React, Node.js, Docker",
      image: "example2:latest",
    },
    {
      domain: "example3.com",
      email: "contact@example3.com",
      repository: "https://github.com/example3/repo",
      technos: "React, Node.js, Docker",
      image: "example3:latest",
    },
    {
      domain: "example4.com",
      email: "contact@example4.com",
      repository: "https://github.com/example4/repo",
      technos: "React, Node.js, Docker",
      image: "example4:latest",
    },
    // Ajoutez plus d'applications ici si nécessaire
  ];

  return (
    <>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 border-cyan-500">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Images deployé</h2>
          <div className="mb-3 xl:w-96">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600  dark:focus:border-primary"
                placeholder="Recherche par nom de domaine"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              {/* <!--Search icon--> */}
              <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {applications.map((application, index) => (
          <Card
            key={index}
            domain={application.domain}
            email={application.email}
            repository={application.repository}
            technos={application.technos}
            image={application.image}
          />
        ))}
      </div>
    </>
  );
}

export default Liste;
