const inCpf = document.getElementById('inCpf');
const res = document.getElementById('res')
let replace = []
function calcular(array){
    let verifyOneDigit = 0;
    let verifyTwoDigit = 0;
    let rest = array.splice(9,2);
    let i = 10;
    let product = 0;
    let soma = 0;

    for(let j in array){
        product = i * array[j];
        soma += product;
        product = 0;

        if(i == 2){
            break
        }else{
            i--
        }
    }

    if(soma % 11 == 1 || soma % 11 == 0){
        verifyOneDigit = 0;
    }else{
        verifyOneDigit = 11 - soma % 11
    }

    if(verifyOneDigit == Number(rest[0])){
        array.push(String(verifyOneDigit));
        i = 11;
        product = 0;
        soma = 0

        for(let j in array){
            product = i * Number(array[j]);
            soma += product;
            product = 0;

            if(i == 2){
                break
            }else{
                i--
            }
        }

    }else{
        res.innerHTML = 'Cpf inválido'
    }

    if(soma % 11 == 0 || soma % 11 == 1){
        verifyTwoDigit == 0;
    }else{
        verifyTwoDigit = 11 - soma % 11;
    }

    if(verifyTwoDigit == Number(rest[1])){
        res.innerHTML = 'Cpf válido!!!'
    }else{
        res.innerHTML = 'Cpf inválido';
    }
}


function validar() {
    let number = inCpf.value;
    if (number.length == 14) {
        replace = number.replace('-', '.').split('');
        for (let i in replace) {
            if (i == replace.indexOf('.')) {
                replace.splice(i, 1)
            }
        }

        calcular(replace);
        
        
    } else if (number.length == 11) {
        replace = number.split('')
        calcular(replace);
    }
    else {
        res.innerHTML = 'Quantidade de digitos inválida'
    }
}

let btn = document.getElementById('btn');
btn.addEventListener('click', validar)