<!DOCTYPE html>
<html lang="it">
<head>
    <title>Accedi o Registrati</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="icon" href="../pictures/fav.png">
</head>
<body>
    
    <?php
    session_start();
    $_SESSION["name"] = "";
    include("php/mysql.php");
    if(isset($_POST["login"])){
        $user = $_POST["usr"];
        $query = ("SELECT * FROM users WHERE username = '{$user}'");
        $result = $sqlDB->query($query);
        if (!$result) {
            $message = 'Invalid query: ' . $sqlDB->error . "\n";
            $message .= 'Whole query: ' . $query;
            die($message);
            }
        $value = $result->fetch_assoc();
        if($value["password"] == md5($_POST["pwd"])){
            $_SESSION["name"] = $user;
            header("Location: php/menu.php");
            exit;
        }
        else{
            $message = "Utente o password errati";
            alert($message);
        }
    }
    if(isset($_POST["signup"])){
        $user = $_POST["usr"];
        $query = ("SELECT * FROM users WHERE username = '{$user}'");
        $result = $sqlDB->query($query);
        $value = $result->fetch_assoc();
        if (!$result) {
            $message = 'Invalid query: ' . $sqlDB->error . "\n";
            $message .= 'Whole query: ' . $query;
            die($message);
            }
        if($value["username"] == $user){
            $message = "Username non disponibile";
            alert($message);
        }
        else{
            $pwd = md5($_POST["pwd"]);
            $query = ("INSERT INTO `board`.`users` (`username`, `password`) VALUES ('{$user}', '{$pwd}')");
            $result = $sqlDB->query($query);
            if (!$result) {
                $message = 'Invalid query: ' . $sqlDB->error . "\n";
                $message .= 'Whole query: ' . $query;
                die($message);
                }
            $message = "Registrazione avvenuta con successo, effettuare il login";
            alert($message);
        }
    }

    function alert($msg) {
        echo "<script type='text/javascript'>alert('$msg');</script>";
    }
    ?>

    <div id="main">
        <h1>Benvenuto!</h1>
        <div id=login_form>
            <form action="<?=$_SERVER['PHP_SELF'];?>" method="post">
                <label for="usr">Username:</label>
                <input class="login_input" id="usr" name ="usr" type="text" placeholder="Username" required>
                <label for="pwd">Password:</label>
                <input class="login_input" id ="pwd" name ="pwd" type="password" placeholder="Password" required>
                <div id=login_button_container>
                    <input class="user_input" type="submit" name="login" value="Login">
                    <input class="user_input" type="submit" name="signup" value="Registrati">
                </div>
            </form>
        </div>
    </div>
</body>