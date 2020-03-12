
function Script(){

console.log("JavaScript");

var ArrayOfSMIs = [
    [
        "instagram","http://www.instagram.com"
    ]
    ,
    [
        "facebook","http://www.facebook.com"
    ]
    ,
    [
        "twitter","http://www.twitter.com"
    ]
    ,
    [
        "gmail","http://www.gmail.com"
    ]
];

console.log("Array of Social Media Icons:\n"+ArrayOfSMIs);

for(var i in ArrayOfSMIs){

    E = document.getElementsByClassName(ArrayOfSMIs[i][0])[0]

    E.setAttribute("link",ArrayOfSMIs[i][1])

    E.addEventListener("click",       function(e){
     link = this.getAttribute("link")

     alert("Clicked Me For:"+link)

     window.open(link,true)
    });


    //E.style.width=E.style.height="35px";

    //E.style.marginLeft = "100px";

    if(i>0)
        E.style="width:35px; height:35px; margin-top:40px; margin-left:40px;";
    else
        E.style="width:35px; height:35px; margin-top:40px;";


}


};
