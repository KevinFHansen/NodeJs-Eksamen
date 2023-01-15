<script>
    import {onMount} from "svelte"
    let dataSet = [];
    let albumTitle = "collabs";
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

<h1>COLLABS REACHED</h1>