<script>
    import {onMount} from "svelte"
    
    let albumTitle = location.pathname.split("/")[3];
    let showModal = false;
    let songIndex = -1;
    let album = [];
    
    const getDiskografi = () => {
        fetch(`http://localhost:8080/api/music/album/${albumTitle}`, {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(res => {
            album = res.albumData
        })
    }
    onMount(getDiskografi);  
    
   

</script>
<h1>{albumTitle}</h1>

<p></p>

{#each album as song, index}

        <div class="modal" class:show={showModal && songIndex === index}>
            <div class="modal-content">
                <button class="close" on:click={() => {showModal =!showModal}}>&times;</button>
                <p>{song.title}</p>
                <pre>{song.lyrics}</pre>
            </div>
        </div>
        <div class="song-container">
        
        {#if song.artist}
            <p class="artist">{song.artist}</p>
        {/if}
        <audio class="player" controls>
            <source src="horse.ogg" type="audio/ogg">
            <source src="../../public/music/{song.audioFile}" type="audio/ogg">
        </audio>
        <img class="cover" src={song.image} alt="album_cover">
        <p class="title">{song.title}</p>
        <p class="release">{song.releaseDate}</p>
        <img class="logo" src="../../images/logo.png" alt="logo">
        <p class="producer">Produced by: {song.producer}</p>
        <p class="description">{song.description}</p>
        <button class="lyrics" id="myBtn" on:click={() => {showModal =!showModal ; songIndex = index}}>Lyrics</button>
    </div>
{/each}

<style>
pre, .modal-content{
    font-family: fantasy;
}
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
.modal.show {
    display: block;
}

    :global(.lyrics) {
        grid-area: lyrics;
        font-size: 150%;
        font-family: fantasy;
        background-color: orange;
        border-radius: 10px;
        margin: 2%;
    }
    .song-container{
        display: grid;
        font-size: 150%;
        grid-template-areas:". lyrics description"
                            "title pic logo"
                            "producer player release";
        grid-template-columns: 1fr 1fr 1fr;
        border:groove 10px red;
        justify-items: center;
        width: 70%;
        margin:0 auto;
    }
    audio::-webkit-media-controls-panel{
        background:none;
        border-radius: 0px;
    }
    .player{
        grid-area: player;
        place-self: center;
    }
    .logo{
        grid-area: logo;
        place-self: center;
        width:40%;
    }
    .cover{
        justify-self: center;
        grid-area: pic;
        width: 50%;

    }
    .title{
        grid-area: title;
        place-self: center;
        font-family: fantasy;
        font-size: 200%;
    }
    .release{
        grid-area: release;
        place-self: center;
        font-family: fantasy;
    }
    .producer{
        grid-area: producer;
        place-self: center;
        font-family: fantasy;
    }
    .description{
        grid-area: description;
        place-self: center;
        font-family: fantasy;
    }
    h1{
        font-family: fantasy;
        font-size: 5em;
        text-align: center;
        text-transform: capitalize;  
    }



/* Modal Content */
.modal-content {
    border-radius: 10px;
    font-size: 130%;
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