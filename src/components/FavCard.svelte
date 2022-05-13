<script>
    export let title;
    export let encodedLink;
</script>
<a class="card bg-base-100 shadow-xl border-b-4 border-pink-500" href={`#/chapter/${encodedLink}`}>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
    </div>
  </a>