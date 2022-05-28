var addPersonButton = document.getElementById("add-person");
var peopleTableBody = document.getElementById("people-list").getElementsByTagName("tbody")[0];
var cantidades = document.getElementById("cant");
var precios = document.getElementById("prec");
var total;
function total(){
    total = cantidades + precios;
}

function addPerson(){
    let row = peopleTableBody.insertRow();
    let colnumero = row.insertCell(0);
    let colprod = row.insertCell(1);
    let colcant = row.insertCell(2);
    let colageprec = row.insertCell(3);
    let coltotal = row.insertCell(4)
    let colbutton = row.insertCell(5);

    colnumero.innerHTML = document.getElementById("numero").value;
    colprod.innerHTML = document.getElementById("prod").value;  
    colcant.innerHTML = document.getElementById("cant").value;
    colageprec.innerHTML = document.getElementById("prec").value;
    coltotal.innerHTML= document.getElementById("total").value;
    colbutton.innerHTML = "<button type='button' onclick='deletePerson(this)'>Eliminar</button>";

}
function deletePerson(sender){
    if(confirm("¿Desea eliminar?")){
        let rowIndex = sender.parentNode.parentNode.rowIndex;
        peopleTableBody.deleteRow(rowIndex -1);
    }

}
addPersonButton.onclick = function(){
    addPerson();
} 