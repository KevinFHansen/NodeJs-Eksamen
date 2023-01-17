<script>

import toastr from "toastr";

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
            if(res.status === 200){
                toastr.success(`succes deleting ${item}`)
                
            } else {
                toastr.console.error(`Something went wrong`);
            }
        })
    }
</script>
<button on:click={() => deleteFunction(idToDelete)}>Delete button</button>