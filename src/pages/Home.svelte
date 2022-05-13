<script>
  import Favorites from "../components/Favorites.svelte";
  import History from "../components/History.svelte";

</script>
<div class="hero h-96 bg-base-100">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Best Scan Reader</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <a class="btn btn-primary" href="#/search">Rechercher un scan</a>
    </div>
  </div>
</div>
<Favorites/>
<History/>