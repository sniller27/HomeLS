$.ajax({	
		type: 'GET',
		url: 'getshelters.php?lat=55.78537&lon=12.523333',	
        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
		dataType: 'json',
		cache: false,
		timeout: 7000,
		success: function(data) {
            
            for(var k in data.rows) {
		    var listelement = document.createElement("li");
            var linkelement = document.createElement("a");
            var imgelement = document.createElement("img");
            imgelement.src = "http://i0.kym-cdn.com/photos/images/newsfeed/000/051/726/17-i-lol.jpg?1318992465";
            
            //assigning classes to elements
            listelement.className = listelement.className + "ui-li-has-thumb";
            linkelement.className = linkelement.className + "ui-btn ui-btn-icon-right ui-icon-carat-r";
            
            
            
           // node.className = node.className + "ui-li-has-thumb ui-last-child";
           // var textnode = document.createTextNode(json.rows[k][i]);
            
        
            //textnode = document.createTextNode(json.rows[k][i]);
            textnode = document.createTextNode(data.rows[k][0]);
            
            linkelement.appendChild(textnode);
            
            
            //appending elements to list
           
            liappend = document.getElementById("shelters1").appendChild(listelement);
            anchorappend = liappend.appendChild(linkelement);
            imgappend = anchorappend.appendChild(imgelement);
            
            
           // console.log(data);
         //   console.log(data.rows[0][0]);
          //  $('.loading').hide();
        //    $('#signup')[0].reset();
            //sweet alert
           // swal(data, "", "success")			
            }
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
            //swal({   title: "Der er opstået en fejl",   text: "",   type: "warning" });
		}
});	








//page 2
var getJSON1 = function(url, successHandler, errorHandler) {
  var xhr = typeof XMLHttpRequest != 'undefined'
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('get', url, true);
  xhr.onreadystatechange = function() {
    var status;
    var data;
    // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
    if (xhr.readyState == 4) { // `DONE`
      status = xhr.status;
      if (status == 200) {
       // data = JSON.parse(xhr.responseText);
    //    successHandler && successHandler(data);
          
          var json_string = xhr.responseText;
        var json = JSON.parse(json_string);
          
        for(var k in json.rows) {
            //creating elements
            var listelement = document.createElement("li");
            var linkelement = document.createElement("a");
            var imgelement = document.createElement("img");
            imgelement.src = "http://i0.kym-cdn.com/photos/images/newsfeed/000/051/726/17-i-lol.jpg?1318992465";
            
            //assigning classes to elements
            listelement.className = listelement.className + "ui-li-has-thumb";
            linkelement.className = linkelement.className + "ui-btn ui-btn-icon-right ui-icon-carat-r";
            
            
            
           // node.className = node.className + "ui-li-has-thumb ui-last-child";
           // var textnode = document.createTextNode(json.rows[k][i]);
            
        
            //textnode = document.createTextNode(json.rows[k][i]);
            textnode = document.createTextNode(json.rows[k][0]);
            
            linkelement.appendChild(textnode);
            
            
            //appending elements to list
           
            liappend = document.getElementById("shelters2").appendChild(listelement);
            anchorappend = liappend.appendChild(linkelement);
            imgappend = anchorappend.appendChild(imgelement);
           // document.getElementsByClassName("shelterelement").appendChild(linkelement);
           // document.getElementsByClassName("shelterelement").appendChild(listelement);
              
        
        }
          
        //alert(json.rows[0][0] + ' ' + json.rows[0][1], "Name 1");
        //alert(json.rows[1][0] + ' ' + json.rows[1][1], "Name 2");
       // intel.xdk.notification.alert(json.rows[0][0], "Name 1");
          
      } else {
        errorHandler && errorHandler(status);
      }
    }
  };
  xhr.send();
};

var lat = 55.78537;
var lon = 12.523333;
//getJSON('shelter.json', function(data) 

    getJSON1('getshelters.php?lat='+lat+'&lon='+lon+'&alphabetical', function(data) {
  alert(data.title);
}, function(status) {
  alert('Something went wrong.');
});
    
