import { en } from "./en";
import { fr } from "./fr";

export type Lang = "en" | "fr";
export const content = { en, fr } as const;
export { en, fr };
