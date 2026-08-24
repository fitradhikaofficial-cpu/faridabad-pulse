/**
 * Central brand configuration.
 *
 * LOGO ASSET SLOTS
 * ----------------
 * Drop the supplied Faridabad Business logo files into `public/brand/` using the
 * filenames below (or change the paths here). Until a file exists at the path,
 * the <Logo /> component renders the typographic lockup fallback.
 *
 * Do not recreate, recolour, stretch or otherwise modify the supplied logos.
 */
export const brand = {
  name: "Faridabad Business",
  nameUpper: "FARIDABAD BUSINESS",
  publication: "Faridabad Business Journal",
  tagline: "The Business & Entrepreneurship Platform of Faridabad",
  primaryDomain: "FaridabadBusiness.in",
  secondaryDomain: "FaridabadBusinessJournal.in",
  editorialDesk: "Faridabad Business Editorial Desk",
  email: "editor@faridabadbusiness.in",
  advertisingEmail: "advertise@faridabadbusiness.in",
  city: "Faridabad, Haryana",
} as const;

/**
 * Set a value to the asset path once the supplied file is added.
 * Example: wideLight: "/brand/fb-logo-wide-light.svg"
 */
export const logoAssets: {
  wideLight: string | null;
  wideDark: string | null;
  monogram: string | null;
  monogramSquare: string | null;
} = {
  wideLight: null,
  wideDark: null,
  monogram: null,
  monogramSquare: null,
};

export const socialLinks = [
  { label: "LinkedIn", url: "#" },
  { label: "Instagram", url: "#" },
  { label: "X", url: "#" },
  { label: "YouTube", url: "#" },
];
