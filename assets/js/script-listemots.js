console.log("Youhoooo !");

const tablListNav = ['Accueil','Jouer','Liste Mots'];


// -------------------------------------------------------------------------------------HEADER---------------------------------------------------------------------------------------------------------
let header = document.createElement("header"); 
header.classList.add("class-header");
console.log(header);
document.body.appendChild(header);

// ------------------------------------------------------------divLOGO--------------------------------------------
let divLogoGit = document.createElement("div");
divLogoGit.classList.add("div-logo-git");
console.log(divLogoGit);
header.appendChild(divLogoGit);

// --------------------------------------------------ImageGit----------------------------
let imageGit = document.createElement("img");
imageGit.classList.add("image-header")
imageGit.src = '../../image/logo-git-blanc.png';
console.log(imageGit);
divLogoGit.appendChild(imageGit)

// --------------------------------------------------Github------------------------------
let titreGitHub = document.createElement('a');
titreGitHub.classList.add("titre-github");
titreGitHub.innerText = "GitHub";
titreGitHub.href = "https://github.com/Lkorosensei/jeu-pendu-new/tree/main"
console.log(titreGitHub);
divLogoGit.appendChild(titreGitHub);

// ------------------------------------------------------------NAV------------------------------------------------
let nav = document.createElement("nav");
nav.classList.add("class-nav");
console.log(nav);
header.appendChild(nav);

// --------------------------------------------------UL-Liste-NAV------------------------
let ulNav = document.createElement("ul");
ulNav.classList.add("ul-nav");
console.log(ulNav);
nav.appendChild(ulNav);

// ---------------------------------------Liste-Nav--------------------
// est ce qu'on fait une table pour les 3 listes ou est ce qu'on fait manuellement ?
// tablListNav.forEach(liste => {
//     let listNav = document.createElement("li");
//     let listA = document.createElement("a")
//     listNav.classList.add("list-nav");
//     listA.innerText = [liste]
//     console.log(listNav);
//     ulNav.appendChild(listNav);
//     listNav.appendChild(listA);
// });

 let li1 = document.createElement("li");
 ulNav.appendChild(li1)

 let li2 = document.createElement("li");
 ulNav.appendChild(li2);

 let li3 = document.createElement("li");
 ulNav.appendChild(li3)

 let aLi1 = document.createElement("a"); 
 aLi1.innerText = "Accueil";
 aLi1.href = "index.html";
 li1.appendChild(aLi1);

 let aLi2 = document.createElement("a"); 
 aLi2.innerText = "Jouer";
 aLi2.href = "jouer.html";
 li2.appendChild(aLi2);

 let aLi3 = document.createElement("a"); 
 aLi3.innerText = "Liste Mot";
 aLi3.href = "#";
 li3.appendChild(aLi3);

// --------------------------------------------------Image-Mort-NAV----------------------
let imageMortNav = document.createElement("img");
imageMortNav.classList.add("image-header");
// imageMortNav.innerHTML = ""
imageMortNav.src = '../../image/mortrouge.png';
ulNav.appendChild(imageMortNav);



// ------------------------------------------------------------------------------------- MAIN -----------------------------------------------------------------------------------------------------------
let main = document.createElement("main");
main.classList.add("class-main");
console.log(main);
document.body.appendChild(main);


// -------------------------------------------------------------------------------------- DIV GAUCHE ------------------------------------------------
let divGauche = document.createElement("div");
divGauche.classList.add("div-gauche");
console.log(divGauche);
main.appendChild(divGauche);


// -------------------------------------------------------------------------------- BOX1 DIV GAUCHE ------------------------
let box1DivGauche = document.createElement("div");
box1DivGauche.classList.add("box1-div-gauche");
console.log(divGauche);
divGauche.appendChild(box1DivGauche)

// -------------------------------------------------------- IMAGE H1 ------------------------------
let imageH1 = document.createElement("img");
imageH1.classList.add("image-h1");
imageH1.src = "../../image/alphabet.png";
box1DivGauche.appendChild(imageH1);

// -------------------------------------------------------- TITRE H1 ------------------------------
let titreH1 = document.createElement("h1");
titreH1.classList.add("titre-h1");
titreH1.innerText = "Ajouter un mot : "
console.log(titreH1);
box1DivGauche.appendChild(titreH1)

// -------------------------------------------------------------------------------- BOX2 DIV GAUCHE ------------------------
let box2DivGauche = document.createElement("div");
box2DivGauche.classList.add("box2-div-gauche");
console.log(box2DivGauche);
divGauche.appendChild(box2DivGauche);

// -------------------------------------------------------- DIV RECHERCHE MOT -------------------------
let divRechercheMot = document.createElement("div");
divRechercheMot.classList.add("div-recherche-mot");
console.log(divRechercheMot);
box2DivGauche.appendChild(divRechercheMot);

// Mettre en sorte de pouvoir rentrer des mots

// ---------------------------------------------- IMAGE LOUPE ------------
let imageLoupeAjoutMot = document.createElement("img");
imageLoupeAjoutMot.classList.add("image-loupe-ajout-mot");
imageLoupeAjoutMot.src = "../../image/loupe.png"
console.log(imageLoupeAjoutMot);
box2DivGauche.appendChild(imageLoupeAjoutMot);

// -------------------------------------------------------------------------------- BOX3 DIV GAUCHE ------------------------
let box3DivGauche = document.createElement("div");
box3DivGauche.classList.add("box3-div-gauche");
console.log(box3DivGauche);
divGauche.appendChild(box3DivGauche);

// -------------------------------------------------------- DIV AJOUT MOT -------------------------
let divAjoutMot = document.createElement("div");
divAjoutMot.classList.add("div-ajout-mot");
console.log(divAjoutMot);
box3DivGauche.appendChild(divAjoutMot);

// ---------------------------------------------- TITRE AJOUT MOT --------
let h2AjoutMot = document.createElement("h2");
h2AjoutMot.classList.add("h2-ajout-mot");
h2AjoutMot.innerText = "AJOUTER"
divAjoutMot.appendChild(h2AjoutMot);

// ---------------------------------------------- IMAGE AJOUT MOT --------
let imageH2AjoutMot = document.createElement("img");
imageH2AjoutMot.classList.add("image-h2-ajout-mot");
imageH2AjoutMot.src = "../../image/plus.png";
divAjoutMot.appendChild(imageH2AjoutMot);

// -------------------------------------------------------------------------------------- DIV DROITE ------------------------------------------------
let divDroite = document.createElement("div");
divDroite.classList.add("div-droite")
main.appendChild(divDroite)

// ----------------------------------------------------------------------- IMAGE ARBRE -------------------------------------
let imageArbre = document.createElement("img");
imageArbre.classList.add("image-arbre");
imageArbre.src = "../../image/banzai.png";
divDroite.appendChild(imageArbre);


// ------------------------------------------------------------------------------------- FOOTER -----------------------------------------------------------------------------------------------------------
let footer = document.createElement("footer");
console.log(footer);
document.body.appendChild(footer);

// ------------------------------------------------------------------------------------------------ SOURCE ------------------------------------------
let sourceFooter = document.createElement("p");
sourceFooter.classList.add("source-footer");
sourceFooter.innerText = "© Par SAMIR Ibrahim, créer en 2023 html,css,js";
footer.appendChild(sourceFooter);