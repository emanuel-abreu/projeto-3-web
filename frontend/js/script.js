const toggleThemeBtn = document.getElementById("toggle-theme");
const body = document.body;

if (localStorage.getItem("tema") === "dark") {
  body.classList.add("dark-mode");
}

toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "tema",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
});

document
  .getElementById("form-contato")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const msgErro = document.getElementById("mensagem-erro");

    if (!nome || !email || !mensagem) {
      msgErro.style.display = "block";
    } else {
      msgErro.style.display = "none";
      alert("Mensagem enviada com sucesso!");
      this.reset();
    }
  });

function atualizarHora() {
  const agora = new Date();
  const dataHora = agora.toLocaleString("pt-BR");
  document.getElementById(
    "data-hora"
  ).textContent = `Data e hora atual: ${dataHora}`;
}
setInterval(atualizarHora, 1000);
atualizarHora();

const text = "Proteja-se na Web!";
const target = document.getElementById("typed");
let charIndex = 0;

function typeEffect() {
  if (charIndex < text.length) {
    target.textContent += text.charAt(charIndex++);
    setTimeout(typeEffect, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((sec) => {
  sec.classList.add("fade");
  observer.observe(sec);
});
