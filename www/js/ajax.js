function myFn(lat, lon){

//shelter1 sort by distance
$.getJSON("http://somethingsimple.dk/Projects/mobileapp/getshelters.php?lat="+lat+"&lon="+lon+"&callback=?", 
            function(data) {                
               //loop
                $.each(data, function(k,v){
                   
            var listelement = document.createElement("li");
            var linkelement = document.createElement("a");
            var headertitle = document.createElement("h1");
            var paragraphelement = document.createElement("p");
            var imgelement = document.createElement("img");
            
            //image source
            var imgsrc = v.imgsrc;
            imgelement.src = imgsrc;
            //link source
            linkelement.setAttribute('href', '#cafeclara');
            
            //assigning classes to elements
            listelement.className = listelement.className + "ui-li-has-thumb";
            linkelement.className = linkelement.className + "ui-btn ui-btn-icon-right ui-icon-carat-r";
           
            textnodedistance = document.createTextNode(v.distance + ' km væk');
            textnodetitle = document.createTextNode(v.sheltername);
            
            paragraphelement.appendChild(textnodedistance);
            headertitle.appendChild(textnodetitle);
            
            //appending elements to list
            liappend = document.getElementById("shelters1").appendChild(listelement);
            anchorappend = liappend.appendChild(linkelement);
            imgappend = anchorappend.appendChild(imgelement);
            headertitleappend = anchorappend.appendChild(headertitle);
            paragraphappend = anchorappend.appendChild(paragraphelement);
            
                    
                    
                });
               
            });

//shelter2 sort alphabetically
$.getJSON("http://somethingsimple.dk/Projects/mobileapp/getshelters.php?alphabetical&callback=?", 
            function(data) {                
    
                $.each(data, function(k,v){
               
            var listelement = document.createElement("li");
            var linkelement = document.createElement("a");
            var headertitle = document.createElement("h1");
            var imgelement = document.createElement("img");
            
            //image source
            var imgsrc = v.imgsrc;
            imgelement.src = imgsrc;
            //link source
            linkelement.setAttribute('href', '#cafeclara');
                    
                    
            //assigning classes to elements
            listelement.className = listelement.className + "ui-li-has-thumb";
            linkelement.className = linkelement.className + "ui-btn ui-btn-icon-right ui-icon-carat-r";
           
              headertitle = document.createTextNode(v.sheltername);
            
            //appending elements to list
            liappend = document.getElementById("shelters2").appendChild(listelement);
            anchorappend = liappend.appendChild(linkelement);
            imgappend = anchorappend.appendChild(imgelement);
            headertitleappend = anchorappend.appendChild(headertitle);
                    
                    
                });
               
            });



    }
//Google Maps
var getShelters= function(){
 //mapview hvor man kigger fra i google maps + zoom
    var mapProp = {center:new google.maps.LatLng(55.700196, 12.545456), zoom:12, mapTypeId:google.maps.MapTypeId.ROADMAP};
    
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);    
      
    
      //Marker
      marker=new google.maps.Marker({position:new google.maps.LatLng(55.66627,12.61167)});
      marker.setMap(map);
      marker1=new google.maps.Marker({position:new google.maps.LatLng(55.67048,12.58811)});
      marker1.setMap(map);
      marker2=new google.maps.Marker({position:new google.maps.LatLng(55.68914,12.58394)});
      marker2.setMap(map);
      marker3=new google.maps.Marker({position:new google.maps.LatLng(55.66996,12.55789)});
      marker3.setMap(map);
      marker4=new google.maps.Marker({position:new google.maps.LatLng(55.68419,12.56876)});
      marker4.setMap(map);
    
    var contentString = 'Holmbladsgade 73 2300 Kbh. S.';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var contentString = 'Ovengaden oven vandet 6A 1415 Kbh. K.';
    var infowindow1 = new google.maps.InfoWindow({
        content: contentString
    });
    var contentString = 'Rigensgade 21 1316 Kbh. K.';
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString
    });
    var contentString = 'Gasværksvej 24 1656 Kbh. V.';
    var infowindow3 = new google.maps.InfoWindow({
        content: contentString
    });
    var contentString = 'Rømersgade 17 1362 København K.';
    var infowindow4 = new google.maps.InfoWindow({
        content: contentString
    });
 
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
    google.maps.event.addListener(marker1, 'click', function() {
      infowindow1.open(map,marker1);
    });
    google.maps.event.addListener(marker2, 'click', function() {
      infowindow2.open(map,marker2);
    });
    google.maps.event.addListener(marker3, 'click', function() {
      infowindow3.open(map,marker3);
    });
    google.maps.event.addListener(marker4, 'click', function() {
      infowindow4.open(map,marker4);
    });


}


//Cafe Clara
var getShelters1= function(lat,lon){
 
    var mapProp = {center:new google.maps.LatLng(55.700196, 12.545456), zoom:12, mapTypeId:google.maps.MapTypeId.ROADMAP};
    
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);    
      
    
      //Marker
      marker=new google.maps.Marker({position:new google.maps.LatLng(55.66627,12.61167)});
      marker.setMap(map);


}