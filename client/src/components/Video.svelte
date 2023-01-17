<script>
    import promovideo from "../../public/videos/promovideo.mp4"
</script>
<div class="flex">
    <video controls autoplay muted>
        <source src={promovideo} type="video/mp4">
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

