console.log('Correcto');

function guardar(){

    var _micro = document.getElementById("microchip").value;
    var _species = document.getElementById("species").value;
    var _Sex = document.getElementById("sex").value;
    var _Size = document.getElementById("size").value;
    var _PotentDangerous = document.getElementById("PotentDangerous").value;
    var _Neighborhood = document.getElementById("Neighborhood").value;

    var fila=("<tr><td>"+_micro+"</td><td>"+_species+"</td><td>"+_Sex+"</td><td>"+_Size+"</td></tr>"+_PotentDangerous+"</td><td>"+_Neighborhood+"</td></tr>");
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("BTN").appendChild(btn);
}
function cargarDatos(){
    const data = new XMLHttpRequest();
    data.open('GET','csvjson',true),
    data.send();
    data.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
                let res = document.querySelector('#BTN');
                res.innerHTML='';
                for (let item of datos ) {
                    res.innerHTML +=`
                    <tr>
                        <td> ${item.microchip} </td>
                        <td> ${item.species} </td>
                        <td> ${item.sex} </td>
                        <td> ${item.size} </td>
                        <td> ${item.potentDangerous} </td>
                        <td> ${item.neighborhood} </td>
                    </tr>
                    `
                }
        }
    }
}
    
var btn =  document.querySelector('#boton');
if(btn)
{
    btn.addEventListener("click",cargarDatos);
}

    function RenderizarTabla(dataJsonParaRender) {
        var tabla = $("#tabla");
        var tabla = $("#tabla").html("");
        $.each(dataParaRender, function (rowIndex, r) {
            var row = $("<tr/>");
            var myCustomIndex = ["columna1", "columna3", "columna4", "columna8", "columna11"];
            myCustomIndex.forEach(function (index, value) {
                row.append($("<td/>").text(r[index]));
            });
            row.append($("<td/>")
                .append($('<button/>', {
                    text: 'Seleccionar',
                    click: function () {
                        alert('!Seleccionado!');
                    }
                })));
            tabla.append(row);
        });
    }
    function filtrar() {
        var input, filter, tabla, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("BTN");
        tr = tabla.getElementsByTagName("tr");
        for (i = 0; j < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
            }
    }
    
    