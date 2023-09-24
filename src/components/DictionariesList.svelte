<svelte:options accessors />

<script>
  import MultiSelect from "svelte-multiselect";
  import NoteOfHowManyDictionariesAndLanguages from "@components/NoteOfHowManyDictionariesAndLanguages.svelte";
  import {
    dictionaries,
    languages,
    languagesFor,
  } from "@src/dictionaries-and-languages.js";

  let selectedLanguages = [];
  let select;

  $: {
    console.log(select);
  }

  $: filteredDictionaries = dictionaries.filter((dictionary) => {
    var matchingLanguages = selectedLanguages.filter((language) => {
      return hasLanguage(dictionary, language);
    });
    return matchingLanguages.length == selectedLanguages.length;
  });

  function hasLanguage(dictionary, language) {
    return languagesFor(dictionary).includes(language);
  }
</script>

<div class="grid">
  <MultiSelect
    bind:this={select}
    bind:selected={selectedLanguages}
    options={languages}
    maxSelect={2}
    placeholder="Languages"
    closeDropdownOnSelect={true}
    on:add={(event) => (select.open = false)}
  />
</div>

<div class="dictionaries-list">
  {#if selectedLanguages.length == 0}
    <NoteOfHowManyDictionariesAndLanguages />
  {:else}
    <h4>
      Found {filteredDictionaries.length} dictionaries for {selectedLanguages[0]}
      {#if selectedLanguages[1]}
        and {selectedLanguages[1]}
      {/if}
    </h4>
    <div>
      {#each filteredDictionaries as dictionary (dictionary.url)}
        <a
          class="p-1 border-solid border-t-2 border-neutral-200 flex no-underline items-center gap-2 cursor-pointer"
          key={dictionary.name}
          href={dictionary.url}
        >
          <div class="whitespace-nowrap">{dictionary.name}</div>
          <div class="flex-auto relative text-neutral-500 text-xs">
            <div class="details">{dictionary.details}</div>
            <div class="download-hint flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 2H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6m-2 17l-4-4h2.5v-3h3v3H16l-4 4m1-10V3.5L18.5 9H13Z"
                />
              </svg>
              Click to download
            </div>
          </div>
        </a>
      {/each}
    </div>
  {/if}
</div>

<style scoped lang="stylus">
.dictionaries-list
  a
    div
      margin-top 0
      &:first-letter
        text-transform uppercase
    .download-hint
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      opacity 0
    &:hover
      background-color: #1eac8d
      .details
        opacity: 0
      .download-hint
        opacity 1
</style>
