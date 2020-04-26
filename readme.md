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
//modo tradicional
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

```javascript
//Rest Operator
//Utilizado para parâmetros de função
//modo tradicional
//passagens de parâmetros limitados, usando a palavra reservada arguments, cujo prototype é objeto
function sum(a, b) {
  var value =  0;
  for(var i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }

  return value;
}
console.log(sum(5, 5, 5, 5))


//passagens de parâmetros ilimitados
//rest operator: ...
//cujo prototype é array
//Quando o rest operator é utilizado nos argumentos de uma função, além da lista de argumentos, ele também traz os métodos e propriedades de array por ser uma instância de um array
function sum2(...args) {
  //soma utilizando os métodos de operação de array
  return args.reduce((acum, value) => acum + value, 0)
}
console.log(sum2(5, 5, 5, 5))


//arrow function com rest operator
const sum3 = (...args) => {
  return args.reduce((acum, value) => acum + value, 0);
};

console.log(sum3(5, 5, 5, 5))


//primeiros parâmetros separados e demais como argumentos rest operator
const sum4 = (a, b, ...args) => {
  return a + b + args.reduce((acum, value) => acum + value, 0);
};

console.log(sum4(5, 5, 5, 5))
```

```javascript
//Spread Operator
//Utilizado basicamente para quebrar os itens e passar para outro lugar
//pode-se utilizar em string, arrays, literal objects e objects iteraveis
//somente para criar novos objetos

//string
//quebra a string em caracteres
const str = 'Digital Innovation One';
function logArgs(...args) {
  console.log(args)
}
logArgs(...str)


//arrays
//quebra um array em itens
const arr = [1, 2, 3, 4]
function logArr(...args) {
  console.log(args)
}
logArr(...arr)

//construção de arrays
//modo tradicional
const arr2 = arr.concat([5, 6, 7]);
console.log(arr2)

//com spread operator
const arr3 = [...arr, 5, 6, 7];
console.log(arr3)

//clone de array
const arr4 = [...arr];
console.log(arr4)


//objects
const obj = {
  test: 123
}

const obj2 = {
  teste: 456
}

//merge de objetos
const obj3 = {
  ...obj,
  ...obj2
}
console.log(obj3)

//clone de objeto raso
const obj4 = {
  ...obj
}

console.log(obj4)

//cuidados na clonagem dessa maneira, pois os sub-objetos mantem a referência do objeto original, sendo assim se alterar na cópia o original também é alterado.
const obj5 = {
  test: 123,
  subObj: {
    teste: 123
  }
}

const obj6 = { ...obj5 };
obj6.subObj.teste = 456;
console.log(obj5)

//uma alternativa é gerar um sub-objeto com o spread operator
const obj7 = { ...obj5, subObj: { ...obj5.subObj} };
obj7.subObj.teste = 456;
console.log(obj5)
```

### Aula II - Como usar Destructuring em ReactJS

```javascript
//Destructuring com arrays
//modo tradicional
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(apple, apple2)

console.log(tomato, tomato2)


//Destructuring com objects
var obj = {
  name: 'Daniel'
}
var name2 = obj.name;

//mesmo nome de variável
var { name } = obj;

console.log(name2, name)

//define nova variável
var { name: name3 } = obj;
console.log(name3)


//Destructuring com objects dentro de objetos
var obj2 = {
  name: 'Daniel',
  props: {
    age: 35,
    favoriteColors: ['black', 'blue']
  }
}

//modo tradicional
var age = obj2.props.age;
console.log(age)

//Destructuring
var { props: { age: age2, favoriteColors: [color1, color2] } } = obj2;
console.log(age2)
console.log(color1)
console.log(color2)


//Destructuring com arrays
var arr = [{ name: 'Apple', type: 'fruit' }];
var [{ name: fruitName }] = arr
console.log(fruitName)


//Destructuring com functions, passando array como parâmetro + Default Values
function sum([a, b] = [0, 0]) {
  return a + b;
}
console.log(sum([5, 5]));


//Destructuring com functions, passando objeto como parâmetro
function sum({a, b}) {
  return a + b;
}
console.log(sum({a: 5, b: 5}));
```

## Módulo III - Introdução a Generators

### Aula I - Symbols e Iterators

#### Symbols

- Symbols são maneiras de gerar identificadores únicos
- Symbols são invocados como se chama uma função
- Propriedades de objetos criadas usando identificadores únicos podem ser descobertas usando o symbol utilizado como identificador ou o método Object.getOwnPropertySymbols.

```javascript
// Symbol
const uniqueHello1 = Symbol('Hello');
const uniqueHello2 = Symbol('Hello');

// false, Symbol são sempre diferentes uns dos outros
console.log(uniqueHello1 === uniqueHello2);

// Well known Symbols
// Com esse tipos podemos usar para adicionar propriedades ao objeto
Symbol.iterator
Symbol.split
Symbol.toStringTag
```

#### Iterators

- Alguns elementos já possuem a propriedade Symbol.iterator que permite realizar iterações, como os arrays
- "for of" é utilizado para obter os valores gerados através do iterador em um objeto ou tipo iterável.
- Ao consumir um iterador, sabemos se a iteração finalizou através da propriedade done no objeto retornado na iteração.
- Ao invocar o método next de um iterador, o seu retorno é um objeto contendo um método next e uma propriedade done.

```javascript
// Iterators
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator];

// exemplo de iterador, modo tradicional
while (true) {
  let { value, done } = it.next()
  if (done) {
    break;
  }
  console.log(value)
}

// exemplo de iterador, modo ES6
for (let value of arr) {
  console.log(value)
}

// exemplo de iterador, modo ES6
const str 'Digital Innovation One';
for (let value of str) {
  console.log(value)
}
```

```javascript
// Iterators e Objetos
// adicionando propriedade (Symbol.iterator, Well known Symbols) ao objeto para torná-lo iterável
const obj = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        i++;

        return {
          value: this.values[i - 1],
          done: i > this.values.length
        };
      }
    };
  }
};


// iteração em objetos
const it = obj[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

// iteração em objetos
for (let value of obj) {
  console.log(value)
}

// iteração em objetos
for (let value of obj) {
  console.log(value)
}

// spread com objeto
const arr2 = [...obj];
console.log(arr2);
```

### Aula II - Aprenda sobre Generators e onde utilizá-los

- Generators pausa e despausa funções
- Se comunica através de iterações
- A forma de retornar um valor em cada iteração de uma função generator é incluir o valor após a palavra yield.
- Generators podem receber valores em cada pausa para continuar sua execução, podemos enviar valores de volta ao iterador passando o valor como parâmetro ao método next.
- Generators podem "pausar" sua execução através da palavra reservada yield
- Podemos utilizar generators para construir objetos iteráveis, pois generators utilizam a mesma interface e podem ser utilizados para construir o iterador de um objeto iterável.

```javascript
// pausa na execução da função e passagem de parâmetros para cada retomada da execução
function* hello() {
  console.log('Hello');
  yield 1; // pode-se passar um valor para o yield

  console.log('From');
  const value = yield 2;

  console.log(value);
}

const it = hello();

console.log(it.next())
console.log(it.next())
console.log(it.next('Outside!')) // passagem de parâmetros
```

```javascript
// criação de uma função com números infinitos, mas chamados quando necessário
function* naturalNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}

const it = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

```javascript
// podemos usar o generator para construir a interface de geração dos iterators.
// dessa for não é necessário criar o método next, pois o generator realiza o procedimento, ou seja, generator pode ser usado para criar iterator
const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }
};

// iteração em objetos
for (let value of obj) {
  console.log(value)
}
```

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
