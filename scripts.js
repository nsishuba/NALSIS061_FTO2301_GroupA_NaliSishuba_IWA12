const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const status1 = document.querySelector("#book1 .status")
const reserve1 = document.querySelector("#book1 .reserve")
const checkout1 = document.querySelector("#book1 .checkout")
const checkin1 = document.querySelector("#book1 .checkin")

const status2 = document.querySelector("#book2 .status")
const reserve2 = document.querySelector("#book2 .reserve")
const checkout2 = document.querySelector("#book2 .checkout")
const checkin2 = document.querySelector("#book2 .checkin")

const status3 = document.querySelector("#book3 .status")
const reserve3 = document.querySelector("#book3 .reserve")
const checkout3 = document.querySelector("#book3 .checkout")
const checkin3 = document.querySelector("#book3 .checkin")

checkin1.style.color = "black";
status1.style.color = STATUS_MAP.overdue.color
STATUS_MAP.overdue.canReserve == true ? reserve1.enabled = false : reserve1.disabled = true
STATUS_MAP.overdue.canCheckout == true ? checkout1.enabled = false : checkout1.disabled = true
STATUS_MAP.overdue.canCheckIn == true ? checkin1.enabled = true : checkin1.disabled = false

checkin2.style.color = "black";
status2.style.color = STATUS_MAP.reserved.color
STATUS_MAP.reserved.canReserve == true ? reserve2.enabled = false : reserve2.disabled = true
STATUS_MAP.reserved.canCheckout == true ? checkout2.enabled = true : checkout2.disabled = false
STATUS_MAP.reserved.canCheckIn == true ? checkin2.enabled = false : checkin2.disabled = true

checkin3.style.color = "black";
status3.style.color = STATUS_MAP.shelf.color
STATUS_MAP.shelf.canReserve == true ? reserve3.enabled = true : reserve3.disabled = false
STATUS_MAP.shelf.canCheckout == true ? checkout3.enabled = true : checkout3.disabled = false
STATUS_MAP.shelf.canCheckIn == true ? checkin3.enabled = false : checkin3.disabled = true