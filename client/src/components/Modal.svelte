<script>
export let title;
export let text;
export let classes;
export let buttonName;


// Open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    
}
// Close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

</script>

<div id="myModal" class="modal">
    <div class="modal-content">
        <button class="close" on:click={closeModal}>&times;</button>
        <p>{title}</p>
        <pre>{text}</pre>
    </div>
</div>
<button id="myBtn" on:click={openModal} class="{classes}">{buttonName}</button>

<style>
/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

</style>