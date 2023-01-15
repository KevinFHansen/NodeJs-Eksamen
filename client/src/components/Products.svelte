<script>
import {onMount} from "svelte"


    let dataSet = [];
    const getProducts = () => {
        fetch("http://localhost:8080/api/products", {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {

            dataSet = res
            console.log(dataSet)
        })
    }
    onMount(getProducts);  
</script>

<h1>Shop</h1>

<h1>HOODIES/T-SHIRTS</h1>


<div class="product-container clothes">
{#each dataSet as data}
    {#if data.sizes}
        {#each data.sizes as size }
        <p>{data.category}</p>
        <p>{Object.keys(size)}</p>
        <pre>{data.color}</pre>
        <br>
        {/each}
    {/if}
{/each}
</div>

<div class="product-container vinyl">
    <h1>Vinyl</h1>
    {#each dataSet as data}
        {#if data.type == "vinyl"} 
            <p>{data.color}</p>
            <p>{data.price}</p>
            <img src={data.imageFrontside} alt="">
        {/if}
{/each}
</div>

<div class="product-container muleposer">
<h1>Muleposer</h1>
{#each dataSet as data}
    {#if data.category == "bag"}
        <div class="bag container">
            <img src={data.image} alt="">
            <p>{data.price}</p>
            <p>{data.color}</p>
        </div>
    {/if}
{/each}
</div>

