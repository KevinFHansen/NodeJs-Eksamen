<script>
    import { Link } from "svelte-navigator";
import logo from "../../public/images/logo.png"
</script>

<div id="icon_container">
    <a href="https://www.instagram.com/funchx"><img src="https://www.citypng.com/public/uploads/preview/-11590304172n1klp7ohcb.png" alt="instagram"></a>
    <a href="https://www.facebook.com/funchx"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="facebook"></a>
    <a href="/"><img id="logo" src={logo} alt="Funch Logo"></a>
</div>

<style>
    #logo{
        background-color: black;
    }
    img{
        border: solid 2px red;
        width:5em;
        height:5em;
    }
    #icon_container{
        display: flex;
        justify-content: center;
        gap: 10px;

    }

</style>