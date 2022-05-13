<script>
    import Activity from "../lib/Activity.js";
    import FavCard from "../components/FavCard.svelte";
    const activity = new Activity();
    const nouveautes = activity.getNew();
    console.log('nouveautés :')
    console.log(nouveautes)
</script>
<div class="rounded p-8 bg-base-200">
<h1 class="text-4xl font-bold my-4">Mises à jour récentes</h1>
<div class="flex flex-row gap-4 flex-wrap">
    {#each nouveautes as n}
     <FavCard
        title={n.title}
        encodedLink={n.encodedLink}
     />
    {/each}
    {#if nouveautes.length === 0}
    <p class="text-center text-gray-500">Vous n'avez aucun favoris</p>
    {/if}
</div>
</div>