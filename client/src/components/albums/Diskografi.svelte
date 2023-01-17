
<h1>Diskografi</h1>
<div class="albumContainer">
    <fieldset>
        <legend>Flytilstand</legend>
    <a href="/music/album/flytilstand"><img src="../public/images/flytilstand.jpg" alt=""></a>
    </fieldset>
    <fieldset>
        <legend>Raptus</legend>     
    <a href="/music/album/raptus"><img src="../public/images/raptus.jpg" alt=""></a>
    </fieldset>
    <fieldset>
        <legend>Collabs</legend>
    <a href="/music/album/collabs"><img src="../public/images/features.jpg" alt=""></a>
    </fieldset>
</div>

<style>
    h1{
        text-align: center;
        font-size: 5em;
        font-family: fantasy;
        -webkit-text-stroke: 0.1px orange;
    }
    .albumContainer{
        font-family:fantasy;
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        padding-top: 2%;
        justify-items: center;
    }
    legend{
        font-size: 300%;
        -webkit-text-stroke: 1px orange;
        text-align: center
    }
    .albumContainer img{
        width:500px;
        border-radius: 10px;
    }
    fieldset:hover{
        scale: 105%;
        transition: ease-in-out 0.2s;
        cursor:pointer;
    }
</style>
