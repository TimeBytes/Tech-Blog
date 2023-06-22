const loginBtn = document.getElementById("login-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };
  fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 200) {
      window.location.href = "/";
    } else {
      alert("Invalid username or password");
    }
  });
});
