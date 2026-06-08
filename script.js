function mostrarPagina(idPagina) {
  const paginas = document.querySelectorAll('.pagina');
  paginas.forEach(pagina => {
    pagina.classList.remove('ativo');
  });

  const paginaSelecionada = document.getElementById(idPagina);
  if (paginaSelecionada) {
    paginaSelecionada.classList.add('ativo');
    // Salva a última página acessada apenas na sessão atual
    sessionStorage.setItem("ultimaPagina", idPagina);
  }
}

// Quando a página recarregar, restaura a última seção
window.addEventListener("load", () => {
  const ultimaPagina = sessionStorage.getItem("ultimaPagina");
  if (ultimaPagina) {
    mostrarPagina(ultimaPagina);
  } else {
    // Se não houver nada salvo (nova guia), abre a primeira página por padrão
    const primeiraPagina = document.querySelector(".pagina");
    if (primeiraPagina) {
      primeiraPagina.classList.add("ativo");
    }
  }
});

document.addEventListener("contextmenu", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault(); // bloqueia menu de contexto em imagens
  }
});

