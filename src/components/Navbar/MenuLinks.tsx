import Link from "next/link";

export default function MenuLinks() {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <Link
          href="/"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
          aria-current="page"
        >
          Home
        </Link>
        <Link
          href="/myProjects"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="/aboutMe"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          About Me
        </Link>
      </div>
    </div>
  );
}
