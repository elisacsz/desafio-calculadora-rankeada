function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function classificarNivel(vitorias) {
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return nivel;
}

let vitorias = 55;
let derrotas = 25;

const saldo = calcularSaldo(vitorias, derrotas);

const nivel = classificarNivel(vitorias);

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
