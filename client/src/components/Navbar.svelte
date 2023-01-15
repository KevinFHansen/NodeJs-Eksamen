<script>
    import {Router, Link, Route} from "svelte-navigator" 
    import Diskografi from "./Diskografi.svelte"
    import Flytilstand from "./albums/Flytilstand.svelte";
    
    import Raptus from "./albums/Raptus.svelte";
    import Collabs from "./albums/Collabs.svelte";
    import Forum from "./Forum.svelte";
    import Products from "./Products.svelte";
    import Albums from "./albums/Albums.svelte";
    import Topics from "./Topics.svelte";
    import Tickets from "./tickets/Tickets.svelte";
</script>

<nav>
    <Router>
        <ul>
            <li><Link class="link" to="/calender">View Calender</Link></li>
            <li><Link class="link" to="/tickets">Find Tickets</Link></li>
            <li><Link class="link" to="/gallery">Gallery</Link></li>
            <li><Link class="link" to="/forum">Forum</Link></li>
            <li><Link class="link" to="/music">Music</Link></li>
            <li><Link class="link" to="/products">Products</Link></li>
        </ul>
        <Route path="/music" component={Diskografi}/>
        <Route path="/music/album/flytilstand" component={Albums}></Route>
        <Route path="/music/album/raptus" component={Albums}></Route>
        <Route path="/music/album/collabs" component={Albums}></Route>
        <Route path="/forum" component={Forum}></Route>
        <Route path="/forum/hadeklubben" component={Topics}></Route>
        <Route path="/forum/bars" component={Topics}></Route>
        <Route path="/forum/merch" component={Topics}></Route>
        <Route path="/products" component={Products}/>
        <Route path="/tickets" component={Tickets}/>
    </Router>
</nav>

<style>
    ul{
        display: flex;
        font-size: 2em;
        justify-content: space-evenly;
    }
    li{
        font-family: fantasy;
        list-style: none;
        -webkit-text-stroke: 1px orange;
        text-decoration: none;
    }

    :global(.link){
        text-decoration: none;
        color:black;
        -webkit-text-stroke: 1px orange;
    }



</style>