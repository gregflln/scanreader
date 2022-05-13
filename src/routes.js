import Home from './pages/Home.svelte';
import Search from './pages/Search.svelte';
import Chapter from './pages/Chapter.svelte';
import Reader from './pages/Reader.svelte';
import NotFound from './pages/NotFound.svelte';
import Settings from './pages/Settings.svelte';

export default {
    // Exact path
    '/': Home,
    // Using named parameters, with last being optional
    '/search': Search,

    // Wildcard parameter
    '/chapter/:url': Chapter,

    '/read/:url': Reader,

    '/settings' : Settings,
    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}