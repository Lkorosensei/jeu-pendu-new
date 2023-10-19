console.log("Youhoooo !");

const tablListNav = ['Accueil','Jouer','Liste Mots'];

// -------------------------------------------------------------------------------------HEADER-----------------------------------------------------------------------------------------------
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
imageGit.classList.add("image-git")
imageGit.setAttribute('src', '../../image/logo-git-blanc.png')
// imageGit.src = '../../image/logo-git-blanc.png';
console.log(imageGit);
divLogoGit.appendChild(imageGit)

// --------------------------------------------------Github------------------------------
// let titreGitHub = document.createElement('')
// balise a ou h1 ?

let titreGitHub = document.createElement('a');
titreGitHub.classList.add("titre-github");
titreGitHub.innerText= "GitHub";
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

tablListNav.forEach(liste => {
    let listNav = document.createElement("li");
    listNav.classList.add("list-nav");
    listNav.innerText = [liste]
    console.log(listNav);
    ulNav.appendChild(listNav);
});

// --------------------------------------------------Image-Mort-NAV----------------------
let imageMortNav = document.createElement("img");
imageMortNav.classList.add("image-mort-nav");
// imageMortNav.innerHTML = ""
imageMortNav.src = '../../image/mortrouge.png';
ulNav.appendChild(imageMortNav);
