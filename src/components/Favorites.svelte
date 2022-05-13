<script>
    import Activity from "../lib/Activity.js";
    import FavCard from "../components/FavCard.svelte";
    const activity = new Activity();
    const favorites = activity.getFavorite();
</script>
<div class="rounded p-8 bg-base-200">
<h1 class="text-4xl font-bold my-4">Vos favoris</h1>
<div class="flex flex-row gap-4 flex-wrap">
    {#each favorites as fav}
     <FavCard
        title={fav.title}
        encodedLink={fav.encodedLink}
     />
    {/each}
    {#if favorites.length === 0}
    <p class="text-center text-gray-500">Vous n'avez aucun favoris</p>
    {/if}
</div>
</div>