var Themes = ["","blue","brown","green","purple","red"];

var Div = document.createElement("div");
Div.style="text-align:center";
var S = document.createElement("select");
S.id = "ChangeTheme";
Div.appendChild(S);

document.body.insertBefore(Div,document.body.children[0]);
for(var t in Themes){

  var o = document.createElement("option");

  o.innerHTML = Themes[t];

  document.getElementById("ChangeTheme").appendChild(o);
}

document.getElementById("ChangeTheme")
.addEventListener("change",function(){

  alert("Change theme to:"+this.value);

  window.open("../"+this.value+"/index.html");

});

/*
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});
*/

setInterval(function(){
  document.getElementById("colorbox").style.display="none";

  if(document.getElementById("cboxOverlay"))
  document.body.removeChild(document.getElementById("cboxOverlay"))
},100);
/*
if(!=-1){

}
*/
