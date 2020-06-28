/* 1. Grab the input value */

	var input="gifs";
  searchGiphy(input);
document.querySelector(".js-go").addEventListener('click',function(){
input = document.querySelector("input").value;
  searchGiphy(input);
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
input = document.querySelector("input").value;

  // if the key ENTER is pressed...
            searchGiphy(input);
            //pushToDOM(input);
});

/* 2. do the data stuff with the API */
function searchGiphy(input) {


var url = "https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=DB2qbWdARzbOwjeKFWGZFsZW4Vg25Erd";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  pushToDOM(data);

});


}

/* 3. Show me the GIFs */


function pushToDOM(input) {

var container = document.querySelector(".js-container");
container.innerHTML=null;
  var response = JSON.parse(input);
  var imageURLs = response.data;
  imageURLs.forEach(function(image){
        var src= image.images.fixed_height.url;
        var container = document.querySelector(".js-container");
        container.innerHTML += "<img src=\""+src+"\" class=\"container-image\">";

  });

}
