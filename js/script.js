var compteurElt = document.getElementById("compteur");
var titreElt = document.getElementById("titre");
titreElt.textContent = "!";
//compteurElt.style.display = 'none';
// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
if(compteur > 0){
    compteurElt.textContent = compteur - 1;

}
 if (compteur == 10){
titreElt.textContent = "C'est !";
titreElt.style.color = "red";
}
if (compteur == 9){
  titreElt.textContent = "Le !";
  titreElt.style.color = "blue";
}
 if (compteur == 8){
  titreElt.textContent = "site !";
  titreElt.style.color = null;
}
if (compteur == 7){
  titreElt.textContent = "de !";
}
if (compteur == 6){
  titreElt.textContent = "ta !";
}
if (compteur == 5){
  titreElt.textContent = "Vie !";
  titreElt.style.color = "green";
}
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);

/////////////ANIMATION DU BLOC/////////////////////////
var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var vitesse = 3; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation
// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).width);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if (xBloc + largeurBloc <= xMax) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        bloc.style.width = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBloc);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }
}
animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation
