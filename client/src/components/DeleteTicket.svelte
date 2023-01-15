<script>
export let path;
export let item;
export let idToDelete;
export const deleteFunction = async (idToDelete) => {
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

<button on:click={() => deleteFunction(idToDelete)}>Delete button</button>