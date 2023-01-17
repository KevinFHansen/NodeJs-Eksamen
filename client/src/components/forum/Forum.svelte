<script>
    import { Link } from "svelte-navigator";
    import {onMount} from "svelte"
    import DeleteComponent from "../DeleteComponent.svelte";
    
    let userRole;
    let isUserLoggedIn;
    let dataSet = [];
    let title;
    const getSession = async () => {
        
        const response = await fetch("http://localhost:8080/api/session",{
        method: "GET",
        credentials: "include"
        }).then(res => res.json())
        .then(result => {
            userRole = result.data.role
            isUserLoggedIn = result.data.isUserLoggedIn
            console.log(userRole)
        })
    }
    

    const getForum = async () => {
    await fetch("http://localhost:8080/api/forum", {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {
            dataSet = res
        })
    
}

    const createForum = async () => {
        await fetch("http://localhost:8080/api/forum/", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title})
    }).then((res) => {
        if(res.status === 200){
            console.log()
            console.log("succes")
        }
    })
}   
    onMount(async () => {
        await getSession()
        await getForum()
    })


</script>

<div class="forum-container">
    <h1>Forum</h1>
    {#each dataSet as forum}
        <div class="forum-link">
            <Link class="link" to={`/forum/${forum.title}`}>{forum.title}</Link>
            {#if userRole === "admin"}
            <div class="admin-panel">
            <DeleteComponent path="http://localhost:8080/api/forum" idToDelete={forum._id} item="forum"/>
        </div>
        {/if}
        </div>
    {/each}

</div>


{#if userRole === "admin"}
<div class="container">
    <form on:submit|preventDefault={createForum}>
        <label for="title">Title</label>
        <input bind:value={title} id="title" name="title" type="text">
        <button type="submit">Create Forum</button>
    </form>
</div>
{/if}


<style>
    h1{
        text-align: center;
    }
    .forum-container{
        font-family: fantasy;
        font-size: 200%;
        margin: 0 auto;
        border: red 2px groove;
        width: 50%;
    }
    .forum-link{
        padding: 2%;
        text-transform: capitalize;
        border: red 2px groove;
    }
    .forum-link:hover{
        background-color: antiquewhite;

    }
    .container{
        font-family: fantasy;
        font-size: 200%;
        margin: 0 auto;
        border: red 2px groove;
        width: 50%;
    }
    :global(.link){
        color: yellow;
        text-decoration: none;
                cursor: pointer;
    }
</style>