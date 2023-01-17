<script>
import logo from "../../public/images/logo.png"
</script>

<div id="icon_container">
    <a href="https://www.instagram.com/funchx"><img src="https://image.similarpng.com/very-thumbnail/2020/06/Instagram-logo-transparent-PNG.png" alt="instagram"></a>
    <a href="https://www.facebook.com/funchx"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="facebook"></a>
    <a href="/"><img id="logo" src={logo} alt="Funch Logo"></a>
</div>

<style>
    #logo{
        background-color: black;
        object-fit: cover;
    }
    img{
        width:5em;
        height:5em;
        border-radius: 10px;
    }
    #icon_container{
        padding-top: 1%;
        padding-bottom: 1%;
        display: flex;
        justify-content: center;
        gap: 25px;
        margin: 0 auto;
        width:75%;
    }

</style>