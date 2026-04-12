import { ROUTES } from "./routes";

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Rate", href: ROUTES.RATE },
  { label: "Blogs", href: ROUTES.BLOGS },
  { label: "Downloads", href: "#downloads" },
] as const;
