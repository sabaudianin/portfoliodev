export const Experience = () => {
  return (
    <div className="relative pt-8 pl-6 sm:pl-6 border-l-4 border-gray-300 dark:border-gray-700 space-y-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Experience Timeline
      </h2>

      <div className="relative pl-6 sm:pl-0">
        <div className="absolute left-0 sm:-left-[1.1rem] top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
        <p className="text-lg font-semibold text-gray-800 dark:text-white">
          Warehouse Manager
        </p>
        <span className="text-sm text-gray-500">
          Olexim Sp. z o.o. | November 2014 – Present | Poland
        </span>
        <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Led warehouse operations, improving supply chain efficiency through
            proactive problem-solving and process optimization.
          </li>
          <li>
            Managed a cross-functional team to ensure timely order fulfillment
            and smooth day-to-day logistics.
          </li>
          <li>
            Collaborated with clients and suppliers to streamline communication
            and resolve logistical issues quickly and effectively.
          </li>
          <li>
            Demonstrated excellent organizational skills by overseeing
            inventory, scheduling, and operational workflows.
          </li>
        </ul>
      </div>

      <div className="relative pl-6 sm:pl-0">
        <div className="absolute left-0 sm:-left-[1.1rem] top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
        <p className="text-lg font-semibold text-gray-800 dark:text-white">
          Team Supervisor
        </p>
        <span className="text-sm text-gray-500">
          Mid Coul Farms | May 2011 – November 2012 | Scotland
        </span>
        <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Built strong leadership and interpersonal skills through effective
            team coordination and conflict resolution.
          </li>
          <li>
            Developed a strong foundation in time management and
            adaptability—skills.
          </li>
        </ul>
      </div>
    </div>
  );
};
