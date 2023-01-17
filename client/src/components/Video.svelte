<script>
    import promovideo from "../../public/videos/promovideo.mp4"
</script>
<div class="flex">
    <video controls autoplay muted>
        <source src={promovideo} type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>
</div>

<style>
    .flex{
        display: flex;
        justify-content: center;
    }
    video{
        width: 50%;
    }




</style>

