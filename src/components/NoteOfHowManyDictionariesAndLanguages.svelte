<script>
  import { dictionaries, languages } from "@src/dictionaries-and-languages.js";

  export let simple = false;
</script>

<div>
  <aside aria-label="Note" class="starlight-aside starlight-aside--note">
    <div class="starlight-aside__title" aria-hidden="true">
      {#if !simple}
        <svg
          class="animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M16.59 9.42L12 4.83L7.41 9.42L6 8l6-6l6 6l-1.41 1.42m0 6L12 10.83l-4.59 4.59L6 14l6-6l6 6l-1.41 1.42m0 6L12 16.83l-4.59 4.59L6 20l6-6l6 6l-1.41 1.42Z"
          /></svg
        >
      {/if}
      <span>
        We've got
        <strong>
          <span class="text-2xl">{dictionaries.length}</span>
          dictionaries
        </strong>
        in
        <strong>
          <span class="text-2xl">{languages.length}</span>
          languages
        </strong>
        ready for you to download.
        {#if !simple}
          <br />
          <span class="text-sm">
            Pick one or two languages in the bar above to see what's in store.
          </span>
        {/if}
      </span>
    </div>
  </aside>
</div>
