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
document.body.appendChild(main);

// -------------------------------------------------------------------------------------- DIV GAUCHE ------------------------------------------------
let divGauche = document.createElement("div");
divGauche.classList.add("div-gauche")
main.appendChild(divGauche)

// -----------------------------------------------------------------------TITRE H1 -----------------
let h1 = document.createElement("h1");
h1.classList.add("class-h1");
h1.innerText = "Bienvenu sur le jeu du pendu !";
divGauche.appendChild(h1);

// ----------------------------------------------------------------------- PARAGRAPHE -------------
let regle = document.createElement("p");
regle.classList.add("class-regle");
regle.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, inventore temporibus. Molestias totam provident ratione ipsa est quae nemo, suscipit, deserunt quas impedit nesciunt consequatur voluptatum doloribus dignissimos saepe velit!";
divGauche.appendChild(regle);

// ----------------------------------------------------------------------- DIV LIEN JEU -----------
let divLienJeu = document.createElement("div");
divLienJeu.classList.add("div-lien-jeu");
divGauche.appendChild(divLienJeu);

// --------------------------------------------- BOX LIEN JEU ------------
let boxLienJeu = document.createElement("div");
boxLienJeu.classList.add("box-lien-jeu");
divLienJeu.appendChild(boxLienJeu);

// --------------------- BOUTON LIEN JEU --------
let boutonLienJeu = document.createElement("button");
boutonLienJeu.classList.add("bouton-lien-jeu");
boutonLienJeu.innerText = "JOUER AU PENDU "
boxLienJeu.appendChild(boutonLienJeu);

// ---------------------- IMAGE LIEN JEU --------
let imageLienJeu = document.createElement("img");
imageLienJeu.classList.add("image-lien-jeu");
imageLienJeu.src = "../../image/bouton_fleche.png";
boxLienJeu.appendChild(imageLienJeu);

// --------------------------------------- IMAGE DIV LIEN JEU ------------
imageDivLienJeu = document.createElement("img");
imageDivLienJeu.classList.add("image-div-lien-jeu");
imageDivLienJeu.src = "../../image/enfant.png";


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
