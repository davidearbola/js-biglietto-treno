const kmCost = 0.21;
const discount20 = 1.20;
const discount40 = 1.40;

function ticketCost() {

let km;
let age;
km = document.getElementById("kilometres").value;
age = document.getElementById("user-age").value;
let ticket = (km*kmCost).toFixed(2);


if (age < 18) {
    let ticketDiscount20 = (ticket/discount20).toFixed(2)
    document.getElementById("ticket-cost").innerHTML = `Il tuo biglietto costerà: ${ticketDiscount20} €`;
} else if (age >= 18 && age <= 65){
    document.getElementById("ticket-cost").innerHTML = `Il tuo biglietto costerà: ${ticket} €`;
} else if (age > 65) {
    let ticketDiscount40 = (ticket/discount40).toFixed(2)
    document.getElementById("ticket-cost").innerHTML = `Il tuo biglietto costerà: ${ticketDiscount40} €`;
} else if (age == null) {
    document.getElementById("ticket-cost").innerHTML = "";
}

document.getElementById("kilometres").value = null;
document.getElementById("user-age").value = null;

}

