document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.querySelector("#input-text");
    const resultArea = document.querySelector("#result-text");

    function criptografar() {
        let text = textArea.value;

        text = text.replace(/e/g, "enter");
        text = text.replace(/i/g, "imes");
        text = text.replace(/a/g, "ai");
        text = text.replace(/o/g, "ober");
        text = text.replace(/u/g, "ufat");

        // Exibindo o resultado
        resultArea.innerHTML = `<h2>Mensagem Criptografada</h2><p>${text}</p>`;
    }

    function descriptografar() {
        let text = textArea.value;

        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");

        // Exibindo o resultado
        resultArea.innerHTML = `<h2>Mensagem Descriptografada</h2><p>${text}</p>`;
    }

    window.criptografar = criptografar;
    window.descriptografar = descriptografar;
});
