   function flight (fNum, fDept, fArrival, fDate, fPassengers, fAirline) { 
            this.fNum = fNum;
            this.fDept = fDept;
            this.fArrival = fArrival;
            this.fDate = fDate;
            this.fPassengers = [];
            this.fAirline = fAirline;
          }

      //socialize - do they like to talk, sleep - do they like to sleep, kids - do they have kids, mobility - do they get up often, occasion - conference, concert etc
          function passenger (fname, lname, socialize, sleep, kids, mobility, notes, occasion, seatNumber) {
            this.fname = fname; 
            this.lname = lname;
            this.sleep = sleep;
            this.socialize = socialize;
            this.kids = kids;
            this.mobility = mobility;
            this.notes = notes;
            this.occasion = occasion;
            this.seatNumber = seatNumber;

          }

          flightCHNY = new flight(234, "Chicago", "New York", "2017-01-01", "Delta");
          flightNYCH = new flight(345, "New York", "Chicago", "2017-02-02", "Southwest");
          flightSFNY = new flight(456, "San Francisco", "New York", "2017-03-03", "JetBlue");
          flightNYSF = new flight(567, "New York", "San Francisco", "2017-04-04", "American");
          flightSFCH = new flight(678, "San Francisco", "Chicago", "2017-05-05", "Delta");
          flightCHSF = new flight(789, "Chicago", "San Francisco", "2017-06-06", "American");

          var array = []
          array.push(flightCHNY);
          array.push(flightNYCH);
          array.push(flightSFNY);
          array.push(flightNYSF);
          array.push(flightSFCH);
          array.push(flightCHSF);

          //adding passengers to flight
          pass1 = new passenger ("Emily", "Shu", "yes", "no", "no", "sometimes", "I might nap occasionally but otherwise I love to talk", "Forbes women's entreprenuership conference", "A23")
          flightCHNY.fPassengers.push(pass1);
          pass2 = new passenger ("Divya", "Bhaskara", "no", "yes", "no", "sometimes", "I am coming back from a conference so I will be very tired", "none", "B32") 
          flightCHNY.fPassengers.push(pass2);
          pass3 =  ("Himica", "Kumar", "yes", "no", "no", "rarely", "I would love to get to know people that are headed to the same destination", "Adele concert", "C40")
          flightNYSF.fPassengers.push(pass3);
          pass4 =  ("Shruti", "Mhasawade", "yes", "no", "no", "rarely", "I would love to get to know people that are headed to the same destination", "Adele concert", "C40")
          //Going to add an array of passengers on a specific flight to keep it simple for now
          /*function passenger (pName, pFlight) { 
            this.pName = pName; 
          }*/

          var tempFlightNumber = "";
          var tempDate = "";
          var setTemp = false;
