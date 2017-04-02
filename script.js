
function flight (fNum, fDept, fArrival, fDate, fPassengers) { 
	this.fNum = fNum;
	this.fDept = fDept;
	this.fArrival = fArrival;
	this.fDate = fDate;
	this.fPassengers = [];
}

flightCHNY = new flight(234, "Chicago", "New York", "2017-01-01");
flightNYCH = new flight(345, "New York", "Chicago", "2017-02-02");
flightSFNY = new flight(456, "San Francisco", "New York", "2017-03-03");
flightNYSF = new flight(567, "New York", "San Francisco", "2017-04-04");
flightSFCH = new flight(678, "San Francisco", "Chicago", "2017-05-05");
flightCHSF = new flight(789, "Chicago", "San Francisco", "2017-06-06");

var array = []
array.push(flightCHNY);
array.push(flightNYCH);
array.push(flightSFNY);
array.push(flightNYSF);
array.push(flightSFCH);
array.push(flightCHSF);

//adding passengers to flight
flightCHNY.fPassengers.push("Emily Shu");
flightCHNY.fPassengers.push("Divya Bhaskara");


//Going to add an array of passengers on a specific flight to keep it simple for now
function passenger (pName, pFlight) { 
 	this.pName = pName; 
}

function processFNumberForm() {
    var flightNumber = document.searchByNumber.flightNumber.value;
    var deptDate = document.searchByNumber.deptDate.value;
   
    console.log("flight dept date: "  + deptDate + "fnum " + flightNumber);

    //console.log(document.getElementById("flightInfo").innerHTML);

    //search through array of flight objects to see if flight num matches any

    for (var i = 0; i < array.length; i++) { 
    	console.log(array[i].fNum); //gets the flight numbers of all stored flights
    	if (flightNumber == array[i].fNum) { 
    		//console.log("FLIGHT FOUND!!");	
    		//document.write("FLIGHT FOUND");
    		//DO SOMETHING HERE!
    		displayFlightDetails(array[i]);
    	}
    }   
}


function processLocationForm() { 

	    var departure = document.searchByLocation.departure.value;
	    var arrival = document.searchByLocation.arrival.value;
	    var date = document.searchByLocation.deptDate.value;

	    console.log("Dept: " + departure + "Arrival: " + arrival + "Date: " + date);

	    for (var i = 0; i < array.length; i++) { 
    	//console.log(array[i].fNum); //gets the flight numbers of all stored flights
    	if (departure == array[i].fDept && arrival == array[i].fArrival && date == array[i].fDate) { 
    		//console.log("FLIGHT FOUND!!");	
    		displayFlightDetails(array[i]);
    		//DO SOMETHING HERE!
    	}
    }
}

function displayFlightDetails(flight) { 
	document.write("Flight number " + flight.fNum + " leaving from " + flight.fDept + " and arriving at  " + flight.fArrival + " on " + flight.fDate);
	document.write("<br>");
	console.log(flight.fPassengers);
	if (flight.fPassengers.length == 0) { 
		document.write("There are no passengers registered on AirBae for this flight yet. Be the first!");
		document.write("<br>");

	} else { 
		document.write("Current Passengers on this flight include: " + flight.fPassengers + " ");
		document.write("<br>");


	} 





}





