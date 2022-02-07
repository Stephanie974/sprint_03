function myFunction1() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function ajouterLigne() { 
    // Obtenir le nom et le prénom saisis et l'id du tbody
    var nom = document.getElementById("nom").value; 
    if (document.getElementById('nom') == ""){
      alert ("Veuillez entrer votre nom!");
      return false;}  
    var prenom = document.getElementById("prenom").value; 
    if (document.getElementById('prenom') == ""){
      alert ("Veuillez entrer votre prénom!");
      return false;  
    var idTable = document.getElementById("tbody");
    
    // Ajouter une ligne à la fin 
    var ligne = idTable.insertRow(-1);
    
    // Créer les cases pour le nom et le prénom
    var casePrenom = ligne.insertCell(0); 
    var caseNom = ligne.insertCell(1);
    
    // Ajouter le nom et le prénom dans ces cases
    casePrenom.innerHTML = prenom;
    caseNom.innerHTML = nom;
   }
   
   function supprimerLignes() {
    // Obtenir  l'id du tbody
    var nom = document.getElementById("nom").value;   
    var prenom = document.getElementById("prenom").value;   
    var idTable = document.getElementById("tbody");
    

     // Supprimer tout ce qu'il contient
    while (idTable.hasChildNodes()) {
     idTable.removeChild(idTable.childNodes[0]);
     }
   }