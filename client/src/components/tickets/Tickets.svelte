<script>
    import { onMount } from "svelte";
    import DeleteTicket from "../DeleteComponent.svelte";
    import {Link, navigate} from "svelte-navigator"
    import toastr from "toastr";

    
    let title = "";
    let price = "";
    let address = "";
    let date = "";
    let link = "";
    let dataSet = []



    let userRole;
    let isUserLoggedIn;

    const getSession = async () => {
        
        const response = await fetch("http://localhost:8080/api/session",{
        method: "GET",
        credentials: "include"
        }).then(res => res.json())
        .then(result => {
            userRole = result.data.role
            isUserLoggedIn = result.data.isUserLoggedIn
            console.log(result.data.role)
        })
    }

    const getTickets = async () => {
        await fetch("http://localhost:8080/api/tickets", {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {
            dataSet = res
            console.log(dataSet)
        })
    }
    



    const createTicket = async () => {
        await fetch("http://localhost:8080/api/tickets/", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, price, address, date, link})
        }).then((res) => {
            if(res.ok){
                toastr.success(`Added new show`)
                navigate("/tickets")
            }else {
                toastr.console.error(`Something went wrong`);
            }
        })
    }

    onMount(async () => {
        await getSession()
        await getTickets()
    }) 
</script>

<div class="container">
    
    {#each dataSet as ticket }
    <div class="ticket-container">
        <h1>{ticket.title}</h1>
        <p>{ticket.address}</p>
        <p>{ticket.price}</p>
        <p>{ticket.date}</p>
        <Link class="ticket" to={ticket.link}>Ticket link</Link>
        {#if userRole === "admin"}
        <DeleteTicket item="ticket" path="http://localhost:8080/api/tickets" idToDelete={ticket._id}/>
        {/if}
    </div>
    {/each}
        {#if userRole === "admin"}
        <form on:submit|preventDefault={createTicket}>
            <input bind:value={title} placeholder="Title" id="title" name="title" type="text">
            <input bind:value={price} placeholder="Price" id="price" name="price" type="text">
            <input bind:value={address} placeholder="Address" id="address" name="address" type="text">
            <input bind:value={date} placeholder="Date" id="date" name="date" type="date">
            <input bind:value={link} placeholder="Link" id="link" name="link" type="text">
            <button type="submit">Create ticket</button>
        </form>
        {/if}
</div>



<style>
    .ticket-container{
        margin: 0 auto;
        width: 50%;
        font-family: fantasy;
        text-align: center;
        font-size: 150%;
        background-color: lightblue;
        border: 10px groove red;
    }
    form{
        display: grid;
        width: 50%;
        margin: 0 auto;
        font-size: 200%;
        grid-template-columns:1fr;
        border: 10px red groove;
    }
    button{
        margin: 0 auto;
    }
    :global(.ticket){
        color: yellow;
        text-decoration: none;
    }
</style>