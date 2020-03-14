document.body.innerHTML = `<div class="header">
       <img src="" />
     </div>
     <div class="navigation">
       <div class="nav-buttons">
         <button>Home</button>
         <button>Templates</button>
         <button>Documentation</button>
       </div>
     </div>
` + document.body.innerHTML;

console.log("setup script");

    url = window.location.href;

    url = url.substring(url.lastIndexOf("/")+1,url.length);

    console.log("URL is:"+url);

    INDEX = 0

    Buttons = document.getElementsByTagName("button");

    switch(url){
        case "index.html":
            INDEX = 0;
            break;

        case "templates.html":
            INDEX = 1;
            break;

        case "documentation.html":
            INDEX = 2;
            break;

        default:
            INDEX = -1;
            console.error("Cannot find correct URL");
            break;
    }

    //Buttons[INDEX].style.backgroundColor="gray";
    Buttons[INDEX].style.background="gray";

document.body.innerHTML+=`<div class="footer">
         <footer>
           <img src="./Images/instagram.png" class="instagram">
             <img src="./Images/facebook.png" class="facebook">
                 <img src="./Images/twitter.png" class="twitter">
                 <img src="./Images/gmail.png" class="gmail">
         </footer>
       </div>

`;

Script();


//max height 350

//var Templates = [];

var Templates2 = document.getElementsByClassName("template")[0].children;

var Templates3 = document.getElementsByClassName("template")[1].children;

var Templatesl = [Templates2,Templates3]

/*
for(var t in Templates2){
    Templates.push(Templates2[t]);
}
for(var t in Templates3){
     Templates.push(Templates2[t]);
 }
*/

var MaxHeight = 0;
var MaxWidth = 0;

var Dictionary =
    {
        "00":function(){
             window.open("./Templates/Template1/template1.html");
        },
        "01":function(){
            window.open("./Templates/Template2/template2.html");
        }
        ,
        "02":function(){
            window.open("./Templates/Template3/template3.html");
        }
        ,
        "10":function(){
            window.open("./Templates/Template4/joeblogss.html")
        }
        ,
        "11":function(){
            window.open("./Templates/Template5/doedoe.html")
        }
        ,
        "12":function(){
            window.open("./Templates/Template6/johnsmithblue.html")
        }

    }

for(var t in Templatesl){

    var Templates = Templatesl[t];

    for(var i = 0;i<Templates.length;i+=1){

        Templates[i].addEventListener("click",Dictionary[t+""+i]);

    var height = Templates[i].getBoundingClientRect().height;
    if(height > MaxHeight)
        MaxHeight = height;

    var width = Templates[i].getBoundingClientRect().width;
    if(width > MaxWidth)
        MaxWidth = width;

    console.log("My W/H is:"+width+","+height);

    Templates[i].setAttribute("previousHeight",height+"px");
    Templates[i].setAttribute("previousWidth",width+"px");
    Templates[i].setAttribute("index",i+"");

    Templates[i].addEventListener("mouseover",function(){
        if(this.style.opacity=="0")
            return;

       this.style.height = MaxHeight+"px";

        this.style.width = MaxWidth+"px";

       var index = parseInt(this.getAttribute("index"));

       this.style.zIndex = 1;

        var Templates = this.parentNode.children;

        //alert(index);

        for(var i=0;i<Templates.length;i+=1){
            if(i!=index){
                //Templates[i].style.display="none";
                Templates[i].style.opacity="0";
            }
        }

        //this.parentNode.appendChild(this);

    });

    Templates[i].addEventListener("mouseout",function(){

        this.style.height=this.getAttribute("previousHeight");

        this.style.width=this.getAttribute("previousWidth");

        this.style.zIndex = 1;

        var index = parseInt(this.getAttribute("index"));

        var Templates = this.parentNode.children;

         for(var i=0;i<Templates.length;i+=1){
             if(i!=index){
                 Templates[i].style.opacity="1";
             }
         }

    });

}
}
