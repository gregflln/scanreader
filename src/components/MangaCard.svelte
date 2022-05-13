<script>
    export let title;
    export let author;
    export let updated;
    export let link;
    export let image;
    //export let image;
    //export let link;
</script>
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="caption" /></figure>
  <div class="card-body">
    <h2 class="card-title text-white">{title}</h2>
    <p>Par <strong>{author}</strong></p>
    <p>{updated}</p>
    <div class="card-actions justify-end">
      <a href={`#/chapter/${encodeURIComponent(link)}`}>
        <button class="btn btn-primary">Lire</button>
    </a>
    </div>
  </div>
</div>