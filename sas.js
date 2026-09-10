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
function isLetters(name){return/^[A-Za-z]+$/.test(name)}
let count = 0
//1
function DisplayTrips() {
    for(let trip of trips){
        console.log(
            "=== TRAJETS DISPONIBLESS ===", "\n",
            "•", trip.id, trip.departure,"→", trip.destination, "\n",
            "Départ :", trip.departureTime,"\n",
            "Arrivée :", trip.arrivalTime, "\n",
            "Prix :", trip.price, "DH" , "\n",
            "Places disponibles :", trip.availableSeats
        )
    }
}
//2
function BuyTicket() {
    let passengerName
    let getTripById;
    let i = 0
    let newTicket
    do{

        for(let trip of trips){
            if(trips[i].id === getTripById ){
                count++;
                i++
                 newTicket = {
                    id : count,
                    passengerName : prompt("Nom du passager :"),
                    tripId : count,
                    seatNumber : count,
                    price : trip[i].price + " DH"
                }
                getTripById = Number(prompt("Identifiant du trajet :"))
                tickets.push(newTicket)
                break;
            }

        }
    }while (!isLetters(passengerName) || isNaN(trips.id)){
    console.log(newTicket);

    }
    
}



//3
//do invalid ticket if  ticket id is not available and in other functions
function displayTickets() {
    for( let ticket of tickets){
        console.log(
            "=== TICKETS ===", "\n",
            "Ticket •",ticket.id, "\n", //ganerated
            "Passager : ",ticket.passengerName, "\n", //push from BuyTickets
            "Trajet :",ticket.departure," → ",ticket.destination,"\n", // edxisted
            "Place : ", ticket.place, // most be generated
            "Prix : ", ticket.price,//existed
        );
    }
}
//4
function cancelTicket() {

    
}
//5
function searchTicket() {
    let getTicketByName = prompt("Nom du passager :")
    let i = 0
    let searchedTicket
    for(let ticket of tickets){
        if (tickets[i].passengerName === getTicketByName){
            i++
            searchedTicket = {
                    id : ticket[i].id,
                    Passager : ticket[i].passengerName,
                    Trajet   : ticket[i].departure + ticket[i].destination,
                    Place    : ticket[i].place,
                    Prix     : ticket[i].price
                }
        }
    }
    console.log(searchedTicket);
    
}
//6
function filterTrips() {
    let i = 0
    let depart = isLetters(prompt("Ville de départ :"))
    for(let trip of trips){
        if( trip[i].departure === depart){
            i++
            console.log(
                "Ville de départ :",trip[i].departure ,"\n",
            "\n",
            "\n",
            "Résultat :",
            depart , "→",trip[i].destination,":",trip[i].price, "DH"
        );
            
        }
    }

    
}
//7
function SortTrips() {
    console.log("searchTicket");
    
}

function main() {
    let choice;
    do {
        console.log("=".repeat(33));
        console.log("        RAILWAY MANAGER        ");
        console.log("=".repeat(33));
        console.log("1. Display trips");//1. Afficher les trajets
        console.log("2. Buy a ticket"); //2. Acheter un ticket
        console.log("3. Display tickets"); //3. Afficher les tickets
        console.log("4. cancel a ticket"); //4. Annuler un ticket
        console.log("5. Search for ticket");//5. Rechercher un ticket
        console.log("6. filter trips");// 6. Filtrer les trajets
        console.log("7. Sort trips");//7. Trier les trajets
        console.log("0. EXIT");// 0. Quitter
        console.log("=".repeat(33));
    
        choice = Number(prompt("Type your choice (1-7)"))
        switch (choice) {
            case 1:
                DisplayTrips()
                break;
            case 2:
                BuyTicket()
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
    } while (choice!=0)
}

main()