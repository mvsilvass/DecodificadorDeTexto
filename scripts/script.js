document.addEventListener("DOMContentLoaded", () => {
    var inputArea = document.getElementById("input-text");
    var outputArea = document.getElementById("output-text");
    var resultArea = document.getElementById("main-output-copy-content");
    var messageArea = document.getElementById("main-output-content");
    var copyButton = document.getElementById('copyButton');

    function criptografar() {
        let text = inputArea.value;

        // Verificar se há letras maiúsculas
        const hasUppercase = /[A-ZÀ-ÖØ-Ý]/.test(text);

        // Verificar se há letras com acentos
        const hasAccentChars = /[À-ÖØ-öø-ÿ]/.test(text);

        if (hasUppercase || hasAccentChars) {
            alert("Apenas letras minúsculas sem acentos são permitidas.");
            return;
        }

        if (text === "") {
            return;
        }

        // Aplicando a criptografia
        text = text.replace(/e/g, "enter");
        text = text.replace(/i/g, "imes");
        text = text.replace(/a/g, "ai");
        text = text.replace(/o/g, "ober");
        text = text.replace(/u/g, "ufat");

        // Resultado
        outputArea.textContent = text;

        resultArea.style.display = 'flex';
        messageArea.style.display = 'none';
    }

    function descriptografar() {
        let text = inputArea.value;

        // Verificar se há letras maiúsculas
        const hasUppercase = /[A-ZÀ-ÖØ-Ý]/.test(text);

        // Verificar se há letras com acentos
        const hasAccentChars = /[À-ÖØ-öø-ÿ]/.test(text);

        if (hasUppercase || hasAccentChars) {
            alert("Apenas letras minúsculas sem acentos são permitidas.");
            return;
        }

        if (text === "") {
            return;
        }

        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");

        // Resultado
        outputArea.textContent = text;

        resultArea.style.display = 'flex';
        messageArea.style.display = 'none';
    }

    copyButton.addEventListener('click', function () {
        if (outputArea.value.length > 0) {
            outputArea.select();
            outputArea.setSelectionRange(0, 99999);
            document.execCommand('copy');
        }
    });

    window.criptografar = criptografar;
    window.descriptografar = descriptografar;
});
