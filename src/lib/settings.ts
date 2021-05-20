import { writable } from "svelte/store";

export const settings = writable({
  category: "All",
  flags: { nsfw: false },
} as Settings);
