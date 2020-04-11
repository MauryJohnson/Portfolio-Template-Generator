//

console.log("-");

var Targets = ["a","p","h1","h2","h3","h4","span","li","button","img"];

var CurrentFocus;

function FireEvent(Element,Event){
  alert("Fire Event:"+Event);

 if(CurrentFocus)
  MouseOut(null,CurrentFocus);

}

//var a = async function(){
  setTimeout(async function(){
  alert("Double click to edit")
},0);
//}
//a();

var MouseOut = function(e,This){

  if(!This)
  This = this;

  var PreviousElement = This.getAttribute("PreviousElement");
  var PreviousClass = This.getAttribute("PreviousClass");

  var Element = document.createElement(PreviousElement.toLowerCase());
  Element.className = PreviousClass;

  //if This.innerHTML is null, then This.value
  //otherwise This.innerHTML
  Element.innerHTML = This.innerHTML || This.value || "NOTHING";
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

var Disappears = ["ChangeTheme"];

var Print2 =   async function(){

  //alert("Print")

  //this.removeEventListener("click",Print2);

  this.style.display="none";
  for(var d in Disappears){
    if(document.getElementById(Disappears[d]))
      document.getElementById(Disappears[d]).style.display="none";
  }

  await window.print();

  this.style.display="inline-block";
  for(var d in Disappears){
    if(document.getElementById(Disappears[d]))
      document.getElementById(Disappears[d]).style.display="inline-block";
  }

  return


}
  var Entries = document.getElementsByClassName("entry")
    if(Entries.length>0){
      Entries[Entries.length-1].innerHTML=
      `
      <h2>WORKS</h2>

      <table style="border:0px;">
      <tr style="border:0px">

      <td style="border:0px">
      <img style="max-width:150px;max-height:150px;width:150px;height:150px;" onmouseenter="this.style.background='white'" src="images/image.jpg" innerHTML="">
      </td>

      <td style="border:0px">
      <img style="max-width:150px;max-height:150px;width:150px;height:150px;" onmouseenter="this.style.background='white'" src="images/image.jpg" innerHTML="">

      </td>

      <td style="border:0px">
      <img style="max-width:150px;max-height:150px;width:150px;height:150px;" onmouseenter="this.style.background='white'" src="images/image.jpg" innerHTML="">
      </td>

      </tr>
      <tr style="border:0px">
      <td style="border:0px">
      <img style="max-width:150px;max-height:150px;width:150px;height:150px;" onmouseenter="this.style.background='white'" src="images/image.jpg" innerHTML="">
      </td>
      <td style="border:0px">
      <img style="max-width:150px;max-height:150px;width:150px;height:150px;" onmouseenter="this.style.background='white'" src="images/image.jpg" innerHTML="">
      </td>
      <td style="border:0px">
      <img style="max-width:150px;max-height:150px;width:150px;height:150px;" onmouseenter="this.style.background='white'" src="images/image.jpg" innerHTML="">
      </td>
      <tr style="border:0px">
      </table>
      `
      setTimeout(function(){
          Entries[Entries.length-1].children[1].style.border="0px";
      },1)

    }

      if(document.getElementById("message")){
        document.getElementById("message").addEventListener("click",function(){
          window.scroll({
  top: 0,
  behavior: 'smooth'
});
        })
      }

      var ClearClasses = ["name"];

      for(var c in ClearClasses){
        var CC = document.getElementsByClassName("name");
        //alert(CC);
        for(var cc in CC){
          CC[cc].innerHTML="EDIT HERE";

            setTimeout(function(){
              if(CC[cc].style)
                CC[cc].style.maxWidth="400px;!important";
            },1);

        }
      }

for(var i in Targets){
  var Elements = document.getElementsByTagName(Targets[i]);
  //console.log(d);
  var Searches = ["innerHTML","alt"];

  var Removes = ["twitter","facebook","download","contact me","images/icn-print.jpg"];

  for(var e in Elements){

    for(var s in Searches){

      var Deleted = false;

      if(Elements[e]){
        for(var r in Removes){
          if(Elements[e].innerHTML)
          if(Elements[e].innerHTML.toLowerCase().indexOf(Removes[r])!=-1){
            var P = Elements[e].parentNode;
            Elements[e].parentNode.removeChild(Elements[e])
            Deleted = true;

            if(Removes[r]=="images/icn-print.jpg"){
              var B = document.createElement("button");
              B.value=B.innerHTML = "Print";

                          B.style.width="50px"
                          B.style.height="20px";

              P.appendChild(B);
            }

          }
        }
      }
      if(Deleted)continue;


/*if(Elements[e].innerHTML)
            if(Elements[e].innerHTML.indexOf("Print")!=-1)
              alert(Elements[e].innerHTML)
*/
    if(Elements[e].setAttribute)
 {

      Elements[e].setAttribute(Searches[s],Elements[e].innerHTML || Elements[e][Searches[s]]);

    if(Elements[e].getAttribute(Searches[s])){

      if(
        (Elements[e].getAttribute(Searches[s]).
        toLowerCase().
        indexOf("pdf")>=0 &&
        Elements[e].getAttribute(Searches[s]).
        toLowerCase().
        indexOf("download")>=0)
        || Elements[e].getAttribute(Searches[s]).indexOf("Print")!=-1
       ){

         if(Elements[e].tagName=="IMG" || Elements[e].tagName=="BUTTON"){
         //alert(Elements[e].id);
         if(Elements[e].tagName=="IMG"){
          // alert(Elements[e])
           Elements[e].parentNode.removeChild(Elements[e]);
           Elements[e] = document.createElement("Button");
           Elements[e].value = "Print";
         }

         if( ! Elements[e].getAttribute("PrintFunction")){

            Elements[e].style.width="50px"
            Elements[e].style.height="20px";
            //Elements[e].style.marginTop="5px";

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
