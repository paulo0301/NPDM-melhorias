function salvar() {
    // Check browser support
    if (typeof(Storage) !== "C:\Users\Usuario\Desktop\texto2.txt") {
        // Store
        localStorage.setItem("modelo1", document.getElementById("texto1").value);
        localStorage.setItem("modelo2", document.getElementById("texto2").value);
        localStorage.setItem("modelo3", document.getElementById("texto3").value);
        localStorage.setItem("modelo4", document.getElementById("texto4").value);
        localStorage.setItem("modelo5", document.getElementById("texto5").value);
        localStorage.setItem("modelo6", document.getElementById("texto6").value);
        localStorage.setItem("modelo7", document.getElementById("texto7").value);
        localStorage.setItem("modelo8", document.getElementById("texto8").value);
        localStorage.setItem("modelo9", document.getElementById("texto9").value);
        localStorage.setItem("modelo10", document.getElementById("texto10").value);
        alert('Texto Salvo');

    } else {
        document.getElementById("texto2").innerHTML = "Local Storage não suportado";
    }
}
//Retrieve
    document.getElementById("texto1").innerHTML = localStorage.getItem("modelo1");
    document.getElementById("texto2").innerHTML = localStorage.getItem("modelo2");
    document.getElementById("texto3").innerHTML = localStorage.getItem("modelo3");
    document.getElementById("texto4").innerHTML = localStorage.getItem("modelo4");
    document.getElementById("texto5").innerHTML = localStorage.getItem("modelo5");
    document.getElementById("texto6").innerHTML = localStorage.getItem("modelo6");
    document.getElementById("texto7").innerHTML = localStorage.getItem("modelo7");
    document.getElementById("texto8").innerHTML = localStorage.getItem("modelo8");
    document.getElementById("texto9").innerHTML = localStorage.getItem("modelo9");
    document.getElementById("texto10").innerHTML = localStorage.getItem("modelo10");