function salvarFicha() {
  const ficha = {
    nome: document.getElementById("nome").value,
    raca: document.getElementById("raca").value,
    genero: document.getElementById("genero").value,
    idade: document.getElementById("idade").value,
    alma: document.getElementById("alma").value,
    personalidade: document.getElementById("personalidade").value,
    love: document.getElementById("love").value,
    exp: document.getElementById("exp").value,
    hp: document.getElementById("hp").value,
    atk: document.getElementById("atk").value,
    def: document.getElementById("def").value,
    act: document.getElementById("act").value,
    soul: document.getElementById("soul").value,
    gold: document.getElementById("gold").value,
    inventario: Array.from(document.querySelectorAll("#inventario input")).map(input => input.value)
  };

  localStorage.setItem("fichaRPGTALE", JSON.stringify(ficha));
  alert("Ficha salva com sucesso!");
}

function carregarFicha() {
  const ficha = JSON.parse(localStorage.getItem("fichaRPGTALE"));
  if (!ficha) return alert("Nenhuma ficha encontrada.");

  document.getElementById("nome").value = ficha.nome;
  document.getElementById("raca").value = ficha.raca;
  document.getElementById("genero").value = ficha.genero;
  document.getElementById("idade").value = ficha.idade;
  document.getElementById("alma").value = ficha.alma;
  document.getElementById("personalidade").value = ficha.personalidade;
  document.getElementById("love").value = ficha.love;
  document.getElementById("exp").value = ficha.exp;
  document.getElementById("hp").value = ficha.hp;
  document.getElementById("atk").value = ficha.atk;
  document.getElementById("def").value = ficha.def;
  document.getElementById("act").value = ficha.act;
  document.getElementById("soul").value = ficha.soul;
  document.getElementById("gold").value = ficha.gold;

  const inputsInv = document.querySelectorAll("#inventario input");
  ficha.inventario.forEach((item, i) => {
    if (inputsInv[i]) inputsInv[i].value = item;
  });

  alert("Ficha carregada!");
}

function exportarPDF() {
  const fichaElement = document.querySelector(".container");

  const opt = {
    margin:       0.5,
    filename:     'Ficha_RPGTALE.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(fichaElement).save();
}
