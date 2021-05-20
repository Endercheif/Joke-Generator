<script lang="ts">
  import { settings } from "./settings";
  const changeCategory = (e) => {
    let category = e.target.value;

    settings.set({...$settings, category});
  };
</script>

<div class="settings" id="settings">
  <h1>Settings</h1>
  <label for="category">Joke Category</label>
  <select name="Joke Category" id="category" on:input={changeCategory}>
    <option value="All">All</option>
    <option value="General">General</option>
    <option value="Programming">Programming</option>
    <option value="Dark">Dark</option>
  </select>
</div>
