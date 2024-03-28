function transporMatriz(A) {
    console.log("matriz original:");
    imprimir_matriz(A);
    const linhas = A.length;
    const colunas = A[0].length;
    const transposta = [];
    for (let i = 0; i < colunas; i++) {
        transposta.push(Array(linhas).fill(0));
    }
        for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            transposta[j][i] = A[i][j];
        }
    }
    console.log("versão transposta:");
    imprimir_matriz(transposta);
}
function imprimir_matriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
    console.log();
}
const matrizOriginal = [
    [1, 2],
    [3, 4],
    [5, 6]
];
transporMatriz(matrizOriginal);
