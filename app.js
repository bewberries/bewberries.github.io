let row = 0;
let current_id = "";
let title_id = "";
let animating = false;
let choiceWords = ["votre","voler","voile","vivre","vingt","vieux","vêtir","verre","verbe","venir","vague","vache","usine","unité",
"trois",
"train",
"total",
"tirer",
"terre",
"terme",
"tenir",
"temps",
"table",
"sujet",
"sucre",
"soins",
"signe",
"siège",
"score",
"sable",
"route",
"rouge",
"riche",
"rêver",
"reste",
"règle",
"rayon",
"radio",
"queue",
"quand",
"pouce",
"poste",
"poser",
"porte",
"pomme",
"point",
"poids",
"poème",
"pluie",
"plein",
"place",
"piste",
"pieds",
"pièce",
"petit",
"perdu",
"payer",
"pause",
"passé",
"paire",
"outil",
"ouest",
"ordre",
"odeur",
"océan",
"objet",
"nuage",
"notre",
"neige",
"monde",
"moins",
"mince",
"mille",
"mieux",
"métal",
"merci",
"matin",
"masse",
"lutte",
"lourd",
"livre",
"litre",
"liste",
"ligne",
"large",
"juste",
"jouer",
"jeune",
"jeter",
"jaune",
"jambe",
"image",
"huile",
"homme",
"hiver",
"heure",
"herbe",
"grand",
"glace",
"genre",
"gamme",
"fruit",
"froid",
"frère",
"frais",
"foule",
"forme",
"forêt",
"force",
"fleur",
"fille",
"figue",
"ferme",
"femme",
"faire",
"exact",
"étude",
"étape",
"était",
"étage",
"épais",
"entre",
"effet",
"écrit",
"école",
"éclat",
"droit",
"donné",
"doigt",
"dents",
"degré",
"décès",
"début",
"débit",
"danse",
"créer",
"court",
"cours",
"coupe",
"coton",
"corps",
"corde",
"copie",
"comme",
"clair",
"chose",
"chien",
"chaud",
"cassé",
"carte",
"carte",
"carré",
"calme",
"bruit",
"boîte",
"boîte",
"blanc",
"bâton",
"bande",
"balle",
"avoir",
"avant",
"autre",
"autre",
"aussi",
"aucun",
"atome",
"assez",
"assez",
"arbre",
"après",
"appel",
"année",
"amour",
"aller",
"ainsi",
"aider",
"acier","comme"];

words = ["votre",
"voler",
"voile",
"vivre",
"vingt",
"ville",
"vieux",
"vêtir",
"verre",
"verbe",
"venir",
"vague",
"vache",
"usine",
"unité",
"trois",
"train",
"total",
"tirer",
"terre",
"terme",
"tenir",
"temps",
"table",
"sujet",
"sucre",
"soins",
"signe",
"siège",
"score",
"sable",
"route",
"rouge",
"riche",
"rêver",
"reste",
"règle",
"rayon",
"radio",
"queue",
"quand",
"pouce",
"poste",
"poser",
"porte",
"pomme",
"point",
"poids",
"poème",
"pluie",
"plein",
"place",
"piste",
"pieds",
"pièce",
"petit",
"perdu",
"payer",
"pause",
"passé",
"paire",
"outil",
"ouest",
"ordre",
"odeur",
"océan",
"objet",
"nuage",
"notre",
"neige",
"monde",
"moins",
"mince",
"mille",
"mieux",
"métal",
"merci",
"matin",
"masse",
"lutte",
"lourd",
"livre",
"litre",
"liste",
"ligne",
"large",
"juste",
"jouer",
"jeune",
"jeter",
"jaune",
"jambe",
"image",
"huile",
"homme",
"hiver",
"heure",
"herbe",
"grand",
"glace",
"genre",
"gamme",
"fruit",
"froid",
"frère",
"frais",
"foule",
"forme",
"forêt",
"force",
"fleur",
"fille",
"figue",
"ferme",
"femme",
"faire",
"exact",
"étude",
"étape",
"était",
"étage",
"épais",
"entre",
"effet",
"écrit",
"école",
"éclat",
"droit",
"donné",
"doigt",
"dents",
"degré",
"décès",
"début",
"débit",
"danse",
"créer",
"court",
"cours",
"coupe",
"coton",
"corps",
"corde",
"copie",
"comme",
"clair",
"chose",
"chien",
"chaud",
"cassé",
"carte",
"carte",
"carré",
"calme",
"bruit",
"boîte",
"boîte",
"blanc",
"bâton",
"bande",
"balle",
"avoir",
"avant",
"autre",
"autre",
"aussi",
"aucun",
"atome",
"assez",
"assez",
"arbre",
"après",
"appel",
"année",
"amour",
"aller",
"ainsi",
"aider",
"acier",
"comme"];
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}

