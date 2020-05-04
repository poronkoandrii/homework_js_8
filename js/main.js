// 1. Создать страницу, которая выводит нумерованный список песен:
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
function createPlaylist(arr) {
  let number = 1;
  for (let i of arr) {
    let li = document.createElement("li");
    li.innerHTML = `${number}. ${i.author} - ${i.song}`;
    number++;
    document.body.appendChild(li);
  }
}
createPlaylist(playList);
// Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
function modal() {
  const modal = document.getElementById("modal");
  if (modal.classList.contains("toggle")) {
    modal.classList.remove("toggle");
  } else {
    modal.classList.add("toggle");
  }
}
// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
let i = 0;
function trafficLight() {
  let light = document.querySelectorAll(".circle");
  for (let k = 0; k < light.length; k++) {
    light[k].style.opacity = "0.3";
  }
  light[i].style.opacity = "1";
  ++i;
  if (i === 3) {
    i = 0;
  }
  return i;
}
