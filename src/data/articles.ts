import type { Article, CategorySlug } from "@/types/content";

const DESK = "Faridabad Business Editorial Desk";

export const articles: Article[] = [
  {
    id: "a1",
    title: "How Faridabad Built Its Position as an Engineering & Manufacturing Hub",
    slug: "how-faridabad-built-its-position-as-an-engineering-manufacturing-hub",
    category: "industry",
    tags: ["Manufacturing", "Engineering", "Automotive"],
    excerpt:
      "Faridabad's industrial character was shaped over decades by engineering workshops, component suppliers and factories clustered along its arterial industrial belts.",
    deck: "The city's industrial base grew around engineering, metalworking and component manufacturing — an ecosystem that continues to define how business is done here.",
    featuredImage: {
      alt: "Industrial engineering workshop floor in a Faridabad manufacturing unit",
      caption: "Faridabad's industrial belts remain dominated by engineering and component units.",
    },
    author: DESK,
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-23",
    readingMinutes: 7,
    featured: true,
    contentType: "editorial",
    seoTitle:
      "How Faridabad Built Its Position as an Engineering & Manufacturing Hub",
    seoDescription:
      "An editorial look at how engineering workshops, component suppliers and industrial estates shaped Faridabad's manufacturing identity.",
    content: [
      {
        type: "paragraph",
        text: "Faridabad's economy is best understood through its factory floors. Long before the city became part of the wider National Capital Region's growth story, its identity was formed by engineering workshops, metal fabrication units and component suppliers operating out of planned industrial sectors.",
      },
      {
        type: "paragraph",
        text: "That base has proved durable. Where several NCR districts pivoted heavily towards services and real estate, Faridabad retained a working manufacturing core — one built on tooling, fabrication, machining and assembly work that feeds larger buyers both inside and outside Haryana.",
      },
      { type: "heading", level: 2, text: "An economy organised around clusters" },
      {
        type: "paragraph",
        text: "Industrial activity in Faridabad is concentrated rather than scattered. Sector-based industrial areas group units by scale and function, which allows suppliers, job-work shops and finishing units to operate within short distances of one another. For a component manufacturer, proximity is not a convenience — it is a cost structure.",
      },
      {
        type: "list",
        items: [
          "Engineering and machining units supplying industrial and automotive buyers",
          "Metal fabrication, pressing and sheet-metal work",
          "Electrical and electronics assembly",
          "Plastics, polymers and packaging support industries",
          "Logistics and warehousing serving the industrial belt",
        ],
      },
      { type: "heading", level: 2, text: "Why the MSME layer matters" },
      {
        type: "paragraph",
        text: "The visible names in any industrial city are the large plants. The operating reality is the layer beneath them: micro, small and medium enterprises that handle specialised processes, short-run production and supply continuity. In Faridabad, this layer is not peripheral to manufacturing — it is manufacturing.",
      },
      {
        type: "quote",
        text: "An industrial city is only as strong as the small units that keep its supply chains moving.",
      },
      {
        type: "factbox",
        title: "What defines Faridabad's industrial profile",
        items: [
          "A concentration of engineering and component manufacturing units",
          "Planned, sector-wise industrial areas rather than dispersed activity",
          "A deep MSME supplier base serving larger manufacturers",
          "Road and rail connectivity to Delhi and the wider NCR industrial corridor",
        ],
      },
      { type: "heading", level: 2, text: "Infrastructure as an industrial input" },
      {
        type: "paragraph",
        text: "Connectivity has consistently shaped where industrial investment lands in the district. Expressway access, metro connectivity and improved arterial roads change the economics of moving goods and people, and southern Faridabad in particular has seen industrial and commercial interest follow infrastructure work.",
      },
      {
        type: "paragraph",
        text: "The next phase of the city's industrial story will be decided by the same variables that built it: reliable power and logistics, availability of serviced industrial land, access to skilled technical labour, and the ability of small manufacturers to modernise their processes.",
      },
      {
        type: "sources",
        items: [
          "Faridabad Business editorial reporting on the district's industrial areas",
          "Publicly available information on Haryana industrial infrastructure",
        ],
      },
    ],
  },
  {
    id: "a2",
    title: "Inside Faridabad's Manufacturing Ecosystem",
    slug: "inside-faridabads-manufacturing-ecosystem",
    category: "industry",
    tags: ["Manufacturing", "Engineering", "Steel & Metals"],
    excerpt:
      "From job-work shops to organised production lines, a look at how manufacturing work is actually distributed across the district.",
    deck: "Production in Faridabad is layered — and understanding those layers explains how orders, pricing and capacity move through the city.",
    featuredImage: {
      alt: "Machinery inside a Faridabad production unit",
    },
    author: DESK,
    publishedAt: "2026-08-19",
    readingMinutes: 6,
    featured: true,
    contentType: "editorial",
    seoTitle: "Inside Faridabad's Manufacturing Ecosystem",
    seoDescription:
      "How manufacturing capacity, job work and supplier relationships are distributed across Faridabad's industrial sectors.",
    content: [
      {
        type: "paragraph",
        text: "Manufacturing in Faridabad rarely happens inside a single boundary wall. A finished component may pass through a machining shop, a heat-treatment unit, a plating facility and a finishing workshop — each an independent business, often within a few kilometres of the next.",
      },
      { type: "heading", level: 2, text: "The job-work layer" },
      {
        type: "paragraph",
        text: "Job work — processing carried out on behalf of another manufacturer — remains a defining feature of the city's industrial economy. It allows small units to stay specialised and large units to stay flexible without carrying every process in-house.",
      },
      {
        type: "list",
        items: [
          "Machining, turning and CNC operations",
          "Sheet metal pressing and fabrication",
          "Surface treatment and finishing",
          "Assembly and sub-assembly work",
        ],
      },
      { type: "heading", level: 2, text: "Capacity, orders and continuity" },
      {
        type: "paragraph",
        text: "For most units, the operating challenge is continuity rather than capability. Order flow, working capital cycles and payment timelines determine whether a workshop can invest in newer machines or additional shifts.",
      },
      {
        type: "quote",
        text: "Capability is rarely the constraint in an industrial city. Continuity of orders usually is.",
      },
      {
        type: "paragraph",
        text: "Faridabad Business will continue reporting on how these supply relationships are changing as buyers consolidate vendors and compliance expectations rise.",
      },
    ],
  },
  {
    id: "a3",
    title: "The MSMEs Powering Faridabad's Industrial Economy",
    slug: "the-msmes-powering-faridabads-industrial-economy",
    category: "industry",
    tags: ["Manufacturing", "Professional Services"],
    excerpt:
      "Small and medium enterprises carry a disproportionate share of the district's production, employment and supplier depth.",
    deck: "The MSME base is the working engine of Faridabad's industrial economy — and the segment most exposed to cost and credit pressure.",
    featuredImage: { alt: "Small manufacturing unit workshop in Faridabad" },
    author: DESK,
    publishedAt: "2026-08-17",
    readingMinutes: 5,
    contentType: "editorial",
    seoTitle: "The MSMEs Powering Faridabad's Industrial Economy",
    seoDescription:
      "Why micro, small and medium enterprises remain central to Faridabad's manufacturing output and employment.",
    content: [
      {
        type: "paragraph",
        text: "Every industrial city has a headline sector. Faridabad has a structure. The district's production capacity is distributed across a large number of small and medium units rather than concentrated in a handful of plants.",
      },
      { type: "heading", level: 2, text: "Where MSMEs sit in the chain" },
      {
        type: "paragraph",
        text: "Most MSME units operate as tier-two and tier-three suppliers. They rarely carry consumer-facing brands, but they determine delivery timelines and quality consistency for buyers several steps up the chain.",
      },
      {
        type: "factbox",
        title: "Common pressure points reported by small manufacturers",
        items: [
          "Working capital and delayed payment cycles",
          "Cost of upgrading to newer machinery",
          "Availability of trained technical staff",
          "Compliance and documentation requirements",
        ],
      },
      {
        type: "paragraph",
        text: "Where individual company data is required, Faridabad Business verifies details directly with the business before publication.",
      },
    ],
  },
  {
    id: "a4",
    title: "Faridabad's Automotive and Engineering Ecosystem",
    slug: "faridabads-automotive-and-engineering-ecosystem",
    category: "industry",
    tags: ["Automotive", "Engineering"],
    excerpt:
      "Auto components and engineering work remain among the most visible industrial activities in the district.",
    deck: "Component supply, tooling and precision engineering keep Faridabad connected to national automotive demand.",
    featuredImage: { alt: "Automotive components on a production bench" },
    author: DESK,
    publishedAt: "2026-08-14",
    readingMinutes: 6,
    contentType: "editorial",
    seoTitle: "Faridabad's Automotive and Engineering Ecosystem",
    seoDescription:
      "How auto-component manufacturing and precision engineering shape industrial activity in Faridabad.",
    content: [
      {
        type: "paragraph",
        text: "Automotive demand has shaped industrial cities across northern India, and Faridabad is closely tied to that cycle through component supply, tooling and engineering services.",
      },
      { type: "heading", level: 2, text: "A supplier city" },
      {
        type: "paragraph",
        text: "The district's strength lies less in vehicle assembly and more in the parts, processes and tooling that make assembly possible elsewhere. That positioning brings resilience, but also exposure to buyer consolidation.",
      },
      {
        type: "list",
        items: [
          "Precision machined components",
          "Press tools, dies and fixtures",
          "Fabricated assemblies",
          "Aftermarket and replacement parts",
        ],
      },
      {
        type: "paragraph",
        text: "As vehicle technology shifts, component suppliers face a familiar question: which existing capabilities transfer, and which require reinvestment.",
      },
    ],
  },
  {
    id: "a5",
    title: "Inside Faridabad's Major Industrial Clusters",
    slug: "inside-faridabads-major-industrial-clusters",
    category: "industry",
    tags: ["Manufacturing", "Logistics"],
    excerpt:
      "Sector-wise industrial areas give the district a clustered geography that shapes cost, logistics and hiring.",
    deck: "Where a unit sits in Faridabad still affects who it can supply, how fast it can deliver, and who it can hire.",
    featuredImage: { alt: "Aerial view of an industrial area in Faridabad" },
    author: DESK,
    publishedAt: "2026-08-11",
    readingMinutes: 5,
    contentType: "editorial",
    seoTitle: "Inside Faridabad's Major Industrial Clusters",
    seoDescription:
      "A guide to how Faridabad's industrial areas are organised and why clustering matters for manufacturers.",
    content: [
      {
        type: "paragraph",
        text: "Faridabad's industrial map is organised into sectors and industrial areas that group units by scale and activity. For businesses, that geography is operational: it determines transport time, vendor access and labour availability.",
      },
      { type: "heading", level: 2, text: "Clustering as a cost advantage" },
      {
        type: "paragraph",
        text: "Short distances between suppliers reduce inventory buffers and rework turnaround. It is one of the least discussed reasons manufacturers stay in older industrial areas even when newer land is available elsewhere.",
      },
      {
        type: "factbox",
        title: "What clustering supports",
        items: [
          "Faster vendor turnaround for job work",
          "Shared access to skilled technical labour",
          "Lower inbound and outbound logistics cost",
          "Denser informal knowledge transfer between units",
        ],
      },
    ],
  },
  {
    id: "a6",
    title: "How Industrial Infrastructure Is Shaping South Faridabad",
    slug: "how-industrial-infrastructure-is-shaping-south-faridabad",
    category: "business",
    tags: ["Real Estate", "Logistics", "Manufacturing"],
    excerpt:
      "Road, expressway and connectivity work continues to influence where commercial and industrial activity expands in the district.",
    deck: "Infrastructure decisions are business decisions — and southern Faridabad is where that is most visible right now.",
    featuredImage: { alt: "Highway infrastructure near Faridabad" },
    author: DESK,
    publishedAt: "2026-08-09",
    readingMinutes: 6,
    featured: true,
    contentType: "editorial",
    seoTitle: "How Industrial Infrastructure Is Shaping South Faridabad",
    seoDescription:
      "Connectivity and infrastructure work continue to influence commercial and industrial expansion in south Faridabad.",
    content: [
      {
        type: "paragraph",
        text: "Infrastructure rarely creates demand on its own, but it reliably redirects it. In Faridabad, improved expressway and arterial connectivity has made the southern stretch of the district a more practical location for logistics, warehousing and newer industrial activity.",
      },
      { type: "heading", level: 2, text: "What businesses actually respond to" },
      {
        type: "list",
        items: [
          "Predictable travel time for goods movement",
          "Access to serviced industrial and commercial land",
          "Availability of staff transport routes",
          "Proximity to buyers across the NCR",
        ],
      },
      {
        type: "paragraph",
        text: "The commercial effect appears gradually: first logistics operators, then supporting services, then longer-term industrial and commercial investment.",
      },
    ],
  },
  {
    id: "a7",
    title: "The Evolution of Faridabad's Business Landscape",
    slug: "the-evolution-of-faridabads-business-landscape",
    category: "business",
    tags: ["Retail", "Professional Services", "Real Estate"],
    excerpt:
      "Beyond the factory floor, the district has developed a service, retail and professional economy of its own.",
    deck: "Faridabad's commercial base has widened — retail, healthcare, education and professional services now sit alongside manufacturing.",
    featuredImage: { alt: "Commercial district street in Faridabad" },
    author: DESK,
    publishedAt: "2026-08-06",
    readingMinutes: 5,
    contentType: "editorial",
    seoTitle: "The Evolution of Faridabad's Business Landscape",
    seoDescription:
      "How retail, healthcare, education and professional services have widened Faridabad's commercial base.",
    content: [
      {
        type: "paragraph",
        text: "An industrial identity can obscure everything else a city does. Faridabad's commercial economy today includes healthcare providers, education institutions, professional service firms, retail operators and hospitality businesses serving a large resident population.",
      },
      { type: "heading", level: 2, text: "A two-track economy" },
      {
        type: "paragraph",
        text: "Industry and services are not separate stories here. Professional services grow alongside manufacturing: accounting, compliance, logistics, recruitment, IT support and marketing all serve industrial clients first.",
      },
      {
        type: "quote",
        text: "Service businesses in an industrial city usually grow by serving industry before they serve consumers.",
      },
    ],
  },
  {
    id: "a8",
    title: "Faridabad's Emerging Business and Startup Ecosystem",
    slug: "faridabads-emerging-business-and-startup-ecosystem",
    category: "startups",
    tags: ["Technology", "Professional Services"],
    excerpt:
      "A younger cohort of founders is building in Faridabad rather than relocating — in technology, services and D2C operations.",
    deck: "New ventures in the district are typically lean, service-led and closely tied to existing business networks.",
    featuredImage: { alt: "Workspace used by a small startup team in Faridabad" },
    author: DESK,
    publishedAt: "2026-08-04",
    readingMinutes: 5,
    contentType: "editorial",
    seoTitle: "Faridabad's Emerging Business and Startup Ecosystem",
    seoDescription:
      "How a younger cohort of founders is building technology, service and D2C ventures from Faridabad.",
    content: [
      {
        type: "paragraph",
        text: "Startup activity in Faridabad looks different from the venture-funded picture usually associated with the NCR. Most new ventures here start as service businesses, bootstrapped and built around existing client relationships.",
      },
      { type: "heading", level: 2, text: "Patterns worth watching" },
      {
        type: "list",
        items: [
          "Digital and marketing services built for local businesses",
          "Software and automation aimed at manufacturing workflows",
          "D2C and retail operations run from the district",
          "Second-generation founders modernising family businesses",
        ],
      },
      {
        type: "paragraph",
        text: "The constraint most founders describe is not ambition but visibility — being known outside the city they operate in.",
      },
    ],
  },
  {
    id: "a9",
    title:
      "Sumit Attri: Building a Digital Services Business From Faridabad",
    slug: "sumit-attri-building-a-digital-services-business-from-faridabad",
    category: "entrepreneurs",
    tags: ["Technology", "Professional Services"],
    excerpt:
      "An entrepreneur feature on building a digital and marketing services practice while staying based in Faridabad.",
    deck: "One of several entrepreneur features tracking how founders build service businesses from the district.",
    featuredImage: { alt: "Portrait slot for entrepreneur Sumit Attri" },
    author: DESK,
    publishedAt: "2026-08-02",
    readingMinutes: 4,
    contentType: "editorial",
    seoTitle: "Sumit Attri: Building a Digital Services Business From Faridabad",
    seoDescription:
      "An entrepreneur feature on building a digital and marketing services business based in Faridabad.",
    content: [
      {
        type: "paragraph",
        text: "Faridabad's entrepreneurial base is not limited to manufacturing. A growing share of the district's newer businesses sit in services — and digital services in particular, where the cost of starting is low and the constraint is client trust.",
      },
      {
        type: "paragraph",
        text: "Sumit Attri is one of the entrepreneurs working in this space. He runs a digital and marketing services practice based in Faridabad, working with businesses on their online presence, branding and digital visibility.",
      },
      { type: "heading", level: 2, text: "Building for local businesses" },
      {
        type: "paragraph",
        text: "Service businesses of this kind typically grow through referral rather than advertising. Work for one business in an industrial or commercial network tends to lead to the next, which makes delivery consistency the main growth lever.",
      },
      {
        type: "quote",
        text: "In a city that runs on referrals, the quality of the last project decides the next one.",
      },
      { type: "heading", level: 2, text: "Why the location matters" },
      {
        type: "paragraph",
        text: "Founders in service businesses often relocate to larger metros for client access. Choosing to build from Faridabad reflects a different bet: that local businesses need the same capabilities, and prefer working with people who understand their market.",
      },
      {
        type: "paragraph",
        text: "This feature is part of the Entrepreneur Spotlight series. Faridabad Business publishes these profiles as independent editorial features and welcomes suggestions of founders to cover.",
      },
    ],
  },
  {
    id: "a10",
    title: "What Faridabad's Business Community Wants From Civic Infrastructure",
    slug: "what-faridabads-business-community-wants-from-civic-infrastructure",
    category: "business",
    tags: ["Real Estate", "Logistics", "Professional Services"],
    excerpt:
      "Power reliability, road quality, drainage and industrial services remain recurring operational concerns for businesses in the district.",
    deck: "Civic infrastructure is a running cost for businesses, not a background issue.",
    featuredImage: { alt: "Industrial area road and infrastructure in Faridabad" },
    author: DESK,
    publishedAt: "2026-07-31",
    readingMinutes: 4,
    contentType: "editorial",
    seoTitle:
      "What Faridabad's Business Community Wants From Civic Infrastructure",
    seoDescription:
      "Power, roads, drainage and industrial services remain the operational priorities raised by Faridabad businesses.",
    content: [
      {
        type: "paragraph",
        text: "Ask operators in any industrial area what limits their productivity and the answers are consistently practical: power reliability, road condition, drainage during monsoon, and the state of shared industrial services.",
      },
      {
        type: "factbox",
        title: "Recurring operational priorities",
        items: [
          "Uninterrupted industrial power supply",
          "Road surface quality on internal industrial roads",
          "Monsoon drainage in industrial sectors",
          "Waste handling and shared civic services",
        ],
      },
      {
        type: "paragraph",
        text: "These are not abstract civic complaints. Each translates directly into downtime, transport cost or equipment damage.",
      },
    ],
  },
  {
    id: "a11",
    title: "Second-Generation Owners Are Rewriting Family Businesses",
    slug: "second-generation-owners-are-rewriting-family-businesses",
    category: "entrepreneurs",
    tags: ["Manufacturing", "Technology"],
    excerpt:
      "Succession in Faridabad's business families increasingly comes with process change, digitisation and new market channels.",
    deck: "The handover generation is changing how established units sell, hire and record their work.",
    featuredImage: { alt: "Younger business owner at a manufacturing unit office" },
    author: DESK,
    publishedAt: "2026-07-28",
    readingMinutes: 5,
    contentType: "editorial",
    seoTitle: "Second-Generation Owners Are Rewriting Family Businesses",
    seoDescription:
      "How succession in Faridabad's family-run businesses is driving digitisation, process change and new market channels.",
    content: [
      {
        type: "paragraph",
        text: "Family ownership is the norm across much of Faridabad's industrial and commercial base. What is changing is how the next generation runs those businesses once responsibility transfers.",
      },
      { type: "heading", level: 2, text: "Common changes after a handover" },
      {
        type: "list",
        ordered: true,
        items: [
          "Digitised order, inventory and accounting records",
          "Formal quality documentation for larger buyers",
          "Direct online channels alongside traditional distribution",
          "Structured hiring rather than referral-only recruitment",
        ],
      },
      {
        type: "paragraph",
        text: "The friction is rarely technological. It is usually about persuading a business that works to change how it works.",
      },
    ],
  },
  {
    id: "a12",
    title: "The People Who Keep Faridabad's Factories Running",
    slug: "the-people-who-keep-faridabads-factories-running",
    category: "people",
    tags: ["Manufacturing", "Education"],
    excerpt:
      "Supervisors, machinists, maintenance staff and technical trainers form the labour spine of the district's industry.",
    deck: "Skilled technical labour remains the industrial economy's most quietly contested resource.",
    featuredImage: { alt: "Machine operator working in a Faridabad factory" },
    author: DESK,
    publishedAt: "2026-07-25",
    readingMinutes: 5,
    contentType: "editorial",
    seoTitle: "The People Who Keep Faridabad's Factories Running",
    seoDescription:
      "Editorial coverage of the supervisors, machinists and technical workers behind Faridabad's manufacturing output.",
    content: [
      {
        type: "paragraph",
        text: "Industrial coverage tends to stop at the owner's desk. The operating knowledge of a manufacturing unit usually sits elsewhere — with supervisors and machine operators who have run the same processes for years.",
      },
      { type: "heading", level: 2, text: "Training and retention" },
      {
        type: "paragraph",
        text: "Retention of skilled operators is a recurring concern for small units, particularly where competing employers can offer marginally better wages within the same industrial belt.",
      },
      {
        type: "paragraph",
        text: "Faridabad Business covers this workforce as part of its People section, with editorial storytelling rather than generic biography.",
      },
    ],
  },
  {
    id: "a13",
    title: "Faridabad's Retail and Commercial Corridors Are Consolidating",
    slug: "faridabads-retail-and-commercial-corridors-are-consolidating",
    category: "business",
    tags: ["Retail", "Real Estate", "Food & Beverage"],
    excerpt:
      "Organised retail, food and service brands continue to concentrate along a handful of established commercial stretches.",
    deck: "Where the city shops has become as structured as where it manufactures.",
    featuredImage: { alt: "Retail commercial street in Faridabad" },
    author: DESK,
    publishedAt: "2026-07-22",
    readingMinutes: 4,
    contentType: "editorial",
    seoTitle: "Faridabad's Retail and Commercial Corridors Are Consolidating",
    seoDescription:
      "Organised retail and food brands continue to concentrate along Faridabad's established commercial corridors.",
    content: [
      {
        type: "paragraph",
        text: "Retail activity in the district has steadily organised itself around a limited number of high-visibility corridors, with independent retailers and organised brands competing for the same footfall.",
      },
      {
        type: "list",
        items: [
          "Concentration of organised retail along main commercial stretches",
          "Food and beverage formats expanding into residential sectors",
          "Independent retailers adapting to delivery platforms",
        ],
      },
    ],
  },
  {
    id: "a14",
    title: "Why Business Visibility Is a Growth Problem in Faridabad",
    slug: "why-business-visibility-is-a-growth-problem-in-faridabad",
    category: "startups",
    tags: ["Technology", "Professional Services", "Retail"],
    excerpt:
      "Capable businesses in the district are often invisible outside their immediate network — an editorial and commercial gap.",
    deck: "A well-run unit with no public record is difficult to find, verify or buy from.",
    featuredImage: { alt: "Business owner reviewing a company website" },
    author: DESK,
    publishedAt: "2026-07-18",
    readingMinutes: 4,
    contentType: "editorial",
    seoTitle: "Why Business Visibility Is a Growth Problem in Faridabad",
    seoDescription:
      "Many capable Faridabad businesses remain invisible outside their networks. Why that limits growth.",
    content: [
      {
        type: "paragraph",
        text: "Buyers increasingly check before they contact. A business with no verifiable public presence is harder to shortlist, regardless of how well it performs once engaged.",
      },
      { type: "heading", level: 2, text: "The practical gap" },
      {
        type: "list",
        items: [
          "No structured public description of what the business does",
          "No accessible record of products, services or capabilities",
          "Contact details scattered across third-party listings",
        ],
      },
      {
        type: "paragraph",
        text: "Faridabad Business maintains Business Profiles as a structured, factual record of what a business does. Profiles are clearly separated from editorial coverage and are not editorial endorsements.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const sortedArticles = [...articles].sort(
  (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
);

export const articlesByCategory = (category: CategorySlug) =>
  sortedArticles.filter((a) => a.category === category);

export const featuredArticles = sortedArticles.filter((a) => a.featured);

export const getArticles = (slugs: string[]) =>
  slugs.map((s) => getArticle(s)).filter((a): a is Article => Boolean(a));

export const relatedArticles = (article: Article, limit = 3) =>
  sortedArticles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      const score = (x: Article) =>
        (x.category === article.category ? 2 : 0) +
        x.tags.filter((t) => article.tags.includes(t)).length;
      return score(b) - score(a);
    })
    .slice(0, limit);
