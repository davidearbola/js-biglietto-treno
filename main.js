const kmCost = 0.21;
const discount20 = 1.20;
const discount40 = 1.40;

let km;
let age;
km = document.getElementById("kilometres").value;
age = document.getElementById("user-age").value;
let ticket = (km*kmCost).toFixed(2);


if (age < 18) {
    let ticketDiscount20 = (ticket/discount20).toFixed(2)
    document.getElementById("ticket-discount-20").innerHTML = `Il tuo biglietto costerà: ${ticketDiscount20} €`;
} else if (age > 65) {
    let ticketDiscount40 = (ticket/discount40).toFixed(2)
    document.getElementById("ticket-discount-40").innerHTML = `Il tuo biglietto costerà: ${ticketDiscount40} €`;
} else {
    document.getElementById("ticket-cost").innerHTML = `Il tuo biglietto costerà: ${ticket} €`;
}

document.getElementById("kilometres").value = null;
document.getElementById("user-age").value = null;
// function ticketCost() {
// }

