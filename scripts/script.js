document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.querySelector("#input-text");
    const resultArea = document.querySelector("#result-text");

    function criptografar() {
        let text = textArea.value;
    
        // Validando se há caracteres maiúsculos ou especiais
        if (/[A-Z!@#$%^&*()_+{}\[\]:;"'<>,.?\/\\|áéíóúâêîôûãõàèìòùäëïöü]/i.test(text)) {
            alert("Apenas letras minúsculas sem acentos ou caracteres especiais são permitidas.");
            return;
        }
    
        // Aplicando a criptografia
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
    
        // Validando se há caracteres maiúsculos ou especiais
        if (/[A-Z!@#$%^&*()_+{}\[\]:;"'<>,.?\/\\|áéíóúâêîôûãõàèìòùäëïöü]/i.test(text)) {
            alert("Apenas letras minúsculas sem acentos ou caracteres especiais são permitidas.");
            return;
        }
    
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
