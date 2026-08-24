import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/data/articles";
import { logoAssets } from "@/config/brand";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = articles.filter((article) => article.featured);
  const latest = [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    )
    .slice(0, 6);

  const industry = articles
    .filter((article) => article.category === "industry")
    .slice(0, 3);

  const business = articles
    .filter((article) => article.category === "business")
    .slice(0, 3);

  const entrepreneurs = articles
    .filter((article) => article.category === "entrepreneurs")
    .slice(0, 3);

  const hero = featured[0] ?? latest[0];
  const secondaryHero = featured.slice(1, 3);

  return (
    <main className="min-h-screen bg-[#fcfbf8] text-[#171717]">
      {/* TOP BAR */}
      <div className="border-b border-black/10 bg-[#171717] text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-2 text-[11px] font-medium uppercase tracking-[0.16em] sm:px-8">
          <span>Faridabad Business Journal</span>
          <span className="hidden sm:inline">
            The Business & Entrepreneurship Platform of Faridabad
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header className="border-b border-black/10 bg-[#fcfbf8]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="flex min-h-[92px] items-center justify-between gap-6">
            <Link to="/" className="group flex shrink-0 items-center">
  <img
    src={logoAssets.wideLight}
    alt="Faridabad Business"
    className="h-auto w-[190px] object-contain sm:w-[225px]"
  />
</Link>

            <nav className="hidden items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.12em] lg:flex">
              <Link
                to="/"
                className="transition-colors hover:text-[#b51f2b]"
              >
                Home
              </Link>
              <Link
                to="/latest"
                className="transition-colors hover:text-[#b51f2b]"
              >
                Latest
              </Link>
              <Link
                to="/business"
                className="transition-colors hover:text-[#b51f2b]"
              >
                Business
              </Link>
              <Link
                to="/entrepreneurs"
                className="transition-colors hover:text-[#b51f2b]"
              >
                Entrepreneurs
              </Link>
              <Link
                to="/industry"
                className="transition-colors hover:text-[#b51f2b]"
              >
                Industry
              </Link>
              <Link
                to="/startups"
                className="transition-colors hover:text-[#b51f2b]"
              >
                Startups
              </Link>
              <Link
                to="/magazine"
                className="transition-colors hover:text-[#b51f2b]"
              >
                Magazine
              </Link>
            </nav>

            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <Link
                to="/search"
                className="border border-black/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                Search
              </Link>
              <Link
                to="/get-featured"
                className="bg-[#b51f2b] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#171717]"
              >
                Get Featured
              </Link>
            </div>

            <button
              type="button"
              className="border border-black/15 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] lg:hidden"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>

          {/* MOBILE NAV */}
          <nav className="flex gap-5 overflow-x-auto border-t border-black/10 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] lg:hidden">
            <Link to="/latest" className="whitespace-nowrap">
              Latest
            </Link>
            <Link to="/business" className="whitespace-nowrap">
              Business
            </Link>
            <Link to="/entrepreneurs" className="whitespace-nowrap">
              Entrepreneurs
            </Link>
            <Link to="/industry" className="whitespace-nowrap">
              Industry
            </Link>
            <Link to="/startups" className="whitespace-nowrap">
              Startups
            </Link>
            <Link to="/magazine" className="whitespace-nowrap">
              Magazine
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-8 sm:px-8 sm:pt-12">
        <div className="mb-6 flex items-end justify-between border-b border-black pb-3">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#b51f2b]">
              The Faridabad Business Journal
            </p>
            <h1 className="font-serif text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Business. Industry. People.
            </h1>
          </div>

          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-black/50 sm:block">
            Editorial Desk
          </span>
        </div>

        {hero && (
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.8fr)]">
            <Link
              to="/articles/$slug"
              params={{ slug: hero.slug }}
              className="group block"
            >
              <article>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e8e4dc]">
                  {hero.featuredImage?.url ? (
                    <img
                      src={hero.featuredImage.url}
                      alt={hero.featuredImage.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-end bg-gradient-to-br from-[#262626] via-[#4a4742] to-[#b51f2b] p-6 sm:p-10">
                      <span className="max-w-xl font-serif text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                        {hero.title}
                      </span>
                    </div>
                  )}

                  <div className="absolute left-4 top-4 bg-[#b51f2b] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                    Featured
                  </div>
                </div>

                <div className="pt-5">
                  <div className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em]">
                    <span className="text-[#b51f2b]">{hero.category}</span>
                    <span className="h-px w-5 bg-black/20" />
                    <span className="text-black/45">
                      {hero.readingMinutes} min read
                    </span>
                  </div>

                  <h2 className="max-w-4xl font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.035em] transition-colors group-hover:text-[#b51f2b] sm:text-4xl lg:text-5xl">
                    {hero.title}
                  </h2>

                  <p className="mt-4 max-w-3xl text-[15px] leading-7 text-black/65 sm:text-base">
                    {hero.excerpt}
                  </p>
                </div>
              </article>
            </Link>

            <div className="divide-y divide-black/10 border-t border-black/15 lg:border-t-0">
              {secondaryHero.map((article) => (
                <Link
                  key={article.id}
                  to="/articles/$slug"
                  params={{ slug: article.slug }}
                  className="group block py-6 first:pt-0 lg:py-7"
                >
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b51f2b]">
                    {article.category}
                  </div>

                  <h3 className="font-serif text-2xl font-semibold leading-tight tracking-[-0.025em] group-hover:text-[#b51f2b]">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/60">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-black/45">
                    {article.publishedAt}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* LATEST */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
          <SectionHeading title="Latest" href="/latest" />

          <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
        <SectionHeading title="Industry" href="/industry" />

        <div className="grid gap-7 md:grid-cols-3">
          {industry.map((article) => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>
      </section>

      {/* BUSINESS */}
      <section className="border-y border-black/10 bg-[#f1eee8]">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
          <SectionHeading title="Business" href="/business" />

          <div className="grid gap-7 md:grid-cols-3">
            {business.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ENTREPRENEURS */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
        <SectionHeading title="Entrepreneurs" href="/entrepreneurs" />

        <div className="grid gap-7 md:grid-cols-3">
          {entrepreneurs.map((article) => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>
      </section>

      {/* JOURNAL PROMO */}
      <section className="bg-[#171717] text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8a3a7]">
                The Publication
              </p>

              <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                FARIDABAD
                <br />
                BUSINESS JOURNAL
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                Reporting, business stories and entrepreneurial perspectives
                from Faridabad’s commercial and industrial ecosystem.
              </p>
            </div>

            <Link
              to="/magazine"
              className="inline-flex border border-white/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:border-white hover:bg-white hover:text-[#171717]"
            >
              Explore Magazine
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS PROFILE CTA */}
      <section className="border-b border-black/10 bg-[#fcfbf8]">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
          <div className="flex flex-col justify-between gap-7 border-t-2 border-black pt-6 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b51f2b]">
                Business Profiles
              </p>

              <h2 className="max-w-2xl font-serif text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                A professional digital presence for Faridabad businesses.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
                Explore businesses, industries and the people building
                Faridabad’s commercial ecosystem.
              </p>
            </div>

            <Link
              to="/businesses"
              className="shrink-0 bg-[#b51f2b] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#171717]"
            >
              Explore Businesses
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <img
  src={logoAssets.wideDark}
  alt="Faridabad Business"
  className="h-auto w-[210px] object-contain"
 />

              <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                The Business & Entrepreneurship Platform of Faridabad.
              </p>
            </div>

            <div>
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Explore
              </div>

              <div className="flex flex-col gap-3 text-sm text-white/70">
                <Link to="/latest" className="hover:text-white">
                  Latest
                </Link>
                <Link to="/business" className="hover:text-white">
                  Business
                </Link>
                <Link to="/industry" className="hover:text-white">
                  Industry
                </Link>
                <Link to="/entrepreneurs" className="hover:text-white">
                  Entrepreneurs
                </Link>
                <Link to="/magazine" className="hover:text-white">
                  Magazine
                </Link>
              </div>
            </div>

            <div>
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Publication
              </div>

              <div className="flex flex-col gap-3 text-sm text-white/70">
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
                <Link to="/advertise" className="hover:text-white">
                  Advertise
                </Link>
                <Link to="/get-featured" className="hover:text-white">
                  Get Featured
                </Link>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
                <Link to="/editorial-policy" className="hover:text-white">
                  Editorial Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.12em] text-white/35">
            © 2026 Faridabad Business Journal
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="mb-7 flex items-end justify-between border-b border-black pb-3">
      <h2 className="font-serif text-3xl font-semibold tracking-[-0.03em]">
        {title}
      </h2>

      <Link
        to={href}
        className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#b51f2b] hover:text-black"
      >
        View all →
      </Link>
    </div>
  );
}

function ArticleCard({
  article,
  featured = false,
}: {
  article: (typeof articles)[number];
  featured?: boolean;
}) {
  return (
    <Link
      to="/articles/$slug"
      params={{ slug: article.slug }}
      className="group block"
    >
      <article>
        <div
          className={[
            "relative overflow-hidden bg-[#e8e4dc]",
            featured ? "aspect-[4/3]" : "aspect-[16/10]",
          ].join(" ")}
        >
          {article.featuredImage?.url ? (
            <img
              src={article.featuredImage.url}
              alt={article.featuredImage.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
            />
          ) : (
            <div className="flex h-full items-end bg-gradient-to-br from-[#343230] to-[#b51f2b] p-5">
              <span className="font-serif text-xl font-semibold leading-tight text-white">
                {article.title}
              </span>
            </div>
          )}
        </div>

        <div className="pt-4">
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#b51f2b]">
            {article.category}
          </div>

          <h3 className="font-serif text-xl font-semibold leading-[1.15] tracking-[-0.02em] group-hover:text-[#b51f2b]">
            {article.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/55">
            {article.excerpt}
          </p>

          <div className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-black/40">
            {article.publishedAt}
          </div>
        </div>
      </article>
    </Link>
  );
}
