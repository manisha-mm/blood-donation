document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const usernameField = loginForm.username;
  const passwordField = loginForm.password;

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameField.value;
    const password = passwordField.value;

    // Regular expression for alphanumeric and specific symbols
    const passwordRegex = /^[a-zA-Z0-9@_]+$/;

    if (!passwordRegex.test(password)|| password.length <= 6) {
      alert("Invalid password. Password must be more than 6 characters and include only alphabets, numbers, @, and _.");
    } else {
      alert("Login successful!");
      window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
    }
  });
});