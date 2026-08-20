const form = document.querySelector("form");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const formMessage = document.getElementById("form-message");
const errorMessages = {
    name: "Please enter a valid name.",
    email: "Please enter a valid email address."
};
form.addEventListener("submit", function(event) {
    event.preventDefault();
    nameError.textContent = "";
    emailError.textContent = "";
    formMessage.textContent = "";
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const requestType = document.getElementById("request-type").value;
    const itemDetails = document.getElementById("item-details").value.trim();

    nameError.textContent = "";

    if (name.length < 2) {
        nameError.textContent = "Please enter a valid name.";
        return;
    }
    emailError.textContent = "";

    if (!email.includes("@")) {
        emailError.textContent = errorMessages.email;
        return;
    }

    const request = {
        name: name,
        email: email,
        requestType: requestType,
        itemDetails: itemDetails
    };

    localStorage.setItem("bakeryRequest", JSON.stringify(request));

    formMessage.textContent = "Your request has been saved. Thank you!";

    form.reset();
});
function loadSavedRequest() {
    const savedRequest = localStorage.getItem("bakeryRequest");

    if (savedRequest) {
        const request = JSON.parse(savedRequest);
        

        document.getElementById("name").value = request.name;
        document.getElementById("email").value = request.email;
        document.getElementById("request-type").value = request.requestType;
        document.getElementById("item-details").value = request.itemDetails;
        formMessage.textContent = "Your saved request information was restored.";
    }
}

loadSavedRequest();
