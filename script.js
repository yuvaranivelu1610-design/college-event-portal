const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const department = document.getElementById("department").value.trim();
    const eventName = document.getElementById("event").value;

    // Validate empty fields
    if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        department === "" ||
        eventName === ""
    ) {
        message.textContent = "Please fill all the required fields.";
        return;
    }

    // Validate mobile number
    if (!/^[0-9]{10}$/.test(mobile)) {
        message.textContent = "Please enter a valid 10-digit mobile number.";
        return;
    }

    // Success message
    message.textContent =
        "Registration successful! Welcome " +
        name +
        ". You registered for " +
        eventName +
        ".";

    registrationForm.reset();
});


// Select event from Event Card
function selectEvent(eventName) {

    document.getElementById("event").value = eventName;

    document.getElementById("registration").scrollIntoView({
        behavior: "smooth"
    });
}


// Register Now button
function scrollToRegistration() {

    document.getElementById("registration").scrollIntoView({
        behavior: "smooth"
    });
}


// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    contactForm.reset();
});