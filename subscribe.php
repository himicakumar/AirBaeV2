<?php 
 header('Content-Type: text/javascript; charset=UTF-8');
    if(isset($_POST["addme"])) {
        
 

    $fname = $_POST["lname"];
    $lname = $_POST["fname"];
    $email = $_POST["email"];

    $str = $fname . "," . $lname ."," .$email;

     file_put_contents("emails.txt", $str . PHP_EOL, FILE_APPEND);

}
?>
<!DOCTYPE html>
<head>
    <title>AirBae | Rediscover Traveling</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
    <link rel="stylesheet" href="assets/css/main.css" />
    <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
    <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link rel="shortcut icon" href="images/newfav.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <script type="text/javascript" src="script.js"></script>
    <script type="text/javascript">
   

	
	
</script>

</head>
<body>

<h2> Join our mailing list</h2>
    <form action = "" method = "POST">
            <label>First Name:</label>
            <input type="text" name="fname" />
            <br>
            <label>Last Name:</label>
            <input type="text" name="lname" />
            <br>
            <br>
            <label>Email:</label>
            <input type="email" name="email" />
            <br>            
            <input type="submit" name = "addme" value="Add me" />
            <input type="button" name = "home" value="Home"  onclick="location.href = 'index.html'";/>
         </form>
</body>
</html>