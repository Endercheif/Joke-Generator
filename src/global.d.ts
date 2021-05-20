/// <reference types="svelte" />
/// <reference types="vite/client" />

declare interface JokeType {
  setup: string;
  punchline: string;
  category: "General" | "Programming" | "Dark";
  flags: {
    nsfw: boolean;
  };
}

declare interface Settings {
  category: "All" | "General" | "Programming" | "Dark";
  flags: {
    nsfw: boolean;
  };
}
