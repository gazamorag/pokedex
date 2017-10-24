function pokedex(){
 var pokemones = [
   {
     "id": "001",
     "name":"Pikachu",
     "photo":"01",
     "type": "electric"
   },
   {
     "id": "002",
     "name":"Charmander",
     "photo":"02",
     "type": "dragon"
   },
   {
     "id": "003",
     "name":"Squirtle",
     "photo":"03",
     "type": "fairy"
   },
   {
     "id": "004",
     "name":"Bulbasaur",
     "photo":"04",
     "type": "bug"
   }
 ];
var id = "";
var name = "";
var photo = "";
var type = "";



var contentPhoto = "";


var contentInfo = "";
var infoName = "";
var infoId = "";
var infoType = "";
var auxDiv = "";

var content ="";


for (var i = 0; i < pokemones.length; i++) {
 id = pokemones[i].id;
 name = pokemones[i].name;
 photo = pokemones[i].photo;
 type = pokemones[i].type;

 console.log(id + name + photo + type);

 contentPhoto = "<div class='photo'>" + "<img src='img/photos/" + photo + ".jpg'>" + "</div>";
 
 infoName = "<h2>" + name  + "</h2>";
 infoId = "<span>" + id + "</span>";
 infoType = "<img src='img/types/" + type + ".png'>";
 auxDiv = "<div class='d-flex justify-content-between'>" + infoId + infoType + "</div>";

 contentInfo= "<div class='info'>" + infoName + auxDiv + "</div>";

 content = content + "<div class='pokemon'>" + contentPhoto + contentInfo + "</div>";



 }

 document.getElementById('container').innerHTML = content;

}