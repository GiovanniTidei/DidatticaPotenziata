// Assegna la funzione showFooterOnScroll all'evento scroll della finestra
window.addEventListener("scroll", showFooterOnScroll);

var string =
    "Sostegno allo studio in tutte le materie in presenza e/o online da 8 a 16 anni";
var str = string.split("");
var el = document.getElementById("str");
(function animate() {
    str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
    var running = setTimeout(animate, 90);
})();

// Recupera l'elemento footer nn so eprché nn funzia vabe
var footer = document.getElementById("stickyfoot");

// Funzione per mostrare il footer quando si scrolla la pagina
function showFooterOnScroll() {
    // Recupera la posizione attuale dello scroll
    var currentScroll = window.pageYOffset;

    // Recupera l'altezza della pagina
    var pageHeight = document.body.offsetHeight;

    // Condizione per mostrare il footer quando si è scrollato il 90% della pagina
    if (currentScroll >= pageHeight * 0.4) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
}
