const matematica = function (a:number, b:number): number{
    return a*b
}

console.log(matematica(25, 15));

let saudacao = function (nome:string): string{
    console.log("Olá " + nome);
    return nome;
}

saudacao("victor");