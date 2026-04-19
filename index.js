// https://api.api-ninjas.com/v1/carmakes - car api
//  https://vpic.nhtsa.dot.gov/api/ - car api

const contactForm = document.getElementById("contact-form");
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
    }

    function contactValidation() {

        const inputError = document.createElement("p");
        inputError.style.color = "red";
        inputError.style.fontSize = "12px";
        inputError.style.margin = "0px";
        inputError.innerText = "";

        if (name === "") {
            const inputNameBox = document.getElementById("inputName");
            inputNameBox.appendChild(inputError);
            return inputError.innerText = "Enter name!";

        } else {
            usersInfo.push(newUser.name);
        }

        const phoneValidator = /^(((\+|00)359[- ]?)|(0))(8[- ]?[789]([- ]?\d){7})$/;
        const inputNumberBox = document.getElementById("inputNumber");

        if (phone === "") {
            inputNumberBox.appendChild(inputError);
            console.error(inputError.innerText = "Enter phone number!");

        } else if (!phoneValidator.test(phone)) {
            inputNumberBox.appendChild(inputError);
            console.error(inputError.innerText = "Invalid bulgarian number!")
        } else {
            usersInfo.push(newUser);
        }

        const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const inputEmailBox = document.getElementById("inputEmail");
        
        if (email === "") {
            inputEmailBox.appendChild(inputError);
            return inputError.innerText = "Enter email adress!";

        } else if (!emailValidator.test(email)) {
            inputNumberBox.appendChild(inputError);
            console.error(inputError.innerText = "Invalid email adress!")
        } else {
            // usersInfo.push(newUser.email);
        }

        console.log("New User:", newUser);
        console.log("User list:", usersInfo);
    }
    contactValidation();

})
