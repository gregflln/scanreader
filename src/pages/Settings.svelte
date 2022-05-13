<script>
    import Activity from "../lib/Activity.js";
    const activity = new Activity();
    import FindNew from "../lib/FindNew.js";
    const findNew = new FindNew();
</script>
<div class="flex flex-col gap-4 p-8">
<h1 class="text-5xl font-semibold">Paramètres</h1>
<p>Votre activité sur notre site est privée, vos données sont conservées localement.</p>
<h1 class="text-3xl font-semibold">Fonctionnalités</h1>
<p>Déclenche manuellement une recherche des nouveautés</p>
<button class="btn btn-secondary" on:click={() => findNew.getNew()}>Rechercher les nouveautés (manuel)</button>
<h1 class="text-3xl font-semibold">Données et activité</h1>
<p class="prose">Vous pouvez gerer vos données et votre actvité a partir d'ici</p>
<button class="btn btn-primary" on:click={() => activity.deleteFavorite()}>Supprimer les favoris</button>
<p>Supprimer l'historique</p>
<button class="btn btn-primary" on:click={() => activity.deleteHistory()}>Supprimer l'historique</button>
<p>Supprimer toute les données enregistrées depuis le stockage local de votre navigateur (localstorage)</p>
<div class="alert shadow-lg">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Attention, cette action est irréversible</span>
    </div>
</div>
<label for="delete-datas-modal" class="btn modal-button btn-warning">supprimer toute mes données</label>
</div>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="delete-datas-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Etes vous sûr ?</h3>
    <p class="py-4">Toutes vos données d'activités vont être supprimées, cette action est définitive.</p>
    <div class="modal-action">
      <button class="btn btn-warning" on:click={() => activity.deleteActivity()}>tout supprimer</button>
    </div>
  </div>
</div>