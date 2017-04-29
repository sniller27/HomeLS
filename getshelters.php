<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once("config.php");

if(isset($_GET['alphabetical'])){
    
    $result = $link->query("select id, imgsrc, sheltername from shelters order by sheltername");
    
}else{
    if(isset($_GET['lat']) && isset($_GET['lon'])){
        
    $lat = $_GET['lat'];
    $lon = $_GET['lon'];
        
    }
    
    
    $result = $link->query("SELECT 
  id, description, imgsrc, sheltername, 
   ROUND(( 6371 * acos( cos( radians($lat) ) * cos( radians( lat ) ) 
   * cos( radians(lng) - radians($lon)) + sin(radians($lat)) 
   * sin( radians(lat)))),1) AS distance 
FROM shelters 
WHERE 1 = 1 -- your specific filtering here 
HAVING distance < 100 
ORDER BY distance");
    
}
$nmr = 0;
$outp =  '{';
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {

    $nmr++;
    $outp .= '
    "shelter'.$nmr.'": {
    
    "id":"'  . $rs["id"] . '", 
    "distance":"'  . $rs["distance"] . '",
    "imgsrc":"'  . $rs["imgsrc"] . '",
    "sheltername":"'  . $rs["sheltername"] . '"
    
    },';
  
    
}
$outp = (substr($outp,-1) == ',') ? substr($outp, 0, -1) : $outp;

$outp .= '}';


$link->close();


echo($_GET['callback'].'('.$outp.')');
?>