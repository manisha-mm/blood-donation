document.addEventListener("DOMContentLoaded", function () {
    const notificationContainer = document.getElementById("notificationContainer");
    const notification = document.getElementById("notification");
    const notificationMessage = document.getElementById("notificationMessage");
    const dismissButton = document.getElementById("dismissButton");

    const bloodTypes = ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"];

    // Show the notification
    function showNotification(message) {
        notificationMessage.textContent = message;
        notificationContainer.style.display = "block";
    }

    // Dismiss the notification
    dismissButton.addEventListener("click", function () {
        notificationContainer.style.display = "none";
        window.location.href = "bd.html";
       
    });

    // Display a new random blood type notification every 3 seconds
    setInterval(function () {
        const randomBloodType = bloodTypes[Math.floor(Math.random() * bloodTypes.length)];
        const message = `Urgent: Blood type ${randomBloodType} is required!`;
        showNotification(message);
    }, 3000); // Display a new notification every 3 seconds
});
