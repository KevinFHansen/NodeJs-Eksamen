<script>
    import {onMount} from "svelte"
    let dataSet = [];
    let albumTitle = "raptus";
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

<h1>RAPTUS REACHED</h1>