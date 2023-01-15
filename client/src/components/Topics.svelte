<script>
    import {onMount} from "svelte"
    import Comment from "./Comment.svelte";

let showComments = false;
    
function handleClick(event) {
    showComments = !showComments
    console.log(showComments)
    let commentSection = event.currentTarget.getElementsByClassName('comment-section')[0];
    if(commentSection.style.display == "block")
    commentSection.style.display = "none"
    else{
        commentSection.style.display = "block"
    }
    console.log(commentSection);
}
let forumTitle = location.pathname.split("/")[2];
console.log(forumTitle)
let forum = [];
const getForum = () => {
    fetch(`http://localhost:8080/api/forum/${forumTitle}`, {
        method: "GET",
        credentials: "include"
    })
    .then(res => res.json())
    .then(res => {
        forum = res.forumData
        console.log(forum)
        
    })
}
onMount(getForum);  

</script>

<h1>{forumTitle}</h1>

{#each forum as topic}
    <div class="subject-container" on:click={handleClick}>
        <p>{topic.subject}</p>
        <p>{topic.createdSubjectTimeStamp}</p>
            
            <div class="comment-section">
            {#each topic.posts as comment}
                <div class="comment">
                <p>{comment.userWhoWrote}</p>
                <p>{comment.text}</p>
                </div>
            {/each}
        </div>
        <div class="comment-container"> 
        <Comment/>
        </div>
    </div>
{/each}

<style>

    .comment-section{
        display: none;
        background-color: blue;
        
    }
    .subject-container{
        background-color: red;
    }
    .comment{
        background-color: green;
    }

</style>






