export interface BlogPost {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  coverImage: string;
  listImage: string;
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "smart-way-gift-cards",
    date: "Apr 24, 2026",
    title: "The Smart Way to Turn Gift Cards into Cash in Nigeria & Ghana",
    excerpt:
      "Learn how to safely and quickly convert your unused gift cards into cash without stress.",
    coverImage: "/images/blog-detail-cover.png",
    listImage: "/images/blog1.png",
    body: [
      "Gift cards are more than just presents—they're a form of digital value. But for many users in Nigeria 🇳🇬 and Ghana 🇬🇭, converting that value into cash hasn't always been straightforward.",
      "Traditional methods can be slow, unreliable, or even risky. That's why platforms like Pavocard are changing the experience.",
      "With a simple and secure process, you can upload your gift card, get a real-time rate, and receive payment quickly. No delays. No uncertainty.",
      "As digital transactions continue to grow, having a reliable platform to convert your assets into cash is more important than ever.",
    ],
  },
  {
    slug: "speed-security-gift-card-trading",
    date: "Apr 24, 2026",
    title: "Why Speed and Security Matter in Gift Card Trading",
    excerpt:
      "Discover why fast payouts and secure transactions are essential when selling gift cards.",
    coverImage: "/images/blog2.png",
    listImage: "/images/blog2.png",
    body: [
      "When it comes to trading gift cards, two things matter above all else: speed and security. Users in Nigeria and Ghana deserve both — and they deserve them together.",
      "Slow platforms cost you money. Every hour your gift card sits unprocessed is an hour you're not getting the value you're owed. With Pavocard, transactions are handled in real time.",
      "Security is equally non-negotiable. Pavocard uses industry-standard encryption and verification to ensure every transaction is protected from start to finish.",
      "The combination of fast payouts and airtight security is what sets Pavocard apart. It's not just a platform — it's peace of mind every time you sell.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPost(currentSlug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug !== currentSlug);
}
