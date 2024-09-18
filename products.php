<!DOCTYPE html>
<html>

<head>
	<title>avaliable products </title>
</head>

<body>
    <style>
        body{
            color : white;
            background : url(./images/ddd.png);

            background-position: center;
            background-repeat: no-repeat;
            background-size: center;
            position: relative;
        }
    </style>    
	<h1>OUR NEW PRODUCTS</h1>
	<table border="1">
		<tr>
			<td>DID</td>
			<td>DName</td>
			<td>DPRICE</td>
			<td>Details</td>
		</tr>
	<?php
	$con =mysqli_connect("localhost","root","") or die ("error:cant connect to server");
    $db =mysqli_select_db($con,"login") or die ("error:cant connect to database");
	
	$products = "SELECT * FROM devices";
	$result = mysqli_query($con,$products);
	if(!$result){
		die("Error: ".mysqli_errno($con));
	}
	
	while($row = mysqli_fetch_array($result)){
		echo "
			<tr>
				<td>".$row["DID"]."</td>
				<td>".$row["DName"]."</td>
				<td>".$row["DPRICE"]."</td>
				<td>".$row["Details"]."</td>
			</tr>
		";
	}
	?>
	</table>
</body>

</html>