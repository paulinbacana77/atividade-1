import promptSync from 'prompt-sync';

const prompt = promptSync();

interface Aluno {
    nome: string;
    notas: number[];
    mediaFinal: number;
}

const nome = prompt('Digite o nome do aluno: ');

const nota1 = parseFloat(prompt('Digite a primeira nota: '));
const nota2 = parseFloat(prompt('Digite a segunda nota: '));
const nota3 = parseFloat(prompt('Digite a terceira nota: '));
const nota4 = parseFloat(prompt('Digite a quarta nota: '));

const notas = [nota1, nota2, nota3, nota4];

function calcularMedia(notas: number[]): number {
    let soma = 0;
    soma = notas[0] + notas[1] + notas[2] + notas[3];
    return soma / 4;
}

const aluno: Aluno = {
    nome: nome,
    notas: notas,
    mediaFinal: calcularMedia(notas),
};

console.log(aluno);