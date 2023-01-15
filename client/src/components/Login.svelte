<script>
    import logo from "../../public/images/logo.png"
</script>


<!--LOGIN FORM-->
<form action="">
    <div class="img-container">
      <img src={logo} alt="Avatar" class="avatar">
    </div>
    <div class="container">
    <label for="email">Email</label>
    <input type="email" placeholder="Enter e-mail" name="email" id="email">

    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Enter password">
    
    <button type="submit" id="login-btn">Loggin</button>
  </div>
</form>


<style>

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
  background-color: red;
  text-align: center;
}
</style>