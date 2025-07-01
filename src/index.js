import './styles/style.css'

const user = document.getElementById("user");
const password = document.getElementById("current-password");
const enter = document.getElementById("enterBtn");

let usuarios = [
  { name: "rafaga", password: "1234" },
  { name: "maria", password: "1234" },
  { name: "thasses", password: "1234" },
];

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();

  if (user.value.trim() === "" || password.value.trim() === "") {
    alert("Preencha todos os campos");
    return;
  }

  const userProcurado = usuarios.find(
    (u) =>
      u.name.toLowerCase() === user.value.trim().toLowerCase() &&
      u.password === password.value
  );
  //estou capturando a resposta se o usuario esta correto ou nao.

  if (userProcurado) {
    //localStorage.setItem("loggedUser", userProcurado.name);
    //location.href = "#";
    console.log('Logou amore')
  } else {
    alert("Dados incorretos");
  }
});
