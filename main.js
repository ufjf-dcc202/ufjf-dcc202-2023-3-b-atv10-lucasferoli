import { getJoao, getMaria, setJoao, setMaria, deJoaoParaMaria, deMariaParaJoao} from ",/joaoEMaria.js";

//main.js
console.log('modulo main')

console.log('João tem ', getJoao(), 'maçãs!);
console.log('Maria tem ', getMaria(), 'maçãs!);

deJoaoParaMaria();

console.log('João tem ', getJoao(), 'maçãs!);
console.log('Maria tem ', getMaria(), 'maçãs!);