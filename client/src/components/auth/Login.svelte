<script>
import {Link} from "svelte-navigator";
import toastr from "toastr";
import logo from "../../../public/images/logo.png"

    let email = "";
    let password ="";
    const login = async () => {
        const response = await fetch(`http://localhost:8080/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password}),
            credentials: "include"
        }).then(res => res.json()).then(result => {
            if(result.data.userName){
                toastr.success(`Welcome ${result.data.userName}!`)
                setTimeout(() =>{
                    location.href = "/"
                }, 1000)
                console.log(result.data.userName)
            } else {
                toastr.error(`Something went wrong - Try again`)
            }
        })}

</script>

<form on:submit|preventDefault={login}>
    <div class="img-container">
        <img src="{logo}" alt="/logo" class="avatar">
    </div>
    <div class="container">
        <label for="Email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required id="email" bind:value={email}>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required  bind:value="{password}">

        <button type="submit" id="postlogin">Login</button>
        <br>
        <Link class="link" to="/signup">Sign Up - Click here</Link>
    </div>
</form>


<style>

    /* Bordered form */
    form {
        border: 3px solid #f1f1f1;
        margin: 0 auto;
        width: 1000px;
        font-size: 200%;
        font-family: fantasy;
        font-weight: light;
        -webkit-text-stroke: 1px orange;
        }
    
    /* Full-width inputs */
    input[type=email], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    
    /* Set a style for all buttons */
    button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }
    
    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }
    
    
    /* Center the avatar image inside this container */
    .img-container {

        text-align: center;
        margin: 24px 0 12px 0;
    }
    
    /* Avatar image */
    img.avatar {
        width: 40%;
        border-radius: 50%;
    }
    
    /* Add padding to containers */
    .container {
        padding: 16px;
    }
    </style>