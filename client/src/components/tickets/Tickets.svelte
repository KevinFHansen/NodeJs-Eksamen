<script>
    import { onMount } from "svelte";
    import DeleteTicket from "../DeleteTicket.svelte";

    
    let title = "";
    let price = "";
    let address = "";
    let date = "";
    let link = "";
    let dataSet = []
    const getTickets = () => {
        fetch("http://localhost:8080/api/tickets", {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {
            dataSet = res
            console.log(dataSet)
        })
    }
    onMount(getTickets);  


    const createTicket = async () => {
        await fetch("http://localhost:8080/api/tickets/", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, price, address, date, link})
        }).then((res) => {
            if(res.status === 200){
                console.log("succes")
            }
        })
    }

    // const deleteTicket = async (id) => {
    //     await fetch(`http://localhost:8080/api/tickets/${id}`, {
    //         method: "DELETE",
    //         credentials: "include",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
            
    //     }).then((res) => {
    //         console.log("succes")
    //     })
    // }
</script>

<div class="container">
    
    {#each dataSet as ticket }
    <div class="ticket-container">
        <h1>{ticket.title}</h1>
        <p>{ticket.address}</p>
        <p>{ticket.price}</p>
        <p>{ticket.date}</p>
        <p>{ticket.link}</p>

        <DeleteTicket item="ticket" path="http://localhost:8080/api/tickets" idToDelete={ticket._id}/>
        
    </div>
    {/each}

    
    <form on:submit|preventDefault={createTicket}>
        <label for="title">Title</label>
        <input bind:value={title} id="title" name="title" type="text">

        <label for="price">price</label>
        <input bind:value={price} id="price" name="price" type="text">

        <label for="address">address</label>
        <input bind:value={address} id="address" name="address" type="text">

        <label for="date">date</label>
        <input bind:value={date} id="date" name="date" type="date">

        <label for="link">Link</label>
        <input bind:value={link} id="link" name="link" type="text">

        <button type="submit">Create ticket</button>

    </form>
</div>

<style>
    .ticket-container{
        background-color: lightblue;
    }
</style>