import { ROUTES } from "./routes";

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Faqs", href: ROUTES.FAQ },
  { label: "Blogs", href: ROUTES.BLOGS },
  { label: "Downloads", href: "#downloads" },
] as const;
