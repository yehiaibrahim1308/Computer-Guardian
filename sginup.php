<?php
$username= $_POST["username"];
$emaill =$_POST["emaill"];
$passworddata =$_POST["password22"];
$con =mysqli_connect("localhost","root","") or die ("error:cant connect to server");
$db =mysqli_select_db($con,"login") or die ("error:cant connect to database");

$insertdata ="INSERT INTO signupdata (username,emaill,password22)  value('$username','$emaill','$passworddata')";
$resultj = mysqli_query($con,$insertdata);

if($resultj){
	
	echo "<h1>your adata added</h1>";
	
	
}
else{
	die("error:" .mysqli_errno($con));
}


?>