function addCard() {
    const gallery = document.getElementById("gallery");
    const textInput = document.getElementById("customText");
    const imageInput = document.getElementById("imageUpload");

    const card = document.createElement("div");
    card.classList.add("card");

    if (imageInput.files.length > 0) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(imageInput.files[0]);
        card.appendChild(img);
    }

    if (textInput.value.trim() !== "") {
        const text = document.createElement("p");
        text.textContent = textInput.value;
        card.appendChild(text);
    }

    gallery.appendChild(card);

    textInput.value = "";
    imageInput.value = "";
}
