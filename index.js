// Variável para herói utilizando lista (uma vez que objetos ainda não foram abordados no bootcamp)
//              Nome        XP
const heroi = ["Légolas", 999];

// Variável para armazenar os títulos disponíveis
//              [0]        [1]       [2]      [3]      [4]         [5]          [6]        [7]
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

 // Estrutura de controle para classificar o herói conforme sua XP, com a saída dos dados pelo Console.log
 // Embora a utilização de objetos e funções pudesse otimizar o processo, e tornálo reutilizável, optei por me ater ás ferramentas que já foram vistas no bootcamp.
if (heroi[1] <= 1000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[0]}.`);
} else if (heroi[1] <= 2000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[1]}.`);
} else if (heroi[1] <= 5000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[2]}.`);
} else if (heroi[1] <= 7000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[3]}.`);
} else if (heroi[1] <= 8000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[4]}.`);
} else if (heroi[1] <= 9000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[5]}.`);
} else if (heroi[1] <= 10000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[6]}.`);
} else {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[7]}.`);
};

// No enunciado, me parece que aluns valores ficariam estranhamente sem níveis adequados. A classificação Ferro, por exemplo, seria referente a um XP menor do que mil 1000, enquanto que Bronze seria entre 1001 e 2000. Nesse caso, a clasificação 1000 não teria um feedback adequado para o usuário.
// Nesse caso, optei por considerar que a classificação Ferro inclui o valor de XP 1000, para evitar resultados inesperados.