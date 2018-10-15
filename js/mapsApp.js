if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (polozenie) {
        var szer = polozenie.coords.latitude;
        var dlug = polozenie.coords.longitude;

        var koord = new google.maps.LatLng(szer, dlug);

        var opcje = {
            zoom: 15,
            center: koord,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var mapa = new google.maps.Map(document.getElementById("mapsKontener"), opcje);

        var marker = new google.maps.Marker({
            position: koord,
            map: mapa,
            title: "Jesteś tutaj"
        });
    });
}else{
    alert("Brak geolokalizacji");
}