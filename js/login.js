const loginBtn = document.getElementById("login-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loggedinp = document.getElementById("loggedin");
loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(data),
  });
  const respond = await res.text();
  if (respond === "Logged in successfully") {
    window.location.href = "./index.html";
  } else {
    loggedinp.style.color = "red";
    loggedinp.innerText = "Failed To Login";
  }
});
