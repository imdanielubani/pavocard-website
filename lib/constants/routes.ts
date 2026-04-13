export const ROUTES = {
  HOME: "/",
  ABOUT: "/about-us",
  RATE: "/rate",
  BLOGS: "/blogs",
  BLOG: (slug: string) => `/blogs/${slug}`,
  CONTACT: "/contact-us",
  FAQ: "/faq",
  TERMS: "/terms",
  PRIVACY: "/privacy",
} as const;
