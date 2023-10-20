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

// -------------------------------------------------------- TITRE H1 ------------------------------
let titreH1 = document.createElement("h1");
titreH1.classList.add("titre-h1");
titreH1.innerText = "Mr.ALAIN est condamné ! Trouvera tu le bon mot au juge pour le sauvé ?"
console.log(titreH1);
box1DivGauche.appendChild(titreH1)

// -------------------------------------------------------- IMAGE H1 ------------------------------
let imageH1 = document.createElement("img");
imageH1.classList.add("image-h1");
imageH1.src = "../../image/prison.png";
console.log(imageH1);
box1DivGauche.appendChild(imageH1);


// -------------------------------------------------------------------------------- BOX2 DIV GAUCHE ------------------------
let box2DivGauche = document.createElement("div");
box2DivGauche.classList.add("box2-div-gauche");
console.log(box2DivGauche);
divGauche.appendChild(box2DivGauche);

//  Ajouter clavier et resultat au moment venu


// -------------------------------------------------------------------------------- BOX3 DIV GAUCHE ------------------------
let box3DivGauche = document.createElement("div");
box3DivGauche.classList.add("box3-div-gauche");
console.log(box3DivGauche);
divGauche.appendChild(box3DivGauche);
 
// -------------------------------------------------------- IMAGE BOX3 ----------------------------
let imageBox3 = document.createElement("img");
imageBox3.classList.add('image-box3');
imageBox3.src = "../../image/avocat.png";
console.log(imageBox3);
box3DivGauche.appendChild(imageBox3)

// -------------------------------------------------------- DIV ESSAI -----------------------------
let divEssaiBox3 = document.createElement("div");
divEssaiBox3.classList.add("div-essai-box3");
console.log(divEssaiBox3);
box3DivGauche.appendChild(divEssaiBox3);

// ---------------------------------------------- TEXTE ESSAI ------------
let h2Box3 = document.createElement("h2");
h2Box3.classList.add("h2-box3");
h2Box3.innerText = "Nombre d'essai restant : 8";
console.log(h2Box3);
divEssaiBox3.appendChild(h2Box3);

// ---------------------------------------------- IMAGE ESSAI  -----------
let imageEssaiBox3 = document.createElement("img");
imageEssaiBox3.classList.add("image-essai-box3");
imageEssaiBox3.src = "../../image/dossier.png";
console.log(imageBox3);
divEssaiBox3.appendChild(imageEssaiBox3)



// --------------------------------------------------------------------------------------DIVDROITE---------------------------------------------------
let divDroite = document.createElement("div");
divDroite.classList.add("div-droite");
console.log(divDroite);
main.appendChild(divDroite)

// -------------------------------------------------------- DIV RESULTAT CLIENT SAUVE --------------------------------------
let divResultatClient = document.createElement("div");
divResultatClient.classList.add("div-resultat-client");
console.log(divResultatClient);
divDroite.appendChild(divResultatClient);

// -------------------------------------------------------- RESULTAT CLIENT SAUVE -----------------
let resultatClient = document.createElement("div");
resultatClient.classList.add("resultat-client");
resultatClient.innerText = "Nombre de clients sauvé(e)s : ";
console.log(resultatClient);
divResultatClient.appendChild(resultatClient);

// -------------------------------------------------------- IMAGE CLIENT SAUVE --------------------
let imageResultatClient = document.createElement("img");
imageResultatClient.classList.add("image-resultat-client");
console.log(imageResultatClient);
imageResultatClient.src = "../../image/coop.png";
divResultatClient.appendChild(imageResultatClient);

// -------------------------------------------------------- IMAGE PENDU ----------------------------------------------------
let imagePendu = document.createElement("img");
imagePendu.classList.add("image-pendu");
console.log(imagePendu);
// imagePendu.src = "image à mettre";
divDroite.appendChild(imagePendu);



// ------------------------------------------------------------------------------------- FOOTER -----------------------------------------------------------------------------------------------------------
let footer = document.createElement("footer");
console.log(footer);
document.body.appendChild(footer);

// ------------------------------------------------------------------------------------------------ SOURCE ------------------------------------------
let sourceFooter = document.createElement("p");
sourceFooter.classList.add("source-footer");
sourceFooter.innerText = "© Par SAMIR Ibrahim, créer en 2023 html,css,js";
footer.appendChild(sourceFooter);

