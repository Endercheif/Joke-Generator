<script lang="ts">
  import { fade } from "svelte/transition";
  import { getJoke } from "./jokes";
  import { settings } from "./settings";

  let curr = getJoke(
    {},
    { punchline: "", category: "General", setup: "", flags: { nsfw: false } }
  );
  let showPunchline = false;

  const load = () => {
    if (showPunchline) {
      curr = getJoke($settings, curr);
      console.log(curr);
    }
    showPunchline = !showPunchline;
  };

  const changeCategory = (e: { target: HTMLSelectElement }) => {
    const elem = e.target;
    const val = elem.value;
  };
</script>

<main class="container">
  <div class="box">
    <h3>{curr.setup}</h3>
  </div>

  <div class="box">
    <p transition:fade>{showPunchline ? curr.punchline : "?"}</p>
  </div>
  <button class="button" on:click={load}
    >{showPunchline ? "Next Joke" : "Punchline"}</button
  >
</main>

<div class="line" />

<style>
</style>
