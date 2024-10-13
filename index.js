// Variável para herói utilizando lista (uma vez que objetos ainda não foram abordados no bootcamp)
//              Nome        XP
const heroi = ["Légolas", 13000];

// Variável para armazenar os títulos disponíveis
//              [0]        [1]       [2]      [3]      [4]         [5]          [6]        [7]
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

 // Estrutura de controle para classificar o herói conforme sua XP, com a saída dos dados pelo Console.log
 // Embora a utilização de objetos e funções pudesse otimizar o processo, e tornálo reutilizável, optei por me ater ás ferramentas que já foram vistas no bootcamp.
if (heroi[1] < 1000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[0]}.`);
} else if (heroi[1] < 2000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[1]}.`);
} else if (heroi[1] < 5000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[2]}.`);
} else if (heroi[1] < 7000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[3]}.`);
} else if (heroi[1] < 8000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[4]}.`);
} else if (heroi[1] < 9000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[5]}.`);
} else if (heroi[1] < 10000) {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[6]}.`);
} else {
    console.log(`O Herói de nome ${heroi[0]} está no nível de ${niveis[7]}.`);
};