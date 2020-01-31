$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

     // Afficher le nombre de caractère saisie (jQuery)
    $("#name").keyup(function () {
        
      $("#car").text($("#name").val().length + " car.");

}); 

    $("#firstname").keyup(function () {
    
      $("#car1").text($("#firstname").val().length + " car.");

});

    // Y mettre le code jQuery pour valider tous les champs du formulaire

    var error = "";

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
          console.log('ACTION::ADD'); 
          let firstname = $('#firstname').val();
          let name = $('#name').val();
          let address = $('#adresse').val();
          let birthday = $('#birth').val();
          let mail = $('#mail').val();
        
          document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
              '<tr><td>' + name + '</td><td>' + firstname + '</td><td>' + birthday + '</td><td>' + address + '</td><td>' + mail + '</td><td>';
            
          console.log('ACTION::getList'); 
          for(var index in contactList){
            console.log(contactList[index].name);
          }

        }

        else {
            $(".modal-title").text("Error");
            $(".modal-body").html(error)
            $('#myModal').modal("show");
        }

        

    });



});
