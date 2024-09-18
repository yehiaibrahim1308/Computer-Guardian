<?php
$email= $_POST["email"];
$password =$_POST["password"];
$con =mysqli_connect("localhost","root","") or die ("error:cant connect to server");
$db =mysqli_select_db($con,"login") or die ("error:cant connect to database");

$insertdata ="INSERT INTO logindata (email,password)  value('$email','$password')";
$result = mysqli_query($con,$insertdata);

if($result){
	
	echo "<h1>your adata added</h1>";
	
	
}
else{
	die("error:" .mysqli_errno($con));
}

?>