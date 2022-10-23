// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
  {
    id: 0,
    url: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
    title: "Svezia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    id: 1,
    url: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Perù",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    id: 2,
    url: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
    title: "Chile",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    id: 3,
    url: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Argentina",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    id: 4,
    url: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
    title: "Colombia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
];

// FUNCTION 1
const appendCurrentImage = (images, carouselIndicator, carouselInner) => {
  const button = document.createElement("button");
  button.classList.add("carousel-button");

  if (document.getElementsByClassName("carousel-button").length === 0) {
    button.classList.add("active");
  }

  button.type = "button";

  carouselIndicator.append(button);

  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  carouselItem.setAttribute("id", `img-${images.id}`);

  if (document.getElementsByClassName("carousel-item").length === 0) {
    carouselItem.classList.add("active");
  }

  const titolo = document.createElement("div");
  titolo.classList.add(
    "carousel-caption",
    "d-none",
    "d-md-block",
    "my-font-style"
  );
  titolo.innerText = `${images.title}`;

  const didascalia = document.createElement("div");
  didascalia.classList.add(
    "carousel-caption",
    "d-none",
    "d-md-block",
    "my-caption-style"
  );
  didascalia.innerText = `${images.description}`;

  const carouselImg = document.createElement("img");
  carouselImg.classList.add("d-block", "w-100");
  carouselImg.src = images.url;

  carouselItem.append(titolo);
  carouselItem.append(didascalia);
  carouselItem.append(carouselImg);
  carouselInner.append(carouselItem);
};

// FUNCTION 2
const slideImage = (isNext) => {
  const activeImg = document.getElementsByClassName("carousel-item active")[0];
  const activeImgNumber = parseInt(activeImg.id.split("-")[1], 10);

  activeImg.classList.remove("active");

  if (isNext) {
    const newActiveImgNumber = activeImgNumber + 1;

    if (images.filter((x) => x.id === newActiveImgNumber)[0]) {
      document
        .getElementsByClassName("carousel-item")
        [newActiveImgNumber].classList.add("active");
    } else {
      document
        .getElementsByClassName("carousel-item")[0]
        .classList.add("active");
    }
  } else {
    const newActiveImgNumber = activeImgNumber - 1;

    if (images.filter((x) => x.id === newActiveImgNumber)[0]) {
      document
        .getElementsByClassName("carousel-item")
        [newActiveImgNumber].classList.add("active");
    } else {
      document
        .getElementsByClassName("carousel-item")
        [images.length - 1].classList.add("active");
    }
  }
};

// FUNCTION 3 MAIN
const main = () => {
  const prevButton = document.getElementsByClassName(
    "carousel-control-prev"
  )[0];
  prevButton.addEventListener("click", () => {
    slideImage(false);
  });
  const nextButton = document.getElementsByClassName(
    "carousel-control-next"
  )[0];
  nextButton.addEventListener("click", () => {
    slideImage(true);
  });

  const carouselIndicator = document.getElementsByClassName("mycarousel")[0];

  const carouselInner = document.getElementsByClassName("carousel-inner")[0];

  for (const img of images) {
    appendCurrentImage(img, carouselIndicator, carouselInner);
  }
};
main();
