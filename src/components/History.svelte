<script>
    import Activity from "../lib/Activity.js";
    const activity = new Activity();
    const history = activity.getHistory();
</script>
<div class="rounded p-8 bg-base-200">
<h1 class="text-4xl font-bold my-4">Votre historique</h1>
<div class="flex flex-row gap-4 flex-wrap">
    {#each history as element}
    <div class="py-4 w-full text-xl border-b border-gray-700 border-b-2">
        <a href={`#/chapter/${element.encodedLink}`}>
        <p>{element.title}</p>
        </a>
    </div>
    {/each}
    {#if history.length === 0}
    <p class="text-center text-gray-500">Vous n'avez rien consulté</p>
    {/if}
</div>
</div>