export interface NavLink {
  id: number;
  title: string;
  url: string;
}

export const Links: NavLink[] = [
  { id: 1, title: "About Me", url: "/about" },
  { id: 2, title: "Projects", url: "/myProjects" },
  { id: 3, title: "Contact", url: "/contact" },
];
