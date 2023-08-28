document.addEventListener("DOMContentLoaded", function () {
  const appointmentForm = document.getElementById("appointment-form");

  appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = appointmentForm.name.value;
    const email = appointmentForm.email.value;
    const date = appointmentForm.date.value;

    alert(`Appointment booked for ${name} on ${date}.\nConfirmation email will be sent to ${email}`);
    window.location.href = "notifications.html";
    appointmentForm.reset();
  });
});
