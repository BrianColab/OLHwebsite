import { content, type Lang } from "@/content";
import { LOCATIONS, localizeLocation } from "./locations";

export interface SearchEntry { title: string; text: string; page: string; href: string; }
export function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().replace(/[’']/g, " ");
}
export function getSearchEntries(lang: Lang): SearchEntry[] {
  const c = content[lang];
  const entries: SearchEntry[] = [];
  const add = (title: string, text: string, page: string, href: string) => entries.push({ title, text, page, href });
  add(c.home.hero.headline, [c.home.hero.subheadline, c.home.hero.subheadline2].join(" "), c.nav.home, "/#overview");
  c.home.features.forEach((item, i) => add(item.title, item.description, c.nav.home, "/#feature-" + i));
  add(c.home.bridging.heading, [c.home.bridging.body1, c.home.bridging.body2, c.home.bridging.statBody].join(" "), c.nav.home, "/#access-to-care");
  add(c.home.trust.heading, c.home.trust.body1 + " " + c.home.trust.body2, c.nav.home, "/#legion");
  add(c.home.partnerPreview.heading, [c.home.partnerPreview.body1, c.home.partnerPreview.body2, c.home.partnerPreview.body3].join(" "), c.nav.home, "/#service-network");
  add(c.howItWorks.hero.heading, c.howItWorks.hero.subheading, c.nav.howItWorks, "/how-it-works#overview");
  c.howItWorks.steps.forEach((item) => add(item.title, item.body, c.nav.howItWorks, "/how-it-works#step-" + item.number));
  add("Important", c.howItWorks.callout, c.nav.howItWorks, "/how-it-works#screening-call");
  add(c.howItWorks.technology.heading, c.howItWorks.technology.body + " " + c.howItWorks.technology.safetyLine, c.nav.howItWorks, "/how-it-works#technology");
  add(c.howItWorks.support.heading, [c.howItWorks.support.subheading, ...c.howItWorks.support.bullets, c.howItWorks.support.note].join(" "), c.nav.howItWorks, "/how-it-works#next-steps");
  add(c.whoWeServe.hero.heading, c.whoWeServe.hero.subheading + " " + c.whoWeServe.inclusiveNote, c.nav.whoWeServe, "/who-we-serve#overview");
  c.whoWeServe.audiences.forEach((item, i) => add(item.title, item.body, c.nav.whoWeServe, "/who-we-serve#audience-" + i));
  add(c.nav.partners, c.whoWeServe.partners.intro, c.nav.whoWeServe, "/who-we-serve#partners");
  c.whoWeServe.partners.list.forEach((item, i) => add(item.name, item.tagline + " " + item.description, c.nav.partners, "/who-we-serve#partner-" + i));
  add(c.whoWeServe.partners.growTitle, c.whoWeServe.partners.growBody1 + " " + c.whoWeServe.partners.growBody2, c.nav.partners, "/who-we-serve#network-growth");
  add(c.locations.hero.heading, c.locations.hero.subheading, c.nav.locations, "/locations#overview");
  LOCATIONS.forEach((location) => { const loc = localizeLocation(location, lang); add(loc.community + " — " + loc.branch, loc.address, c.nav.locations, "/locations#location-" + loc.id); });
  const privacy = lang === "fr" ? "Confidentialité" : "Privacy";
  add(c.privacy.headingPrefix + " " + c.privacy.headingAccent, c.privacy.subheading, privacy, "/privacy#overview");
  add(c.privacy.controlTitle, c.privacy.controlItems.join(" "), privacy, "/privacy#your-control");
  add(c.privacy.useTitle, c.privacy.useBody, privacy, "/privacy#information-use");
  add(c.privacy.notTitle, c.privacy.notItems.join(" "), privacy, "/privacy#limits");
  return entries;
}
export function searchEntries(entries: SearchEntry[], query: string) {
  const terms = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return entries;
  return entries.filter((entry) => terms.every((term) => normalizeSearch(entry.title + " " + entry.text + " " + entry.page).includes(term)))
    .sort((a, b) => {
      const score = (entry: SearchEntry) => terms.reduce((total, term) => total + (normalizeSearch(entry.title).includes(term) ? 2 : 0), 0);
      return score(b) - score(a);
    });
}
