//
console.log("-");

var Targets = ["a","p","h1","h2","h3","h4","span","li",""];

var CurrentFocus;

function FireEvent(Element,Event){
  alert("Fire Event:"+Event);

 if(CurrentFocus)
  MouseOut(null,CurrentFocus);

}

alert("Double click to edit")

var MouseOut = function(e,This){

  if(!This)
  This = this;

  var PreviousElement = This.getAttribute("PreviousElement");
  var PreviousClass = This.getAttribute("PreviousClass");

  var Element = document.createElement(PreviousElement.toLowerCase());
  Element.className = PreviousClass;

  //if This.innerHTML is null, then This.value
  //otherwise This.innerHTML
  Element.innerHTML = This.innerHTML || This.value;
  This.parentNode.insertBefore(Element,This);
  This.parentNode.removeChild(This);

  //setTimeout(function(){
    Element.addEventListener("dblclick",MouseOver);
  //},2000);

  CurrentFocus = null;

}

var OuterClick =
function(){
  if(CurrentFocus){
    //FireEvent(CurrentFocus,"mouseout");
    document.body.removeEventListener("click",OuterClick);
  }
};

var MouseOver = function(){

  var I = document.createElement("input");

  I.setAttribute("PreviousElement",this.tagName);
  I.setAttribute("PreviousClass",this.className);

  I.value = this.innerHTML || this.value;
  this.parentNode.insertBefore(I,this);
  this.parentNode.removeChild(this);

  I.focus();

  CurrentFocus = I;

  //setTimeout(function(){
  I.addEventListener("mouseout",MouseOut);

  setTimeout(function(){
  document.body.addEventListener("dblclick",OuterClick);
},1500);
  //},2000);
}

var Print2 =   function(){

  //alert("Print")

  //this.removeEventListener("click",Print2);

  return window.print();


}

for(var i in Targets){
  var Elements = document.getElementsByTagName(Targets[i]);
  //console.log(d);
  var Searches = ["innerHTML","alt"];

  var Removes = ["twitter","facebook","download","contact me"];

  for(var e in Elements){

    for(var s in Searches){

      var Deleted = false;

      if(Elements[e]){
        for(var r in Removes){
          if(Elements[e].innerHTML)
          if(Elements[e].innerHTML.toLowerCase().indexOf(Removes[r])!=-1){
            Elements[e].parentNode.removeChild(Elements[e])
            Deleted = true;
          }
        }
      }
      if(Deleted)continue;

    if(Elements[e].setAttribute)
 {
      Elements[e].setAttribute(Searches[s],Elements[e].innerHTML || Elements[e][Searches[s]]);


    if(Elements[e].getAttribute(Searches[s])){

      if(
        Elements[e].getAttribute(Searches[s]).
        toLowerCase().
        indexOf("pdf")>=0 &&
        Elements[e].getAttribute(Searches[s]).
        toLowerCase().
        indexOf("download")>=0
       ){


         if( ! Elements[e].getAttribute("PrintFunction")){


            Elements[e].addEventListener("click",
            Print2
            );

            Elements[e].setAttribute("PrintFunction","true");

            Elements[e].parentNode.setAttribute("PrintFunction","true");

        }

      }
     }
}
    }

    if(Elements[e].addEventListener){
      Elements[e].addEventListener("dblclick",MouseOver);

   }
  }

};

//For Input
function FileUpload(e,This){
  if(!This)
  This = this;

  //alert("Upload");
  if (This.files && This.files[0]) {
      var img = This.img;  // $('img')[0]
      //alert(img);
      img.src = URL.createObjectURL(This.files[0]); // set src to blob url
      img.addEventListener("click",UIB);
      img.parentNode.setAttribute("src",img.src);
      img.parentNode.setAttribute("href",img.src);
      //img.onload = imageIsLoaded;
  }
}

var P = document.getElementsByClassName("portrait");
if(P.length>0)
  P[0].id = "uploadImage";

var UIB = function(){

  //if(this.getAttribute("one"))
    //return;

  var upload = document.createElement("input");
  upload.type="file";
  //upload.style.display="block";
  upload.addEventListener("change", FileUpload);

  //upload.fireEvent("click");

 upload.style.display="none";

 document.body.appendChild(upload);

 upload.click();
  //upload.style.position="fixed";
  //upload.style.marginTop="50%";
  //upload.style.marginLeft="50%";

  //upload.style.zIndex="9999";

  upload.img = this;

  //FileUpload(null,upload);

  //document.body.appendChild(upload/*,this.parentNode.children[this.parentNode.children.length-1]*/);

  this.setAttribute("one","true");
};

/*
var UI = document.getElementById("uploadImage");

UI.addEventListener("click",UIB);
*/

var Images = document.getElementsByTagName("img");
for(var i in Images){
  var UI = Images[i];

if(UI.addEventListener)
  UI.addEventListener("click",UIB);

}
