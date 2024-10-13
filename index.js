const heroi = ["Légolas", 13000];
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

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