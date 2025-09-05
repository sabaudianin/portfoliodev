export const STATIC_ROUTES = [
  "/",
  "/my-projects",
  "/about",
  "/contact",
] as const;

// sklej URL
export const ABSOLUTE_URL = (
  path: string,
  base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
) => `${base}${path}`;
