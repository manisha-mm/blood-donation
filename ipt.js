document.addEventListener("DOMContentLoaded", function () {
  const notificationContainer = document.getElementById("notificationContainer");
  const notification = document.getElementById("notification");
  const notificationMessage = document.getElementById("notificationMessage");
  const dismissButton = document.getElementById("dismissButton");

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

  // Show the notification immediately
  showNotification("Thank you for donating blood! Your generosity saves lives.");
});
