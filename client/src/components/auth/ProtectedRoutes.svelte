<script>
    import {Route, Router, Link} from "svelte-navigator"
    import {onMount} from "svelte"
    import Diskografi from "../albums/Diskografi.svelte"
    import Forum from "../forum/Forum.svelte";
    import Products from "../products/Products.svelte";
    import Albums from "../albums/Albums.svelte";
    import Topics from "../forum/Topics.svelte";
    import Tickets from "../tickets/Tickets.svelte";
    import Login from "../auth/Login.svelte";
    import SignUp from "../auth/SignUp.svelte";
    import Users from "../Users.svelte";
    import LogOut from "./LogOut.svelte";
    
    import io from "socket.io-client";
    import Video from "../Video.svelte";

    let socketData;
    const socket = io("http://localhost:8080");
    socket.on('user-connected', (data) => {
            socketData = data.message
    });


    let userRole;
    let isUserLoggedIn;

    const getSession = async () => {
        try{
        const response = await fetch("http://localhost:8080/api/session",{
        method: "GET",
        credentials: "include"
        }).then(res => res.json())
        .then(result => {
            userRole = result.data.role
            isUserLoggedIn = result.data.isUserLoggedIn
        })
        } catch (error) {
            
        }
}

    onMount(getSession)


</script>

<Router>
    {#if isUserLoggedIn}
    <ul>
    <li class="socket">{socketData}</li>
        <li><Link class="link" to="/tickets">Find Tickets</Link></li>
        <li><Link class="link" to="/forum">Forum</Link></li>
        <li><Link class="link" to="/music">Music</Link></li>
        <li><Link class="link" to="/products">Products</Link></li>
        {#if userRole === "admin"}
            <li><Link class="link" to="/users">Users</Link></li>
        {/if}
        <LogOut/>
    </ul>
    {/if}
    {#if !userRole}
        <Route path="/" component={Login}/>
        <Route path="/signup" component={SignUp}/>
    {:else if userRole === "user"}
        <Route path="/" component={Video}/>
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
        
    {:else if userRole === "admin"}
    
        <Route path="/" component={Video}/>
        <Route path="/users" component={Users}/>
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
        <Route path="/users" component={Users}/>
    {/if}
</Router>


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
    .socket{
        text-decoration: underline;
        color:darkgray;
    }


</style>