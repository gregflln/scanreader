<script>

    import Manga from "../lib/Manga";
    import Activity from "../lib/Activity";
    import { afterUpdate, onMount } from "svelte";
    //parms
    export let params = {};
    const url = decodeURIComponent(params.url);

    //instanciation
    const activity = new Activity()
    const crawler = new Manga(url);

    //pages variables
    let datas = null;
    //functions
    onMount(async () => {
      await crawler.getManga();
      datas = crawler.results
      activity.addToHistory(datas)
    })
    
    const fav = () => {
        activity.addToFavorite(datas)
    }
</script>
{#if datas !== null}
<div class="hero bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <div>
      <h1 class="text-5xl font-bold">{datas.title}</h1>
      <p class="text-2xl font-bold opacity-50 my-4">{datas.author}</p>
      <p class="py-6">{datas.desc}</p>
      <p class="py-6" id="desc"></p>
      <p class="py-6"><button class="btn text-white bg-pink-500" on:click={() => fav()}>ajouter aux favoris</button></p>
      {#each datas.genres as genre}
      <div class="badge badge-lg p-4 m-1">{genre}</div>
      {/each}
    </div>
  </div>
</div>



<div class="overflow-x-auto">
  <table class="table-normal w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>Chapter</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each datas.chapters as chapter}
      <tr>
        <td>{chapter.title}</td>
        <td>
          <a class="btn btn-primary" href={`#/read/${encodeURIComponent(url)}`}>
            Read
          </a>
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>
{/if}