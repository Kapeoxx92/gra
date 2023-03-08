const lewy = document.querySelector("#lewy");
const prawy = document.querySelector("#prawy");
const prawydol = document.querySelector("#prawydol");
const dialogelse = document.querySelectorAll(".dialogelse");
const opcjeDialogowe = {
  "<Wsiądź>": "intro()",
  "Gdzie ja jestem?": "gdzieJestem()"

}
console.log(lewy);

const plecak = document.querySelector(".plecak.item");
console.log(plecak)
plecak.addEventListener("click", function() {
  prawydol.innerHTML = "";
  for(let i=0;i<4;i++){
    const div = document.createElement('div');
    div.className = "plecakitem";
    prawydol.appendChild(div);
  }
});

function oknaDialogowe(){
    console.log("siema")
    dialogelse.forEach(dialog => {
        const options = dialog.getAttribute("data-options")
        console.log(options);
        prawydol.innerHTML = "";
    }

        if(Option){
            const optionList = options.split(",") 
            const div = document.createElement('div')
            div.className = "dialog"
            div.setAttribute("data-options", option)
            div.setAttribute("onclick",opcjeDialogowe[option])            
            div.innerHTML = option
            prawydol.appendChild(div);
        };