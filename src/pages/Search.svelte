<script>
    import MangaCard from "../components/MangaCard.svelte";
    import Search from "../lib/Search.js";
    let searchTerm = ''
    let results = []
    let loading = false;
    const crawler = new Search();

    const search = async () => {
        loading = true
        await crawler.search(searchTerm);
        console.log(crawler.getResults());
        results = crawler.getResults();
        loading = false
    }


</script>
<input type="text" bind:value={searchTerm} on:change={search} placeholder="Rechercher un scan..."
class="input input-lg text-2xl p-10 w-full text-white rounded-none" />
{#if loading == true}
<div class="flex justify-center items-center">
    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
{/if}
<div class="flex w-full flex-wrap gap-4 p-4">
    {#each results as result}
        <MangaCard
            title={result.title}
            author={result.author}
            updated={result.updated}
            link={result.link}
            image={result.image}
        />
    {/each}
</div>