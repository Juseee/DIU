let herois = [ 
    {nome: "Jé", xp: 1950},
    {nome: "Mago", xp: 3400},
    {nome: "Espadachim", xp: 9200}
];
//laço de reptição
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";


//agora a estrutura para definir o nível do jogador
if (xp <1000) {
    nivel = "Ferro";
} else if (xp >=1001 && xp <=2000) {
    nivel = "Prata";
} else if (xp >=2001 && xp <=5000) {
    nivel = "Ouro";
} else if (xp >=5001 && xp <=7000) {
    nivel = "Platina";
} else if (xp >=7001 && xp <=8000) {
    nivel = "Diamante";
} else if (xp >=8001 && xp <=9000) {
    nivel = "Lendário";
} else if (xp >=9001 && xp <=10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

//a saída do resultado
console.log("O herói " + nome + " está no nível " + nivel + " com " + xp + " pontos de experiência.");}