<script>
    import { onMount } from "svelte";
    import toastr from "toastr";
    import DeleteComponent from "./DeleteComponent.svelte";

    
    let userName;
    let userList = [];
    let role;
    const users = async () => {
        fetch(`http://localhost:8080/api/users`, {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {
            userList = res.data
        })
    }

    const updateUser = async (id) => {
        await fetch(`http://localhost:8080/api/users/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userName: userName, user: role})
        })
            .then(res => res.json())
            .then(res => {
                if(res.status === 200){
                    toastr.succes("User updated")
                } else {
                    toastr.error("Something went wrong")
                }
            })
}
    
onMount(users)


</script>

<h1>Users</h1>

{#each userList as user}
<div class="user-container">
    <p> Username: {user.userName}</p>    
    <p> User role: {user.user}</p>
    <form on:submit|preventDefault={()=>updateUser(user._id)}>
        <input bind:value={userName} id="username" name="username" type="text" placeholder={user.userName}>
        <select name="role" id="role" bind:value={role} >
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
        <button type="submit">Update user</button>
    </form>
    <DeleteComponent path="http://localhost:8080/api/users" item="user" idToDelete={user._id}/>  
</div>
{/each}

<style>
    h1{
        text-align: center;
        font-size: 200%;
        font-family: fantasy;
    }
    .user-container{
        margin: 0 auto;
        width: 50%;
        border: 5px groove red;
        font-size: 200%;
        font-family: fantasy;
    }

</style>