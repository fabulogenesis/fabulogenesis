// dictionnaire numéros -> noms des boutons
const dictionnaire = {
  1: "Fruit",
  2: "Couleur",
  3: "Animal"
};

const container = document.getElementById("buttons");

// Génération automatique des boutons
for (let num in dictionnaire) {
  const div = document.createElement("div");
  div.className = "container";

  const btn = document.createElement("button");
  btn.textContent = dictionnaire[num];
  btn.onclick = () => tirer(num);

  const span = document.createElement("span");
  span.id = "result-" + num;

  div.appendChild(btn);
  div.appendChild(span);
  container.appendChild(div);
}

// Fonction tirage aléatoire
function tirer(num) {
  fetch(`data/${num}.json`)
    .then(res => res.json())
    .then(liste => {
      const randomItem = liste[Math.floor(Math.random() * liste.length)];
      document.getElementById("result-" + num).textContent = randomItem;
    })
    .catch(err => console.error("Erreur chargement JSON :", err));
}
