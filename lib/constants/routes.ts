export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  RATE: "/rate",
  BLOGS: "/blogs",
  BLOG: (slug: string) => `/blogs/${slug}`,
  CONTACT: "/contact",
  FAQ: "/faq",
  TERMS: "/terms",
  PRIVACY: "/privacy",
} as const;
