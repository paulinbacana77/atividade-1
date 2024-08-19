"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1)();
var nome = prompt('Digite o nome do aluno: ');
var nota1 = parseFloat(prompt('Digite a primeira nota: '));
var nota2 = parseFloat(prompt('Digite a segunda nota: '));
var nota3 = parseFloat(prompt('Digite a terceira nota: '));
var nota4 = parseFloat(prompt('Digite a quarta nota: '));
var notas = [nota1, nota2, nota3, nota4];
function calcularMedia(notas) {
    var soma = 0;
    soma = notas[0] + notas[1] + notas[2] + notas[3];
    return soma / 4;
}
var aluno = {
    nome: nome,
    notas: notas,
    mediaFinal: calcularMedia(notas),
};
console.log(aluno);
