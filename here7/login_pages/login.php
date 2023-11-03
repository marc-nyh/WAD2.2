<?php
    require_once 'common.php';

    $username='';
    if (isset ($_SESSION["login_page"])){
        $username = $_SESSION["login_page"];
        unset ($_SESSION["login_page"]);
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
    <body class="flexCenter accountbody" >
        <form action="process_login.php" method="post">
            <div id = "login" class = "mainContainer">
                <div class = "inputHeader flexCenter">
                    <h1 class="fw-bold text-success">Fresh<span class="text-danger">To</span>Plate</h1>
                </div>
                <div class = "inputHeader flexCenter">
                    <p>Login</p>
                </div>
                <div id = "loginInput" class = "inputBox">    
                    <input class="accountinput" name="username" value = '<?php echo $username ?>' placeholder="Email">
                    <input class="accountinput" type="password" name="password" placeholder="Password">
                </div>
                <div id = "loginSubmit" class = "submitBox">
                    <input class="accountinput" type="submit" value="Login">
                </div>
                <div>
                    <?php printErrors(); ?>
                </div>
                <div>
                    <p style="text-align: center;">Don't have an account? <a href="register.php">Signup</a></p>
                </div>    
                
            </div>
        </form>

        <!-- Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    </body>
</html>