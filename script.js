
// select all open and close buttons with the specified data attribute
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
var modalText = document.querySelector(".modal-body");
var modalTitle = document.querySelector(".title");
var modalImage = document.querySelector(".modal-image");

// for each element stored in openModalButtons, add a click event listener that selects the modal being referred
// to and runs openModal on it
openModalButtons.forEach(img => {
    img.addEventListener("click", () => {
        const modal = document.querySelector(img.dataset.modalTarget); // .dataset accesses all data attributes
        openModal(modal);
        if (img.id == "mercury") {
            modalTitle.innerHTML="Mercury";
            modalText.innerHTML= "Mercury—the smallest planet in our solar system \
            and closest to the Sun—is only slightly larger than Earth's Moon. Mercury\
             is the fastest planet, zipping around the Sun every 88 Earth days.";}

        else if (img.id == "venus") {
            modalTitle.innerHTML="Venus";
            modalImage.src = "realVenus.jpg";
            modalText.innerHTML= "Venus spins slowly in the opposite direction from \
            most planets. A thick atmosphere traps heat in a runaway greenhouse effect,\
             making it the hottest planet in our solar system.";}

        else if (img.id == "earth") {
            modalTitle.innerHTML="Earth";
            modalImage.src = "realEarth.jpg";
            modalText.innerHTML = "Earth—our home planet—is the only place we know of\
             so far that’s inhabited by living things. It's also the only planet in our\
              solar system with liquid water on the surface."
        }
        else if (img.id == "mars") {
            modalTitle.innerHTML="Mars";
            modalImage.src = "realMars.jpg";
            modalText.innerHTML = "Mars is a dusty, cold, desert world \
            with a very thin atmosphere. There is strong evidence Mars \
            was—billions of years ago—wetter and warmer, with a thicker \
             atmosphere."
        }
        else if (img.id == "jupiter") {
            modalTitle.innerHTML="Jupiter";
            modalImage.src = "realJupiter.jpg"
            modalText.innerHTML = "Jupiter is more than twice as massive than\
             the other planets of our solar system combined. The giant planet's\
              Great Red spot is a centuries-old storm bigger than Earth."
        }
        else if (img.id == "saturn") {
            modalTitle.innerHTML="Saturn";
            modalImage.src = "realSaturn.jpg";
            modalText.innerHTML = "Adorned with a dazzling, complex system of icy\
             rings, Saturn is unique in our solar system. The other giant planets\
              have rings, but none are as spectacular as Saturn's."
        }
        else if (img.id == "uranus") {
            modalTitle.innerHTML="Uranus";
            modalImage.src = "realUranus.jpg";
            modalText.innerHTML = "Uranus—seventh planet from the Sun—rotates at a\
             nearly 90-degree angle from the plane of its orbit. This unique tilt\
              makes Uranus appear to spin on its side."
        }
        else {
            modalTitle.innerHTML="Neptune";
            modalImage.src = "realNeptune.jpg";
            modalText.innerHTML = "Neptune—the eighth and most distant major planet \
            orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the\
             first planet located through mathematical calculations, rather than by telescope."
        }
    });

});

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

// if the modal exists, add 'active' to its class to show the modal, same for overlay
function openModal(modal) {
    if (modal==null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal==null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}