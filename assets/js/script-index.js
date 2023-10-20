console.log("Youhoooo !");

// const tablListNav = ['Accueil','Jouer','Liste Mots'];
const tablListNav = [
    {
        caption: "Accueil",
        url: './index.html'
    },
    {
        caption: 'Jouer',
        url: './jeu.html'
    },
    {
        caption: 'Liste Mot',
        url: './liste-mots.html'
    }
]


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

tablListNav.forEach(routes => {
    let liNav = document.createElement("li");
    let aHrefLiNav = document.createElement('a');
    aHrefLiNav.href = [routes.url];
    aHrefLiNav.innerText = [routes.caption]
    ulNav.appendChild(liNav);
    liNav.appendChild(aHrefLiNav);
});

// --------------------------------------------------Image-Mort-NAV----------------------
let imageMortNav = document.createElement("img");
imageMortNav.classList.add("image-header");
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

// --------------------- H2 LIEN JEU --------
let h2BoxLienJeu = document.createElement("h2");
h2BoxLienJeu.classList.add("h2-box-lien-jeu");
h2BoxLienJeu.innerText = "JOUER AU PENDU ";
boxLienJeu.appendChild(h2BoxLienJeu);

// ---------------------- IMAGE LIEN JEU --------
let imageLienJeu = document.createElement("img");
imageLienJeu.classList.add("image-lien-jeu");
imageLienJeu.src = "../../image/bouton-fleche.png";
boxLienJeu.appendChild(imageLienJeu);

// Ne pas oublier de rajouter le lien sur le bouton sur la page jouer

// --------------------------------------- IMAGE DIV LIEN JEU ------------
imageEnfant = document.createElement("img");
imageEnfant.classList.add("image-enfant");
imageEnfant.src = "../../image/enfant.png";
divLienJeu.appendChild(imageEnfant)



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
