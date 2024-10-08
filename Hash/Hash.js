async function sha1(message) {
    // Codifica a mensagem como UTF-8
    const encoder = new TextEncoder();
    const data = encoder.encode(message);

    // Gera o hash SHA-1
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);

    // Converter o buffer de hash para uma string hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

// Solicita ao usuário que insira o texto
const originalText = prompt("Digite o texto para gerar o hash SHA-1:");

// Gera e exibe o hash SHA-1
sha1(originalText).then(hash => {
    console.log("SHA-1 Hash:", hash);
});
