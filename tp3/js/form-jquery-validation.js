$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    // Y mettre le code jQuery pour valider tous les champs du formulaire

    var error = "";

    var adresse = $("#ap").val();
    var champsList = document.querySelectorAll(".form-control");

    $("#valider").on("click", function (event) {
        event.preventDefault();
        error = "";

        champsList.forEach(function (champItem) {
            if (champItem.value.length == 0) {
             error += "Champs vide : " + document.querySelector("[for='"+champItem.id+"']").textContent + "<br/>" ;
            }

        });


        if (error =="") {
            $(".modal-title").text("Bienvenue " + $("#prenom").val());
            $(".modal-body").html("Vous etes nés le " + $("#ddn").val() + " et vous habitez" +
            '<a href=http://maps.google.com/maps?q=' + adresse + '><img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + adresse +
             '&zoom=10&size=200x200&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" size /> </a>');

        }
        else {
            $(".modal-title").text("Error");
            $(".modal-body").html(error)
        }

        $('#myModal').modal("show");

    });


});
