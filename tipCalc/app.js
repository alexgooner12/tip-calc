let bill, tip, people;
document.querySelector(".calc").onchange = function() {
    bill = Number(document.getElementById("billAmount").value);
    tip = document.getElementById("tipInput").value;
    people = document.getElementById("customers").value;
    document.getElementById("tipOutput").textContent = `${tip} %`;
    document.getElementById("customersValue").textContent = people;
    calc();
}

function calc() {
    const b = (bill / people) + (bill / people * tip / 100);
    const t = (bill / people * tip / 100);
    document.getElementById("tipperPerson").textContent = t.toFixed(2) + `$`;
    document.getElementById("billperPerson").textContent = b.toFixed(2)+ `$`;  
}

