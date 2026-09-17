document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiryForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }
            if (!email.includes("@")) {
                alert("Enter valid email");
                return;
            }
            alert("Thank you " + name + "! Enquiry received.");
            form.reset();
        });
    }
});