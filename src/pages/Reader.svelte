<script>

    import Pages from "../lib/Pages.js";
    //export let url;
    export let params = {};
    let url = params.url;
    const durl = decodeURIComponent(url);
    const crawler = new Pages(durl);
    const getPages = async () => {
        await crawler.getPages();
        //console.log(crawler.results)
        return crawler.results;
    }
</script>
{#await getPages()}
<p>Loading, please Wait !</p>
{:then pages}
    {#each pages as page}
        <img src={`https://proxy732.herokuapp.com/${encodeURIComponent(page)}`} alt="">
    {/each}
{/await}
