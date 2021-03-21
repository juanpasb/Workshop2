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
    document.getElementById("tabla").appendChild(btn);
}



    var csv = 'csv.json';
    var request = new XMLHttpRequest();
    request.open('GET','csv.json', true);
    request.responseType = 'json';
    request.send();
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
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
                `

            }
        }
    }
    function RenderizarTabla(dataJsonParaRender) {
        var tabla = $("#res");
        var tabla = $("#res").html("");
        $.each(dataParaRender, function (rowIndex, r) {
            var row = $("<tr/>");
            //Aqui viene el detalle:  
            //el JSON puede estar desordenado y lo forzamos a trabajar con el orden que definamos
            var myCustomIndex = ["columna1", "columna3", "columna4", "columna8", "columna11"];
            myCustomIndex.forEach(function (index, value) {
                row.append($("<td/>").text(r[index]));
            });
            //Ahora que ya tenemos toda nuestra data mostrada en un HTML, procedemos a agregar un boton para alguna operacion
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
    
    