function mostrarPagina(idPagina) {
  const paginas = document.querySelectorAll('.pagina');
  paginas.forEach(pagina => {
    pagina.classList.remove('ativo');
  });

  const paginaSelecionada = document.getElementById(idPagina);
  if (paginaSelecionada) {
    paginaSelecionada.classList.add('ativo');

    sessionStorage.setItem("ultimaPagina", idPagina);
  }
}


window.addEventListener("load", () => {
  const ultimaPagina = sessionStorage.getItem("ultimaPagina");
  if (ultimaPagina) {
    mostrarPagina(ultimaPagina);
  } else {

    const primeiraPagina = document.querySelector(".pagina");
    if (primeiraPagina) {
      primeiraPagina.classList.add("ativo");
    }
  }
});

document.addEventListener("contextmenu", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

