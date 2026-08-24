import type { Category, CategorySlug } from "@/types/content";

export const categories: Category[] = [
  {
    slug: "business",
    name: "Business",
    description:
      "Commerce, trade, markets and company developments across Faridabad's business landscape.",
    seoTitle: "Business News from Faridabad | Faridabad Business",
    seoDescription:
      "Coverage of companies, commerce, trade and market developments across Faridabad's business ecosystem.",
  },
  {
    slug: "entrepreneurs",
    name: "Entrepreneurs",
    description:
      "Founders and business builders working in and around Faridabad — how they started, what they build and how they grow.",
    seoTitle: "Entrepreneurs of Faridabad | Faridabad Business",
    seoDescription:
      "Founder stories, interviews and entrepreneurship coverage from Faridabad's business ecosystem.",
  },
  {
    slug: "industry",
    name: "Industry",
    description:
      "Manufacturing, engineering, auto components, MSMEs and the industrial infrastructure that underpins the city's economy.",
    seoTitle: "Faridabad Industry & Manufacturing | Faridabad Business",
    seoDescription:
      "Reporting on Faridabad's manufacturing ecosystem, industrial clusters, engineering units and MSMEs.",
  },
  {
    slug: "startups",
    name: "Startups",
    description:
      "Early-stage companies, new ventures and the emerging startup activity within the Faridabad and wider NCR region.",
    seoTitle: "Faridabad Startups & New Ventures | Faridabad Business",
    seoDescription:
      "Coverage of startups, new ventures and the emerging entrepreneurial base in Faridabad.",
  },
  {
    slug: "people",
    name: "People",
    description:
      "The professionals, operators, industry association members and business leaders shaping how Faridabad works.",
    seoTitle: "People in Faridabad Business | Faridabad Business",
    seoDescription:
      "Editorial storytelling on the people behind Faridabad's businesses, factories and institutions.",
  },
];

export const categoryMap: Record<CategorySlug, Category> = categories.reduce(
  (acc, c) => ({ ...acc, [c.slug]: c }),
  {} as Record<CategorySlug, Category>,
);

export const industryTags = [
  "Manufacturing",
  "Automotive",
  "Engineering",
  "Steel & Metals",
  "Electrical & Electronics",
  "Pharmaceuticals",
  "Plastics & Polymers",
  "Education",
  "Healthcare",
  "Real Estate",
  "Technology",
  "Retail",
  "Hospitality",
  "Professional Services",
  "Food & Beverage",
  "Logistics",
  "Other",
];
