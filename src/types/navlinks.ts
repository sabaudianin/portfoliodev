export interface NavLink {
  id: number;
  title: string;
  url: `/${string}` | `#${string}`;
  ariaLabel?: string;
}

export const Links: NavLink[] = [
  { id: 1, title: "About Me", url: "/about", ariaLabel: "About Me" },
  { id: 2, title: "Projects", url: "/my-projects", ariaLabel: "My Projects" },
  { id: 3, title: "Contact", url: "/contact", ariaLabel: "Contact" },
];
