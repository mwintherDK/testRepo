// Se her for nyttige git commands: https://github.com/joshnh/Git-Commands
// Lær at anvende ternary, omskriv de tre if/else nedenfor

// 1:
let names = ["Arne", "Balder", "Calle", "Doriiiith", "Einar", "Franke"];

if (names.length > 3) {
  console.log(`Der er ${names.length} navne i dit array!`);
} else {
  console.log(`Det er under fire navne i dit array`);
}
// Asger
console.log(
  names.length > 3
    ? `Der er ${names.length} navne i dit array!`
    : `Det er under fire navne i dit array`
);
//

// Maren
console.log(
  names.length > 3
    ? `Der er ${names.length} navne i dit array!`
    : "Det er under fire navne i dit array"
);
//

// Birk
let nameStringBirk =
  names.length > 3
    ? `Der er ${names.length} navne i dit array!`
    : `Det er under fire navne i dit array`;
console.log(nameStringBirk);
//

// Nickolai
console.log(
  names.length > 3
    ? `Der er ${names.length} navne i dit array`
    : `Det er under fire navne i dit array`
);
//

// Nicklas
names.length > 3
  ? console.log(`Der er ${names.length} navne i dit array!`)
  : console.log(`Det er under fire navne i dit array`);
//

// 2:
let jamie = {
  nick: "Kingslayer",
  name: "Jamie Lannister",
  girlfriend: {
    nick: "Protector of the Realm",
    name: "Cersei Lannister"
  },
  alive: false
};

// Asger

//

// Maren

//

// Birk
let jamieAliveBirk = jamie.alive ? "Hes alive! Hurrah" : "Awww...Jamie is dead";
console.log(jamieAliveBirk);
//

// Nickolai
console.log(jamie.alive ? "Hes alive! Hurrah" : "Awww...Jamie os dead");
//

// Nicklas
jamie.alive
  ? console.log("Hes alive! Hurrah")
  : console.log("Awww...Jamie is dead");
//

if (jamie.alive) {
  //Dum kommentar
  console.log("Hes alive! Hurrah");
} else {
  console.log("Awww...Jamie is dead");
}

// 3:
let clientWindowWidth = window.innerWidth;
let container = document.querySelector(".container");

if (clientWindowWidth > 1200) {
  container.classList.add("hugeScreen");
} else {
  container.classList.remove("hugeScreen");
}

// Asger
let noget = "Her er sn løsning af et eller andet";
//

// Maren

//

// Birk
clientWindowWidth > 1200
  ? container.classList.add("hugeScreen")
  : container.classList.remove("hugeScreen");
//

// Nickolai
clientWindowWidth > 1200
  ? container.classList.add("hugeScreen")
  : container.classList.remove("hugeScreen");
//

// Nicklas
clientWindowWidth > 1200
  ? container.classList.add("hugeScreen")
  : container.classList.remove("hugeScreen");
//
