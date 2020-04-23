# Curso Desenvolvimento avançado com JavaScript ES6

Funções avançadas do ES6

## Módulo I - Funções avançadas do ES6

> Autor: Celso Henrique da Silva
Origem: Digital Innovation One

### Aula I - Aprenda o que é e como trabahar com Arrow Functions

- Caso a função seja apenas uma expressão é possível omitir o return
- Ao definir statements é necessário usar { }
- Caso tenha apenas um argumento é possível omitir os parenteses
- Função construtora não poder usar Arrow Functions
- Hoisting não funciona com Arrow Functions
- Arrow Function tem a propriedade de ter o mesmo contexto no qual ela está.

```javascript
//arrow function
var sum = (a, b) => a + b;

var sum2 = (a, b) => {
  var x = 10;
  if (a > b) {
    return 10;
  }

  return a + b;
}

console.log(sum)
console.log(sum2)


//retorno implicito de objeto
var createObj = () => ({ name: 'Daniel' });
console.log(createObj());


 //Arrow Function tem a propriedade de ter o mesmo contexto no qual ela está.
var obj = {
  showContext: function showContext() {
    /*
    //erro
    setTimeout(function() => {
      this.log('after 1000ms');
    }, 1000);
    */

    //Arrow Function
    setTimeout(() => {
      this.log('after 1000ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  }
};

obj.showContext();
```

### Aula II - Default Function Arguments

- Ao trabalhar com funções normais e não passar todos os parâmetros, aquele que faltar será undefined.
- Com o ES6 é possível definir um parâmetro padrão para a função

```javascript
//parâmetro padrão para a função
function mult(a, b = 1) {
  return a * b;
}
console.log(mult(5))


//parâmetro padrão como referência a outro parâmetro
function mult2(a, b = a) {
  return a * b;
}
console.log(mult2(5))


//parâmetro padrão como função
//lazy evaluation (A característica que permite podermos utilizar funções para definir valores de um argumento e a mesma só será invocada quando o argumento for indefinido.)
function randomNumber() {
  return Math.random() * 10;
}

function mult3(a, b = randomNumber()) {
  return a * b;
}
console.log(mult3(5))
```

### Aula III - Enhanced Object Literals

```javascript
//objeto literal normal
var prop = 'Value 1';
var prop2 = 'Value 2';

function method2() {
  console.log('call method2');
}

//podemos omitir o valor de uma propriedade ou método ao definir um objeto literal quando o valor vier de uma variável com o mesmo nome da propriedade ou método
var obj = {
  prop: prop, //objeto literal normal
  prop2, //es6, podemos omitir o valor de uma propriedade ou método
  method2,
  method3: function () {
    console.log('call method3');
  },
  method4() {
    console.log('call method4');
  }
};

console.log(obj)
obj.method2()
obj.method3()
obj.method4()


//Nome das propriedades
//modo antigo
var propName1 = 'propName1';
var obj = {}
obj[propName1] = 'prop value 1'

console.log(obj);


//es6
var propName2 = 'propName2';
var obj2 = {
  [propName2 + 'concat']: 'prop value 2'
}

console.log(obj2);
```

## Módulo II - Aplicando conceitos Rest, Spread Operator e Destructuring

### Aula I - Conheça Rest e Spread Operator

### Aula II - Como usar Destructuring em ReactJS

## Módulo III - Introdução a Generators

### Aula I - Symbols e Iterators

### Aula II - Aprenda sobre Generators e onde utilizá-los

## Módulo IV - Aplicando conceitos Promises e Fetch

### Aula I - Introdução a Promises e Fetch

### Aula II - Callbacks e Promises

### Aula III - Fetch, Async/Await e EventEmitter

### Aula III - Aplicando e praticando os conceitos

## Módulo V - Conceitos aplicados a qualidade de código e automação de testes em JS

### Aula I - Introdução e conceitos da aula

### Aula II - Testes, TDD e BDD

### Aula III - Conheça Mocha, Chai e Sinon

### Aula IV - Veja como traballha com Chai

### Aula V - Desenvolvendo códigos com Sinon

## Módulo VI - Tratamento e exceções

### Aula I - Introdução a Tratamento e exceções

### Aula II - Como identificar os erros

### Aula III - Debugging parte I

### Aula IV - Debugging parte II
