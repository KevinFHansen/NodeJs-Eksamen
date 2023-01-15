<script>
    import logo from "../../../public/images/logo.png"
    import {Link, navigate} from "svelte-navigator";
    //import toastr from "toastr";


    let userName = "";
    let password ="";
    let email ="";
    const signUp = async () => {
        const response = await fetch(`http://localhost:8080/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userName, password, email}),
            credentials: "include"
        }).then(res => res.json()).then(result => {
        
            if(result.username){
            //toastr["success"]("Welcome " + result.username + "! You are now granted permission to join the community - Please login")
            //toastr["success"]("We have sent an email to:  "  + result.email + " with a code to verify your account.")
            console.log("result good")
            } 
            if(result.error){
            //toastr["error"](result.error)
            console.log("result bad")
            }
            navigate("/login")
})};

</script>

<form on:submit|preventDefault={signUp}>
    <div class="imgcontainer">
        <img src={logo} alt="Avatar" class="avatar">
    </div>

    <div class="container">
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required bind:value={userName}>

        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required bind:value={password}>

        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required bind:value={email}>

        <button type="submit">Sign Up</button>
        <Link to="/">Already have an account?</Link>

    </div>
</form>

<style>

/* Bordered form */
form {
  border: 3px solid #f1f1f1;
  margin-top: 5%;
  width: 550px;
 
}

/* Full-width inputs */
input[type=text], input[type=email], input[type=password] {
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
.imgcontainer {
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