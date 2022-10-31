const kits = ["crash", "Ride", "Snare", "Tink", "Tom"];

const keysE1 = document.querySelector(".keys");
kits.forEach((kit) => {
    const buttonE1 = document.createElement("button");

    buttonE1.classList.add("btn");
    buttonE1.innerText = kit;
    keysE1.appendChild(buttonE1);
    const audioE1 = document.createElement("audio");
    audioE1.src = "sounds/" + kit + ".mp3";
    keysE1.appendChild(audioE1);
    buttonE1.addEventListener("click", () => {
        audioE1.play();
    });
});