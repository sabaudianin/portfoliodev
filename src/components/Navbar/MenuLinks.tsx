import Link from "next/link";
import { Links } from "./navlinks";

export default function MenuLinks() {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex justify-center align-center space-x-4">
        {Links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="rounded-md px-3 py-2 text-lg text-white transform transition-transform duration-200 hover:scale-105"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
