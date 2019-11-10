// var formValid = document.getElementById("button_click").value
// formValid.addEventListener("click", validation);

// var champs = document.getElementById("champs").value
// var taille = document.getElementById("champs").value.length


function validation() {
    var error = "";
  

    var champsList = document.querySelectorAll(".champs");
     
    champsList.forEach(function (champItem) {
        if (champItem.value.length < 5) {
            error += "champ vide : " + document.querySelector("[for='"+champItem.id+"']").textContent + "<br/>";
        }
        
    });
    document.getElementById("error").innerHTML = error;
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value;
  


    console.log(error);
    console.log(resultat);
    return false;

}