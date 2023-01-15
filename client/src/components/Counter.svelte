<script>
    let cnt = 0;
    function counterUp(){
        cnt += 1;
        let test = document.getElementById("clicks");
        test.innerText = cnt.toString();
        console.log(test.innerText)
    }
    function counterDown(){
        cnt -= 1;
        let test = document.getElementById("clicks");
        test.innerText = cnt.toString();
        console.log(test.innerText)
    }
</script>
<button type="button" on:click={counterUp} class="">⬆</button>
<p id="clicks"></p>
<button type="button" on:click={counterDown} class="">⬇</button>


<style>
</style>