

const contactForm = document.getElementById("contact-form");
const mapSection = document.getElementById("map-section");
const usersInfo = [];

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const textArea = document.getElementById("message").value;

    const newUser = {
        name,
        phone,
        email,
        message: textArea,
    };

    function clearErrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(err => err.remove());
    }

    function showError(container, message) {
        const error = document.createElement("p");
        error.classList.add("error");
        error.style.color = "red";
        error.style.fontSize = "12px";
        error.style.margin = "0";
        error.innerText = message;

        container.appendChild(error);
    }

    function contactValidation() {
        let isValid = true;

        clearErrors();

        const inputNameBox = document.getElementById("inputName");
        const inputNumberBox = document.getElementById("inputNumber");
        const inputEmailBox = document.getElementById("inputEmail");

        if (name === "") {
            showError(inputNameBox, "Enter name!");
            isValid = false;
        }

        const phoneValidator = /^(((\+|00)359[- ]?)|(0))(8[- ]?[789]([- ]?\d){7})$/;

        if (phone === "") {
            showError(inputNumberBox, "Enter phone number!");
            isValid = false;
        } else if (!phoneValidator.test(phone)) {
            showError(inputNumberBox, "Invalid Bulgarian number!");
            isValid = false;
        }

        const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            showError(inputEmailBox, "Enter email address!");
            isValid = false;
        } else if (!emailValidator.test(email)) {
            showError(inputEmailBox, "Invalid email address!");
            isValid = false;
        }

        return isValid;
    }

    const validForm = contactValidation();

    if (validForm) {
        usersInfo.push(newUser);
        console.log("New User:", newUser);
        console.log("User list:", usersInfo);
    }
});

const locationBtn = document.getElementById("map");

function addOrRemoveLocation() {

    locationBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(mapSection.innerHTML);

        if (mapSection.innerHTML === "") {
            mapSection.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11731.716700620645!2d23.32271489074343!3d42.68404256668749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbg!2sbg!4v1776712173482!5m2!1sbg!2sbg" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        } else {
            mapSection.innerHTML = '';
        }
    });
}
addOrRemoveLocation();
