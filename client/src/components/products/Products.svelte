<script>
import {onMount} from "svelte"

let userRole;
let dataSet = [];

const getSession = async () => {
        const response = await fetch("http://localhost:8080/api/session",{
        method: "GET",
        credentials: "include"
        }).then(res => res.json())
        .then(result => {
            userRole = result.data.role
        })      
}
    
    
    const getProducts = async () => {
        await fetch("http://localhost:8080/api/products", {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {
            dataSet = res
        })
    }

    onMount(async () => {
        await getSession()
        await getProducts()
    }) 

</script>

<h1 class="shop">Shop</h1>
<div class="shirts">
<h1>HOODIES/T-SHIRTS</h1>
<div class="product-container clothes">
{#each dataSet as data}
    <div class="flex-container">
        {#if data.sizes}
            <img src={data.image} alt="">
            {#each data.sizes as size }
                <div class="items">
                    <p>{data.category}</p>
                    <p>Size: {Object.keys(size)}</p>
                    <p>Color: {data.color}</p>
                    <p>Price: {data.price},-</p>
                </div>
            {/each}
        {/if}

    </div>
{/each}
</div>
</div>

<div class="vinyl">
<h1>Vinyl</h1>
<div class="product-container vinyl">

    {#each dataSet as data}
        {#if data.type == "vinyl"} 
        <div class="flex-container">
            <img src={data.imageFrontside} alt="pic">
                <div class="items">
                    <p>{data.color}</p>
                    <p>Price: {data.price}</p>
            </div>
        </div>    
        {/if}
{/each}
</div>
</div>

<h1>Muleposer</h1>
<div class="product-container muleposer">

{#each dataSet as data}
    {#if data.category == "bag"}
        <div class="flex-container">

            <img src={data.image} alt="mulepose">
            <div class="items">
                <p>Price: {data.price}</p>
                <p>Color: {data.color}</p>
            </div>               
        </div>
    {/if}
{/each}
</div>

<style>
    .flex-container{
        display:flex;
        justify-content: space-evenly;
        border: red groove 5px;
    }
    img{
        padding: 5%;
    }
    p{
        text-transform:uppercase;
    }
    .items{
        padding: 5%;
        display: flex;
        font-family: fantasy;
        font-size: 300%;
        flex-direction: column;
        }
    .shirts, .vinyl, .muleposer{
        background-color: orange;
        width:75%;
        margin: 0 auto;
        border-radius: 10px;
    }
    .shop{
        font-size: 8em;
    }
    h1{
        padding-top: 5%;
        text-align: center;
        font-family: fantasy; 
        -webkit-text-stroke: 1px orange;
        font-size: 300%;
    }

</style>