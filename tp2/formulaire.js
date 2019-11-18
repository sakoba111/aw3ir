
function validation() {
    var error = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";

    var champsList = document.querySelectorAll(".champs");
     
    champsList.forEach(function (champItem) {
        if (champItem.value.length < 5) {
            error += "champ vide : " + document.querySelector("[for='"+champItem.id+"']").textContent + "<br/>";
        }
        
    });
    
    
    if (error !=0) {
        document.getElementById("error").innerHTML = error;
    }
    
    else { document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value;}


   
  


    console.log(error);
    console.log(resultat);
    return false;

}