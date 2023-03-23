const lewyTrue = document.querySelector("#lewy");
const prawyTrue = document.querySelector("#prawy");
const dialogelse = document.querySelectorAll(".dialogelse");
const opcjeDialogowe = {
    "<Wsiądź": "intro()",
    "Gdzie ja jestem?": 'gdzieJestem()',


}
const plecak = document.querySelector(".plecak.item");
 plecak.addEventListener("click",function() {
    const prawydol = document.querySelector("#prawydol");
    prawydol.innerHTML = "";
    console.log("działa");
    for (let i = 0; i <4; i++) {
        const div = document.createElement("div");
        div.className = "plecakitem";
        prawydol.appendChild(div);
    }
});
function oknaDialogowe(){
    console.log("siema")
    dialogelse.forEach(dialog => {
        const options = dialog.getAttribute("data-options");
        console.log(options);
        prawydol.innerHTML = "";
        if(options){
            const optionList = options.split(",")
            optionList.forEach(options => {
            const div = document.createElement("div");
            div.className = "dialog";
            div.setAttribute("data-options",options);
            div.setAttribute("onclick", opcjeDialogowe[options]);
            div.innerHTML = options ;
            prawydol.appendChild(div);
        })
        }

    });
}
function gdzieJestem(){
  lewyTrue.innerHTML = ""
  const div = document.createElement("div");
  div.className = "dialogelse";
  div.innerHTML = "Wsiadaj!"
  div.setAttribute("data-options", "<Wsiądź>");
  div.setAttribute("onclick", oknaDialogowe());
  div.innerHTML = "wsiadaj"
  lewyTrue.appendChild(div);
  lewyTrue.style.backgroundImage = "url(wsiadaj.png)";
  prawydol.innerHTML = "";
  const div2 = document.createElement("div");
 div2.className = "dialogelse"
 div2.setAttribute("data-options", "<>");
 div2.setAttribute("onclick", oknaDialogowe);
 div2.innerHTML = "Wsiądź"
 prawydol.appendChild(div2);
}
function intro(){
    const lewy = document.querySelector("#lewy");
    const prawy = document.querySelector("#prawy");
    var music = document.getElementById("background-music");

// Play music
music.play();
music.volume = 0;
    lewy.style.width = "96vw";
    prawy.style.width = "0vw";
    lewy.style.backgroundImage = "url('logo.png')"
    lewy.innerHTML = "";
    lewy.style.backgroundSize = "96vw";
    setTimeout(function() {
        lewy.style.width = "47vw";
        prawy.style.width = "47vw";
        lewy.innerHTML = "";
        prawy.innerHTML = "";
        lewy.style.backgroundImage = "url('driveprawy.gif')";
        lewy.style.backgroundSize = "cover";
        lewy.style.backgroundPosition = "left";
        lewy.style.float = "left";
        prawy.style.backgroundImage = "url('drivelewy.gif')";
        prawy.style.backgroundSize = "cover";
        prawy.style.backgroundPosition = "right";
        prawy.style.float = "left";
        animateDivs();
        
        setTimeout(function(){
          
          const dialog = document.createElement("div");
          dialog.classList.add("dialog");
          dialog.innerHTML = "chuj ci w dupe luger";
          dialog.setAttribute("onclick", "intro()");
          
          lewy.appendChild(dialog);
          
        }, 7000)
    }, 1800);
}