let currentWord = choiceWords[Math.floor(Math.random() * choiceWords.length)];
document.getElementById("input").focus();

async function getFormData() {

    const form = document.getElementById("wordInput");
    const formData = new FormData(form);
    let word = formData.get("word");
    if (word == "res" || row == 6) {
        reset();
    }
    if (word.length == 5 && animating == false) {
        if (words.includes(word) || choiceWords.includes(word)) {
            document.getElementById("input").value = "";
            //animating = True;
            for (let i = 0; i <= 4; i++) {
                current_id = (row.toString() + i.toString());
                document.getElementById(current_id).innerHTML = word.substring(i,i+1).toUpperCase();
                if (word.substring(i,i+1) == currentWord.substring(i,i+1)) {
                    document.getElementById(current_id).style.backgroundColor = "#008c23";
                } else if (currentWord.includes(word.substring(i,i+1))){
                    document.getElementById(current_id).style.backgroundColor = "#d4d000";
                } else {
                    document.getElementById(current_id).style.backgroundColor = "#5d635f";
                }
                document.getElementById(current_id).style.animationName = "example"; 
                await sleep(100);
            }
            await sleep(300);
            animating = false;
            for (let k = 0; k <= 4; k++) {
                current_id = (row.toString() + k.toString());
                document.getElementById(current_id).style.animationName = ""; 
            }
            row = row + 1;
        }
    }

    if (row == 6 || word == currentWord) {
        animating = true;
        for (let i = 0; i <= 4; i++) {
            document.getElementById("t" + i.toString()).innerHTML = currentWord.substring(i,i+1).toUpperCase();
            document.getElementById("t" + i.toString()).style.animationName = "example"; 
            for (let j = 0; j <= 5; j++) {
                document.getElementById(j.toString() + i.toString()).innerHTML = "";
                document.getElementById(j.toString() + i.toString()).style.animationName = "example"; 
            }
        }
        await sleep(300);
        animating = false;
        for (let i = 0; i <= 4; i++) {
            document.getElementById("t" + i.toString()).style.animationName = ""; 
            for (let j = 0; j <= 5; j++) {
                document.getElementById(j.toString() + i.toString()).style.animationName = ""; 
            }
        }
    }
}

async function reset() {
    document.getElementById("input").value = "";
    row = 0;
    animating = true;
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            document.getElementById(i.toString() + j.toString()).innerHTML = "";
            document.getElementById(i.toString() + j.toString()).style.animationName = "example"; 
            document.getElementById(i.toString() + j.toString()).style.backgroundColor = "#8a8a8a";
            await sleep(10);
        }
        await sleep(50);
    }
    await sleep(300);
    animating = false;
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            document.getElementById(i.toString() + j.toString()).style.animationName = ""; 
        }
    }
    currentWord = choiceWords[Math.floor(Math.random() * choiceWords.length)];

    document.getElementById("t0").innerHTML = "M";
    document.getElementById("t0").style.animationName = "example"; 
    document.getElementById("t1").innerHTML = "O";
    document.getElementById("t1").style.animationName = "example"; 
    document.getElementById("t2").innerHTML = "T";
    document.getElementById("t2").style.animationName = "example"; 
    document.getElementById("t3").innerHTML = "L";
    document.getElementById("t3").style.animationName = "example"; 
    document.getElementById("t4").innerHTML = "E";
    document.getElementById("t4").style.animationName = "example"; 

    await sleep(300);
    for (let i = 0; i <= 4; i++) {
        document.getElementById("t" + i.toString()).style.animationName = ""; 
    }
}

