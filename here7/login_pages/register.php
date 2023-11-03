<?php
require_once 'common.php';

$tmp_username = '';
if (isset($_SESSION["register_fail"])){
    $tmp_username = $_SESSION["register_fail"];
    unset ($_SESSION["register_fail"]);
}
?>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

        <link rel="stylesheet" href="../style.css">

    </head>
    <body class="flexCenter accountbody">
       <form action="process_register.php" method="post">
            <div id = "signup" class = "mainContainer"> 
                <div class = "inputHeader flexCenter">
                    <h1 class="fw-bold text-success">Fresh<span class="text-danger">To</span>Plate</h1>
                </div>
                <div class = "inputHeader flexCenter">
                    <p>Signup</p>
                </div>
                <div id = "signupInput" class = "inputBox">    
                    <input class="accountinput" name="username" value= '<?= $tmp_username?>' placeholder="Email">
                    <input class="accountinput" type="password" name="password" value="" placeholder="Password">
                    <input class="accountinput" type="password" name="confirmPassword" value="" placeholder="Confirm Password">
                </div>
                <div id = "signupSubmit" class = "submitBox">
                    <input class="accountinput" type="submit" name="submit" value="Signup">
                </div>
                <div>
                    <?php printErrors(); ?>
                </div>
                <div>
                    <p style="text-align: center;">Already have an account? <a href="login.php">Login</a></p>
                </div>    
                    
            </div>
        </form>

        <!-- Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    </body>
</html>


