<script>
import { onMount } from "svelte";
export let path;
export let dataSet = [];
    const getTickets = () => {
        fetch(`${path}`, {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {
            dataSet = [...dataSet, ...res];
            console.log(dataSet)
        })
    }
    onMount(getTickets);  
</script>