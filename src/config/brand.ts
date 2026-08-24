/**
 * Central brand configuration.
 *
 * Supplied logo assets are stored in:
 * public/brand/
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
 * Official supplied Faridabad Business logo assets.
 *
 * All paths are relative to the public/ directory.
 */
export const logoAssets = {
  // For light/paper backgrounds such as the main website header.
  wideLight:
    "/brand/faridabad-business-full-logo-white-background.png",

  // For dark backgrounds such as the footer.
  wideDark:
    "/brand/faridabad-business-full-logo-black-background-white-red.png",

  // Compact logo for smaller layouts.
  monogram:
    "/brand/faridabad-business-monogram-black-circle.png",

  // Square compact mark.
  monogramSquare:
    "/brand/faridabad-business-monogram-red-square.png",
} as const;

export const socialLinks = [
  { label: "LinkedIn", url: "#" },
  { label: "Instagram", url: "#" },
  { label: "X", url: "#" },
  { label: "YouTube", url: "#" },
];
