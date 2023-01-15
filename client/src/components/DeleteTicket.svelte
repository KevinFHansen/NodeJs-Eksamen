<script>
export let path;
export let item;
export let idToDelete;
export const deleteTicket = async (idToDelete) => {
        await fetch(`${path}/${idToDelete}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            console.log(`succes deleting ${item}`)
        })
    }
</script>

<button on:click={() => deleteTicket(idToDelete)}>Delete button</button>