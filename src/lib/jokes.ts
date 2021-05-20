import _Jokes from "./joke-data.json";
const Jokes = _Jokes as unknown as JokeType[];

export function getJoke(
  params: {
    id?: number;
    category?: "All" | "General" | "Programming" | "Dark";
  },
  curr: JokeType
): JokeType {
  const joke = () => {
    if (params.id) return Jokes[params.id];

    if (params.category) {
      while (true) {
        let rn = Math.floor(Math.random() * Jokes.length);
        if (Jokes[rn].category == params.category || params.category === "All")
          return Jokes[rn];
      }
    }
    return Jokes[Math.floor(Math.random() * Jokes.length)];
  };
  let newJoke = curr;
  while (newJoke === curr) newJoke = joke();
  return newJoke;
}
