function Experience() {
  return (
    <>
      <section class="mx-auto w-full max-w-7xl px-4 py-0 education">
        <div class="flex flex-col mb-4 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 class="text-2xl text-gray-800 font-bold">Experience</h2>
          </div>
        </div>
        <div className="border rounded-lg p-3 shadow-md">
          <div class="items-center justify-between p-2 bg-white border-gray-200 rounded-lg sm:flex  ">
            <time class="mb-1 text-md font-normal text-gray-500 sm:order-last sm:mb-0">
              Jan 2025 - Present
            </time>
            <h2 className="text-lg font-semibold text-gray-800">
              Air Force Group Insurance Society, Senior Assistant EDP
            </h2>
          </div>
          <hr />
          <div className="px-1 mt-2 font-normal text-base text-gray-500">
            – Design and develop Oracle Forms and Reports in-house to support
            internal business operations, en hancing data management.
            <br />
            – Manage and troubleshoot a PHP-based website, implementing updates,
            resolving bugs, and ensuring optimal performance and security.
            <br />
            – Perform regular database maintenance and write optimized SQL
            queries to support both Oracle applications and web back-end
            operations.
            <br />
            – Collaborate with cross-functional teams to gather requirements,
            enhance existing functionalities, and support system integrations
            across Oracle and web platforms.
            <br />– Tech Stack used Oracle Form, Oracle Report, Oracle Database,
            PL/SQL.
          </div>
          {/* break */}
          <div class="items-center justify-between p-2 bg-white border-gray-200 rounded-lg sm:flex  ">
            <time class="mb-1 text-md font-normal text-gray-500 sm:order-last sm:mb-0">
              Jan 2024 - Dec 2024
            </time>
            <h2 className="text-lg font-semibold text-gray-800">
              All India Council for Technical Education, Software Developer
              Intern
            </h2>
          </div>
          <hr />
          <div className="px-1 mt-2 font-normal text-base text-gray-500">
            – Worked closely with cross-functional teams, including designers,
            project managers.
            <br />
            – Troubleshot and optimized the frontend of various web portals,
            ensuring smooth user interfaces and enhanced user experience.
            <br />
            – Built a dynamic website using PHP to display data from the
            backend, enhancing data visibility and user interaction.
            <br />
            – Developed and maintained RESTful APIs using Laravel, facilitating
            seamless communication between frontend and backend systems.
            <br />– Tech Stack used HTML , CSS , Javascript , MySQL , Angular ,
            PHP AND Laravel .
          </div>
        </div>
      </section>
    </>
  );
}
export default Experience;
