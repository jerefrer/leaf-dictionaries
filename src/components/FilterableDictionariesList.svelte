<svelte:options accessors />

<script>
  import MultiSelect from "svelte-multiselect";
  import NoteOfHowManyDictionariesAndLanguages from "@components/NoteOfHowManyDictionariesAndLanguages.svelte";
  import {
    dictionaries,
    languages,
    languagesFor,
  } from "@src/dictionaries-and-languages.js";
  import DictionariesList from "./DictionariesList.svelte";

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

{#if selectedLanguages.length == 0}
  <NoteOfHowManyDictionariesAndLanguages />
{:else}
  <h4>
    Found {filteredDictionaries.length} dictionaries for {selectedLanguages[0]}
    {#if selectedLanguages[1]}
      and {selectedLanguages[1]}
    {/if}
  </h4>
  <DictionariesList dictionaries={filteredDictionaries} />
{/if}
