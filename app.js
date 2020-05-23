// Función para convertir coordenades de DD a DGM

function convDDToDMS(degree) {
    var output = {};
    output.deg = 0|(degree<0?degree=-degree:degree);
    output.min = 0|degree%1*60;
    output.sec = (0|degree*60%1*6000)/100;
    return output;
}

// Conexión con el botón del DOM HTML

var botonToDMS = document.querySelector("#botonToDMS");

// Generación de lat

function printLatDMS(){
    var lat = (document.getElementById("lat_DD").value).replace(/\s/g, "").replace(",", ".");
    var latDMS = convDDToDMS(lat);
    document.getElementById("lat_DMS").innerHTML = (' → ' + latDMS.deg +'º ' + latDMS.min + "' " + latDMS.sec + '" '+ (lat > 0 ? 'N' : 'S'));
    return latDMS;
} 

botonToDMS.addEventListener("click", printLatDMS);

// Generación de lon

function printLonDMS(){
    var lon = (document.getElementById("lon_DD").value).replace(/\s/g, "").replace(",", ".");
    var lonDMS = convDDToDMS(lon);
    document.getElementById("lon_DMS").innerHTML = (' → ' + lonDMS.deg +'º ' + lonDMS.min + "' " + lonDMS.sec + '" '+ (lon > 0 ? 'E' : 'W'));
    return lonDMS;
}

botonToDMS.addEventListener("click", printLonDMS);

// Resetear valores

var botonReset1 = document.querySelector("#botonReset1")

botonReset1.addEventListener("click", Reset1);

function Reset1(){
    var empty1 = "";
    document.getElementById('lat_DD').value = empty1; 
    document.getElementById('lon_DD').value = empty1;
    document.getElementById('lat_DMS').innerHTML = empty1;
    document.getElementById('lon_DMS').innerHTML = empty1;
  }

  // Conexión con el botón del DOM HTML

var botonToDMS = document.querySelector("#botonToDD");

        // Funciones para convertir coordenades de DGM a DD//
// Generación de lat

function printLatDD(){
    var lat2 = (document.getElementById("lat_DMS2").value).replace(",", ".");
    var coordSplit = lat2.split(" ");
    var degreesLat = 0|(parseFloat(coordSplit[0]));
    var minutesLat = 0|(parseFloat(coordSplit[1]));
    var secondsLat = 0|(parseFloat(coordSplit[2]));

    if (degreesLat<0) {
        var latDD = - parseFloat(coordSplit[0])+parseFloat((coordSplit[1]/60)+parseFloat((coordSplit[2]/3600))); 
    } else {
        var latDD = parseFloat(coordSplit[0])+parseFloat((coordSplit[1]/60)+parseFloat((coordSplit[2]/3600))); 
    }

    if (isNaN(latDD)) {
        document.getElementById("lat_DD2").innerHTML = 
        alert("¡ATENCIÓN! Es necesario introducir en el campo de la LATITUD los 3 parámetros de la coordenada (grados, minutos y segundos). Debes poner un 0 en los parámetros sin valor.");
        document.getElementById("lat_DD2").innerHTML = "?";
    } else {
        document.getElementById("lat_DD2").innerHTML = (' → ' + latDD.toFixed(8) + (degreesLat > 0 ? ' N' : ' S'));
        return latDD;        
    }
} 

botonToDD.addEventListener("click", printLatDD);

    // Generación de lon

function printLonDD(){

    var lon2 = (document.getElementById("lon_DMS2").value).replace(",", ".");
    var coordSplitL = lon2.split(" ");
    var degreesLon = parseFloat(coordSplitL[0]);
    var minutesLon = parseFloat(coordSplitL[1]);
    var secondsLon = parseFloat(coordSplitL[2]);
    
    if (degreesLon<0) {
        var lonDD = - parseFloat(coordSplitL[0])+parseFloat((coordSplitL[1]/60)+parseFloat((coordSplitL[2]/3600))); 
    } else {
        var lonDD = parseFloat(coordSplitL[0])+parseFloat((coordSplitL[1]/60)+parseFloat((coordSplitL[2]/3600))); 
    }

    if (isNaN(lonDD)) {
        document.getElementById("lon_DD2").innerHTML = 
        alert("¡ATENCIÓN! Es necesario introducir en el campo de la LONGITUD los 3 parámetros de la coordenada (grados, minutos y segundos). Debes poner un 0 en los parámetros sin valor.");
        document.getElementById("lon_DD2").innerHTML = "?";
    } else {
        document.getElementById("lon_DD2").innerHTML = (' → ' + lonDD.toFixed(8) + (degreesLon > 0 ? ' E' : ' W'));
        return lonDD;   
    }} 

