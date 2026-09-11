var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];
function isLetters(name){return/^[A-Za-z ]+$/.test(name)}
let count = 0

function DisplayTrips() {
    for(let trip of trips){
        console.log(
            "\n",
            "====== AVAILABLE TRIPS ======", "\n",
            "•", trip.id, trip.departure,"→", trip.destination, "\n",
            "Departure :", trip.departureTime,"\n",
            "Arrival :", trip.arrivalTime, "\n",
            "Price :", trip.price, "DH" , "\n",
            "Available Places :", trip.availableSeats
        )
    }
}


function BuyTicket() {
    let getTripById
    let passengerName
    let newTicket
    let trip;
    do {
    passengerName = prompt("Passenger Name :");
    getTripById = Number(prompt("Trip Identety :"));
    if (!isLetters(passengerName)) {
        console.log("====Invalid Name====")
        continue;
    }
    for (let trip of trips) {

        if ( getTripById=== trip.id) {
            if(trip.availableSeats == 0){
                console.log("==== No Seats Eemaining ====");
                
            }
            let SeatNumber = 51 - trip.availableSeats
            count++;
            newTicket = {
                id : count,
                passengerName : passengerName,
                seatNumber :  SeatNumber,
                price : trip.price ,
            }
            tickets.push(newTicket)
            console.table(newTicket)
            trip.availableSeats --;
            break
        }
        }
    if (getTripById != trips.id) {
        console.log("==== Invalid Trip Id ====");
    }

    } while (!isLetters(passengerName) || isNaN(getTripById) || getTripById > trips.id)
    return newTicket;
}


function displayTickets() {
    for( let ticket of tickets){
        let trip = trips.find(trip => trip.id ==ticket.tripId || trip.id == ticket.id)
        console.log(
            "========= TICKETS =========","\n",
            "Ticket •",ticket.id, "\n",
            "Passenger : ",ticket.passengerName, "\n",
            "Trip :",trip.departure," → ",trip.destination,"\n",
            "Place : ", trip.availableSeats, "\n",
            "Price : ", ticket.price,)
    }
    return
}


function cancelTicket() {
    let getTicketById = Number(prompt("Enter The Ticket Id To Delete"))
    for(let ticket of tickets){
        if (ticket.id === 0 || ticket.id != getTicketById){
            console.log("====No Valid Tickets");
            continue}
        if(ticket.id === getTicketById){
            tickets.splice(ticket,1)
            break}
    }
    return
}

function searchTicket() {
    let getTicketByName

    do{  
        getTicketByName = prompt("Passenger Name :")
    
        if(!isLetters(getTicketByName)){
            console.log("====Invalid City===");
            continue
        }else{ console.log("====Your Tickets ===");}
            
        for(let ticket of tickets){
            if (getTicketByName.toLowerCase() ===ticket.passengerName.toLowerCase() ){
                for(let trip of trips){

                    console.log(
                        "Ticket •",ticket.id,"\n",
                        "Passenger :" , ticket.passengerName,"\n",
                        "Trip :" ,trip.departure, trip.destination,"\n",
                        "Place :"  ,trip.availableSeats,"\n",
                        "Price :", ticket.price,"\n"
                        
                    );
                    break
                }
            }
        }
            

    }while(!isLetters(getTicketByName))
    return 
}

function filterTrips() {
 let getCity
 let filteredCity
 do {
    getCity = prompt("Departure City :")
    
} while (!isLetters(getCity))

    for(let trip of trips){
        if(getCity.toLowerCase() === trip.departure.toLowerCase() ){
            console.log(
                "Depart City :",trip.departure,"\n\n",
                "Results","\n\n",
                trip.departure, "→",trip.destination,":",trip.price,"DH","\n",
                "=".repeat(33)
            )
            
        }

    }
    return 
}


function SortTrips() {
    let swap
    for(let i = 0; i < trips.length;i++)
        for(let j = 0;j < trips.length-1;j++){
            if(trips[j].price > trips[j+1].price){
                swap = trips[j]
                trips[j] = trips[j+1]
                trips[j+1] = swap

            }
    }
    console.table(trips)
}


function main() {
    let n;
    do {
        console.log(
        "=".repeat(33), "\n",
        "        RAILWAY MANAGER        ", "\n",
        "=".repeat(33),"\n",
        "1. Display trips", "\n",
        "2. Buy a ticket","\n",
        "3. Display tickets", "\n",
        "4. cancel a ticket", "\n",
        "5. Search for ticket", "\n",
        "6. filter trips", "\n",
        "7. Sort trips", "\n",
        "0. EXIT","\n",
        "=".repeat(33)
        )
        n = Number(prompt("Type your choice (1-7)"))
        switch (n) {
            case 1:
                DisplayTrips()
                break;
            case 2:
                console.log(BuyTicket());
                //  BuyTicket()
                break;
            case 3:
                displayTickets()
                break;
            case 4:
                cancelTicket()
                break;
            case 5:
                searchTicket()
                break;
            case 6:
                filterTrips();
                break;
            case 7:
                SortTrips()
                break;
            case 0:break;

            default:
                 prompt("Invalid Choice :  Press 'ENTER' ")
                break;
        }
    } while (n!=0)
}

main()