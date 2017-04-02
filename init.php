<?php
ini_set ( 'max_execution_time', 300 );
$db = new mysqli('localhost', 'root', '', 'airbae');
		if ($db->connect_error):
			die ("Could not connect to db: " . $db->connect_error);
		endif;

$db->query ( "DROP table Flights" );


$sql = ("CREATE table Flights
		(FlightNumber VARCHAR(6) PRIMARY KEY not null,
		Takeoff DATETIME not null,
		Airline VARCHAR(40) not null,
		Origin VARCHAR(40) not null,
		Destination VARCHAR(50) not null)");

if ($db->query ( $sql ) === FALSE) {
	echo "Error creating table: " . $db->error;
}
$fileptr = fopen ( "flights.txt", "r" );
if (flock ( $fileptr, LOCK_SH )) {
	$numFlights = trim ( fgetss ( $fileptr, 512 ) );
	 echo $numFlights . "</br>";

	for($i = 0; $i < $numFlights; $i ++) {
		$FlightNumber = trim ( fgetss ( $fileptr, 512 ) );
		 echo "flight number: " . $FlightNumber . "</br>";

		$Takeoff = trim ( fgetss ( $fileptr, 512 ) );
		//$Takeoff = convert(datetime, $timeStamp);
		 $Takeoff = date_format($Takeoff, 'G:i'); 
		 echo "Takeoff: " . $Takeoff . "</br>";

		$Airline = trim ( fgetss ( $fileptr, 512 ) );
		echo "airline: " . $Airline . "</br>";
		
		$Origin = trim ( fgetss ( $fileptr, 512 ) );
	    echo "Origin: " . $Origin . "</br>";
		
		$Destination = trim ( fgetss ( $fileptr, 512 ) );
		echo "Destination: " . $Destination . "</br>";
		
		
		$sql = "INSERT INTO `flights` (FlightNumber, Takeoff, Airline, Origin, Destination)
		VALUES ('$FlightNumber', '$Takeoff', '$Airline', '$Origin', '$Destination')";

		if ($db->query ( $sql ) === FALSE) {
			echo "Error with Tickets: " . $sql . "<br>" . $db->error;
		}
	}
}

flock($fileptr, LOCK_UN);
fclose($fileptr);


?>