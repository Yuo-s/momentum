const images = [
    "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

url = `./img/${chosenImage}`;
document.body.style.background = `url(${url}) no-repeat`;
document.body.style.backgroundSize = `cover`;

