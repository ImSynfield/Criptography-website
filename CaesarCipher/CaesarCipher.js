function cifraDeCesar(texto, deslocamento) {

    return texto.split('').map((caractere) => { // transformação em array

        if (caractere.match(/[a-z]/i)) {
            const codigoCaractere = caractere.charCodeAt(0);
            const base = codigoCaractere >= 65 && codigoCaractere <= 90 ? 65 : 97;  // Maiúscula ou minúscula tabela ASCII (Javascript)

            return String.fromCharCode(((codigoCaractere - base + deslocamento) % 26) + base); // Execução da contagem, caso seja maior passe da letra "z" volte para o início da contagem

        }

        return caractere;  // Mantém o caractere inalterado se não for uma letra

    }).join('');

}

function cifrar() {

    const texto = prompt('Digite a frase que deseja cifrar:');
    const letraEscolhida = prompt('Escolha uma letra (a-z) para basear a cifra:').toLowerCase();


    if (letraEscolhida.match(/[a-z]/)) {

        const deslocamento = letraEscolhida.charCodeAt(0) - 97;  // Calcula o deslocamento com base na letra escolhida
        const resultado = cifraDeCesar(texto, deslocamento);

        alert('Texto cifrado: ' + resultado);

    } 

else {
        alert('Por favor, escolha uma letra válida de a-z.');
    }
}

// Iniciar o processo
cifrar();
