document.addEventListener("DOMContentLoaded", () => {
    // Elementos da interface
    var inputArea = document.getElementById("input-text");
    var outputArea = document.getElementById("output-text");
    var resultArea = document.getElementById("main-output-copy-content");
    var messageArea = document.getElementById("main-output-content");
    var copyButton = document.getElementById('copyButton');

    function checkText(text) {
        // Verifica se há letras maiúsculas
        const hasUppercase = /[A-ZÀ-ÖØ-Ý]/.test(text);
        
        // Verifica se há letras com acentos
        const hasAccentChars = /[À-ÖØ-öø-ÿ]/.test(text);
        
        if (hasUppercase || hasAccentChars) {
            alert("Apenas letras minúsculas sem acentos são permitidas.");
            return false;
        }

        // Verificando se está vazio
        if (text === "") {
            return;
        }

        return true;
    }

    function showResult(text){
        outputArea.textContent = text;
        resultArea.style.display = 'flex';
        messageArea.style.display = 'none';
    }

    function encrypt() {
        let text = inputArea.value;

        if (!checkText(text)) {
            return;
        }

        // Criptografando
        text = text.replace(/e/g, "enter");
        text = text.replace(/i/g, "imes");
        text = text.replace(/a/g, "ai");
        text = text.replace(/o/g, "ober");
        text = text.replace(/u/g, "ufat");

        showResult(text);
    }

    function decrypt() {
        let text = inputArea.value;

        if (!checkText(text)) {
            return;
        }

        // Descriptografando
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");

        showResult(text);
    }

    // Botão de copiar
    copyButton.addEventListener('click', function () {
        if (outputArea.value.length > 0) {
            outputArea.select();
            outputArea.setSelectionRange(0, 99999);
            document.execCommand('copy');
        }
    });

     // Botões de criptografar e descriptografar
    document.getElementById("encryptButton").addEventListener('click', encrypt);
    document.getElementById("decryptButton").addEventListener('click', decrypt);
});
