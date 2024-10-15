function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconder todo o conteúdo das abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover a classe "active" dos botões das abas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Exibir o conteúdo da aba atual e adicionar a classe "active" ao botão clicado
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Exibir a aba "Visão Geral" por padrão
document.getElementById("visao-geral").style.display = "block";
