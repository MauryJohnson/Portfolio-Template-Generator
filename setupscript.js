

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
