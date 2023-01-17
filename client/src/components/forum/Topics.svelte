<script>
    import {onMount} from "svelte"
    import toastr from "toastr";
    import DeleteComponent from "../DeleteComponent.svelte";
    let userRole;
    let isUserLoggedIn;
    let showComments = false;
    let forum = location.pathname.split("/")[2];
    let forumArray = [];
    let subject;
    let userWhoWrote;
    let posts = []
    let newComment;
    let addComment;

    function handleClick(event) {

    let commentSection = event.currentTarget.getElementsByClassName('comment-section')[0];
    if(commentSection.style.display == "block")
    commentSection.style.display = "none"
    else{
        commentSection.style.display = "block"
    }
}



const getSession = async () => {
        
        const response = await fetch("http://localhost:8080/api/session",{
        method: "GET",
        credentials: "include"
        }).then(res => res.json())
        .then(result => {
            userRole = result.data.role
            isUserLoggedIn = result.data.isUserLoggedIn
            userWhoWrote = result.data.userName
        })
    }



const getForum = async () => {
    fetch(`http://localhost:8080/api/forum/${forum}`, {
        method: "GET",
        credentials: "include"
    })
    .then(res => res.json())
    .then(res => {
        forumArray = res.forumData
    })
}

const createTopic = async () => {
        await fetch("http://localhost:8080/api/forum/topics", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({subject, forum, posts: [{userWhoWrote: userWhoWrote, text: newComment},
    ] })
    })
        location.reload()
    
}

const addCommentToTopic = async (id) => {
        await fetch(`http://localhost:8080/api/topics/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({posts: [{userWhoWrote: userWhoWrote, text: addComment}]})
            })
            location.reload()
            }

onMount(async () => {
        await getSession()
        await getForum()
    })

</script>

<h1>{forum}</h1>

{#each forumArray as topic}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="subject-container" on:click={handleClick}>
        <p>{topic.subject}</p>
        <p>{topic.timeStampCreated}</p>
        
        <div class="comment-section">
            {#each topic.posts as comment}
                <div class="comment">
                <p>{comment.userWhoWrote}</p>
                <p>{comment.text}</p>
                </div>
            {/each}
        </div>
        <div class="comment-container"> 
            <form class="create" on:submit|preventDefault={() => addCommentToTopic(topic._id)}>
                <input class="input" type="text" id="input-field" placeholder="Join the debate" bind:value={addComment}>
                <button type="submit" >Submit</button>
            </form>
        </div>
        {#if userRole === "admin"}
        <DeleteComponent path="http://localhost:8080/api/forum/topics" idToDelete={topic._id} item="topic"/>    
        {/if} 
    </div>
{/each}

<h1 class="topic-header">Do you have something to debate?</h1>

<form class="topic-form" on:submit|preventDefault={createTopic}>
    <section>
        <label for="title">Topic Headline:</label>
        <input bind:value={subject} id="title" name="title" type="text">
    <section>
        <label for="title">Make the first comment:</label>
        <textarea bind:value={newComment} id="forum" name="forum"></textarea>
    </section>
    <button class="create" type="submit">Create topic</button>
</form>

<style>
    h1{
        font-size: 500%;
        text-align: center;
        text-transform: capitalize;
        font-family: fantasy;
        -webkit-text-stroke: 1px orange;
    }
    .comment-section{
        display: none;
    }
    form{
        padding-left: 3%;
    }
    button{
        background-color:gray ;
    }
    .subject-container{
        background-color: red;
        border: 12px groove gold;
        width: 75%;
        margin: 0 auto;
        font-family: fantasy;
        -webkit-text-stroke: 1px white;
        font-size: 200%;
        text-transform: capitalize;
    }
    .subject-container:hover{
        background-color: orange;
    }
    .comment{
        background-color: darkred;
        width: 50%;
        border: 20px gold groove ;
        margin: 0 auto;
    }
    input[type=text] {
        font-size: 100%;
    }
    p{
        padding-left: 3%;
    }
    button:hover{
        scale:110%;
    }
    .topic-form{
        text-align: center;
        font-family: fantasy;
        font-size: 150%;
    }
    .topic-header{
        font-size:3em;
    }
    section{
        padding: 1%;
    }
</style>