botonToDD.addEventListener("click", printLonDD);
 
// Resetear valores

var botonReset2 = document.querySelector("#botonReset2")

botonReset2.addEventListener("click", Reset2);

function Reset2(){
    var empty2 = "";
    document.getElementById('lat_DMS2').value = empty2; 
    document.getElementById('lon_DMS2').value = empty2;
    document.getElementById('lat_DD2').innerHTML = empty2;
    document.getElementById('lon_DD2').innerHTML = empty2;
  }


/// Segunda tabla de conversión///

// Conexión con el botón del DOM HTML

var botonToDMS = document.querySelector("#botonToDD");

// Funciones para convertir coordenades de DGM a DD//

// Generación de lat

function printLatDD(){
    var lat2 = (document.getElementById("lat_DMS2").value).replace(",", ".");
    var coordSplit = lat2.split(" ");
    var degreesLat = 0|(parseFloat(coordSplit[0]));
    var minutesLat = 0|(parseFloat(coordSplit[1]));
    var secondsLat = 0|(parseFloat(coordSplit[2]));

    if (degreesLat<0) {
        var latDD = - parseFloat(coordSplit[0])+parseFloat((coordSplit[1]/60)+parseFloat((coordSplit[2]/3600))); 
    } else {
        var latDD = parseFloat(coordSplit[0])+parseFloat((coordSplit[1]/60)+parseFloat((coordSplit[2]/3600))); 
    }

    if (isNaN(latDD)) {
        document.getElementById("lat_DD2").innerHTML = 
        alert("¡ATENCIÓN! Es necesario introducir en el campo de la LATITUD los 3 parámetros de la coordenada (grados, minutos y segundos). Debes poner un 0 en los parámetros sin valor.");
        document.getElementById("lat_DD2").innerHTML = "?";
    } else {
        document.getElementById("lat_DD2").innerHTML = (' → ' + latDD.toFixed(8) + (degreesLat > 0 ? ' N' : ' S'));
        return latDD;        
    }
} 

botonToDD.addEventListener("click", printLatDD);

// Generación de lon

function printLonDD(){

    var lon2 = (document.getElementById("lon_DMS2").value).replace(",", ".");
    var coordSplitL = lon2.split(" ");
    var degreesLon = parseFloat(coordSplitL[0]);
    var minutesLon = parseFloat(coordSplitL[1]);
    var secondsLon = parseFloat(coordSplitL[2]);
    
    if (degreesLon<0) {
        var lonDD = - parseFloat(coordSplitL[0])+parseFloat((coordSplitL[1]/60)+parseFloat((coordSplitL[2]/3600))); 
    } else {
        var lonDD = parseFloat(coordSplitL[0])+parseFloat((coordSplitL[1]/60)+parseFloat((coordSplitL[2]/3600))); 
    }

    if (isNaN(lonDD)) {
        document.getElementById("lon_DD2").innerHTML = 
        alert("¡ATENCIÓN! Es necesario introducir en el campo de la LONGITUD los 3 parámetros de la coordenada (grados, minutos y segundos). Debes poner un 0 en los parámetros sin valor.");
        document.getElementById("lon_DD2").innerHTML = "?";
    } else {
        document.getElementById("lon_DD2").innerHTML = (' → ' + lonDD.toFixed(8) + (degreesLon > 0 ? ' E' : ' W'));
        return lonDD;   
    }} 

botonToDD.addEventListener("click", printLonDD);
 
// Resetear valores

var botonReset2 = document.querySelector("#botonReset2")

botonReset2.addEventListener("click", Reset2);

function Reset2(){
    var empty2 = "";
    document.getElementById('lat_DMS2').value = empty2; 
    document.getElementById('lon_DMS2').value = empty2;
    document.getElementById('lat_DD2').innerHTML = empty2;
    document.getElementById('lon_DD2').innerHTML = empty2;
  }