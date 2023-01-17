<script>
    import { Link } from "svelte-navigator";
    import toastr from "toastr";
    

        const logOut = () => {
        fetch("http://localhost:8080/api/logout", {
            method: "GET",
            credentials: "include"
        })
        setTimeout(() => {
            toastr.success("Loggin out - See you later my friend!")
            location.href = "/"
        }, 2000)
    }
</script>

<Link class="link" to="/" on:click={logOut}>Log Out</Link>

<style>
    :global(.link){
        text-decoration: none;
        color:black;
        -webkit-text-stroke: 1px orange;
        font-family: fantasy;
    }
</style>