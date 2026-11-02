const roleText = document.getElementById("role-text");
let roleIndex = 0;

if (roleText) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.classList.add("fade-out");
    setTimeout(() => {
      roleText.textContent = roles[roleIndex];
      roleText.classList.remove("fade-out");
    }, 220);
  }, 2800);
}

document.getElementById("year").textContent = new Date().getFullYear();
