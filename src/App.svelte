<script>
  import TailwindCss from './TailwindCSS.svelte';
  import Router from "svelte-spa-router";
  import routes from "./routes.js";

  import Home from "./pages/Home.svelte";
  import Search from "./pages/Search.svelte";
  import Reader from "./pages/Reader.svelte";
  import Chapter from "./pages/Chapter.svelte";

  import Navbar from "./components/Navbar.svelte";
</script>
<TailwindCss/>
<Navbar/>
<Router {routes}/>