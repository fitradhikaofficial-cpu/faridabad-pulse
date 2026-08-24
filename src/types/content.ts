export type CategorySlug =
  | "business"
  | "entrepreneurs"
  | "industry"
  | "startups"
  | "people";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export interface ImageSlot {
  /** Real image URL/import path. Leave empty to render the editorial placeholder. */
  src?: string;
  alt: string;
  /** Optional caption rendered under inline/featured images. */
  caption?: string;
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "factbox"; title: string; items: string[] }
  | { type: "image"; image: ImageSlot }
  | { type: "sources"; items: string[] };

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: CategorySlug;
  /** Optional industry / topic tags used for filtering. */
  tags: string[];
  excerpt: string;
  deck: string;
  featuredImage: ImageSlot;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  featured?: boolean;
  /** Editorial content is independent. Sponsored items must be labelled. */
  contentType: "editorial" | "sponsored";
  content: ArticleBlock[];
  seoTitle: string;
  seoDescription: string;
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  category: string;
  industry: string;
  location: string;
  logo: ImageSlot;
  coverImage: ImageSlot;
  shortDescription: string;
  about: string[];
  services: string[];
  products: string[];
  founder?: { name: string; role: string; note?: string };
  website?: string;
  socialLinks?: { label: string; url: string }[];
  contact?: { email?: string; phone?: string; address?: string };
  gallery: ImageSlot[];
  featuredStories: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface Entrepreneur {
  id: string;
  name: string;
  slug: string;
  role: string;
  organisation: string;
  sector: string;
  location: string;
  portrait: ImageSlot;
  summary: string;
  story: ArticleBlock[];
  relatedBusiness?: string;
  relatedArticles: string[];
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
}

export interface MagazineIssue {
  id: string;
  issueNumber: number;
  title: string;
  slug: string;
  releaseDate: string;
  cover: ImageSlot;
  description: string;
  /** Insert the real PDF URL here when available. */
  pdfUrl?: string;
  contents: { section: string; headline: string; articleSlug?: string }[];
  seoTitle: string;
  seoDescription: string;
}
