<script>
    import {onMount} from "svelte"
    let dataSet = [];
    let albumTitle = "flytilstand";
    const getDiskografi = () => {
        fetch(`http://localhost:8080/api/music/album/${albumTitle}`, {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {
            dataSet = res
            console.log(res)
        })
    }
    onMount(getDiskografi);  
</script>

<!--BODY-->
<h1>Flytilstand</h1>
<!--<div class="container">
{#each dataSet as data}
    {#if data.album == "Flytilstand"}
        
    <div class="container-flytilstand album">
        <p>{data.title}</p>
    </div>
    {:else if data.album == "Raptus"}
    <div class="container-raptus album">
        <p>{data.title}</p>

    </div>
    {:else}
    <div class="container-feature album">
        <p>Collabs</p>
        <p>{data.title}</p>

    </div>
    {/if}
{/each}

</div>
-->