# Curso Desenvolvimento avançado com JavaScript ES6

Funções avançadas do ES6

## Módulo I - Funções avançadas do ES6

- Autor: Celso Henrique da Silva
- Origem: Digital Innovation One

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

#### Exercícios - Módulo III

"for of" é utilizado para:

- Obter os valores gerados através do iterador em um objeto ou tipo iterável.

A forma de retornar um valor em cada iteração de uma função generator:

- Incluindo o valor após a palavra yield.

Ao consumir um iterador, como sabemos se a iteração finalizou:

- Através da propriedade done no objeto retornado na iteração.

Generators podem receber valores em cada pausa para continuar sua execução:

- Sim, podemos enviar valores de volta ao iterador passando o valor como parâmetro ao método next.

Tipos e objetos iteráveis possuem:

- Um método responsável por gerar o seu iterador, sendo acessível pela chave Symbol.iterator.

Generators podem "pausar" sua execução através de qual palavra reservada:

- yield

Ao invocar o método next de um iterador, o seu retorno deve ser:

- Um objeto contendo um método next e uma propriedade done.

Podemos utilizar generators para construir objetos iteráveis:

- Sim, pois generators utilizam a mesma interface e podem ser utilizados para construir o iterador de um objeto iterável.

Symbols podem ser usados para gerar:

- Identificadores únicos.

Propriedades de objetos criadas usando identificadores únicos podem ser descobertas usando:

- Utilizando o symbol utilizado como identificador ou o método Object.getOwnPropertySymbols.

## Módulo IV - Aplicando conceitos Promises e Fetch

### Aula I - Callbacks e Promises

#### Callbacks

- No javascript é comum usar funções de callback para executar algo após alguma tarefa assíncrona ter sido executada.

```javascript
// callback
// maneira tradicional de callback
function doSomething(callback) {
  setTimeout(function() {
    // did something
    callback('First data');
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function() {
    // did other thing
    callback('Second data');
  }, 1000);
}

// execução de maneira sequencial das funções com callback (callback hell)
function doAll() {
  try {
    doSomething(function(data) {
      var processedData = data.split('');
      try {
        doOtherThing(function(data) {
        var processedData2 = data.split('');
        try {
          setTimeout(function() {
              console.log(processedData, processedData2)
            }, 1000);
          });
        } catch(err) {
          // handle error
        }  
      } catch(err) {
        // handle error
      }  
    });
  } catch(err) {
    // handle error
  }
}

// chamando as funções
doAll();
```

#### Promises

```javascript
new Promise((resolve, reject) => {})
```

- Um objeto promise guarda a promessa de que a função que gerou ele irá em algum momento no futuro terminar e te retornar um resposta.
- Ela pode ser uma resposta positiva ou negativa. O promise pode ser passado para outras funções ou retornado.
- Para evitar os diversos callback usamos promises.
- Os estados de uma promises são:
  - Pending: Quando está em execução
  - Fulfilled: Quando terminou de executar
  - Rejected: Quando ocorreu algum erro
- Para tratar os erros usamos o método .catch que irá receber uma função para o tratamento
- Promise.race: cria uma Promise contendo diversas Promise e trazer o retorno da primeira que resolver entre elas.
- Promise.all: Processa múltiplas Promise de maneira paralela e tratar o retorno de todas posteriormente

```javascript
// Promises
const doSomethingPromise = () =>
  new Promise((resolve, reject) => {
    // simulando retorno de erro
    // throw new Error('something went error');

    setTimeout(function() {
      // did something
      resolve('First data');
    }, 1000);
  });

const doOtherThingPromise = () =>
  new Promise((resolve, reject) => {
  // simulando retorno de erro
  // throw new Error('otherthing went error');

  setTimeout(function() {
    // did other thing
    resolve('Second data');
  }, 1000);
});

// chamando as funções sequencialmente
doSomethingPromise()
  .then(data => {
    console.log(data.split(''));
    return doOtherThingPromise();
  }) // sequenciando a segunda promisse para ser executada após a primeira
  .then(data2 => console.log(data2.split('')))
  .catch(error => console.log('Ops', error));


// chamando as funções em paralelo e realizando algo após a execução de ambas
Promise.all([doSomethingPromise(), doOtherThingPromise()])
  .then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
  })
  .catch(error => console.log('Ops', error));

// Executando todas as promises, mas retornando a primeira que conseguir resolver
Promise.race([doSomethingPromise(), doOtherThingPromise()])
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log('Ops', error));
```

### Aula II - Fetch, Async/Await e EventEmitter

#### Fetch

- fetch só irá disparar um erro caso aconteça um erro de rede e não seja possível realizar a requisição.
- O retorno da invocação da função fetch é uma Promise.

```json
// data.json
{
  "data": [1, 2, 3]
}
```

```javascript
// exibe no catch apenas erros de rede
// retorno do fetch é uma promise
fetch('/data.json')
  .then(responseStream => {
    if (responseStream.status === 200) {
      return responseStream.json()
    } else {
      throw new Error('Request error')
    }
  })
  .then(data => console.log(data))
  .catch(error => {
    console.log('Erro: ', error)
  });
```

#### Async/Await

- Async: Uma forma de criar promises mais fácil
- Await: A palavra reservada await pode ser usada dentro de uma função criada utilizando a palavra async e para aguardar a resolução de uma promise.

```javascript
const simpleFunc = async () => {
  // throw new Error('Error')
  return 12345;
}

simpleFunc()
  .then(data => {
    console.log(data)
  })
  .cathc(error => {
    console.log(error);
  })

// promise para teste de await
const asyncTime = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(123456);
    }, 1000);
  });

const simpleAsyncTime = async () => {
  const data = await asyncTime();
  return data;
}

// processamento assincrono como se fosse sincrono com o await
const simpleAsyncFetch = async () => {
  const data = await asyncTime();
  console.log(data);

  const dataJson = await fetch('/data.json')
                        .then(responseStream => {
                          if (responseStream.status === 200) {
                            return responseStream.json()
                          } else {
                            throw new Error('Request error')
                          }
                        })
                        .then(data => console.log(data))
                        .catch(error => {
                          console.log('Erro: ', error)
                        });
  return dataJson;
}

// usando promise.all, para executar em paralelo
const simpleAsyncFetch = async () => {
  const data = await Promise.all([
    asyncTime(),
    fetch('/data.json')
    .then(responseStream => {
      if (responseStream.status === 200) {
        return responseStream.json()
      } else {
        throw new Error('Request error')
      }
    })
    .then(data => console.log(data))
    .catch(error => {
      console.log('Erro: ', error)
    });
  ]);

  return data;
}
```

### Aula III - Aplicando e praticando os conceitos

### EventEmitter

- Programação assíncrona com o node
- A diferença entre o método on e once de uma instância EventEmitter é que um subscreve uma função a todas as ocorrências de um evento, o outro apenas para a primeira ocorrência.

```javascript
//node-script.js
// Instanciar ou extender o events
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
  console.log(data);
});

emitter.emit('User logged', { user: 'Daniel' });

// execute
// server node node-script.js
```

```javascript
//node-script.js
const EventEmitter = require('events');

// class, extendendo e simplificando
class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data);
  }
}

const users = new Users();

users.on('User logged', data => {
  console.log(data);
});

users.userLogged({ user: 'Daniel' });

// execute
// server node node-script.js
```

#### Exercícios - Módulo IV

O método de uma Promise utilizado para tratar seus erros

- método .catch que irá receber uma função para o tratamento

Objetivo do método Promise.race

- Criar uma Promise contendo diversas Promise e trazer o retorno da primeira que resolver entre elas.

Uma requisição feita utilizando fetch só irá disparar um erro caso

- Aconteça um erro de rede e não seja possível realizar a requisição.

O retorno da invocação da função fetch

- Uma Promise.

Utilizar callbacks ao desenvolver JavaScript assíncrono pode trazer quais tipos de problemas quando não utilizado com cautela?

- Problemas com a legibilidade e manutenção do código, pois podemos cair no chamado "callback hell".

A forma de processar múltiplas Promise de maneira paralela e tratar o retorno de todas posteriormente

- Utilizando o método Promise.all.

Os três estados possíveis de uma Promise

- Pending, fulfilled e rejected.

Uma das formas de construir uma Promise no JavaScript

- Invocando o seu construtor e passando uma função ao mesmo. Ex: new Promise((resolve, reject) => {}).

Diferença entre o método on e once de uma instância EventEmitter

- Um subscreve uma função a todas as ocorrências de um evento, o outro apenas para a primeira ocorrência.

A palavra reservada await pode ser usada quando

- Apenas dentro de uma função criada utilizando a palavra async e para aguardar a resolução de uma promise.

## Módulo V - Conceitos aplicados a qualidade de código e automação de testes em JS

### Aula I - Testes, TDD e BDD

#### Testes

##### Testes automatizados

- Testes unitários;
- Testes integrados;
- Testes funcionais.

##### Testes manuais e automatizados

- Testes usabilidade;
- Testes de aceitação do usuário;
- Protótipos;
- Testes funcionais;

##### Ferramentas de testes

- Teste de carga e performance;
- Testes de segurança

#### TDD (Test Driven Development)

É um dos pilares do Extreme Programing, consiste em testar e refatorar em pequenos ciclos, onde você escreve o teste antes do código, faz o meso passar e refatorar o código.

Etapas

- Escrita do testes
- Escrita do código
- Refatoração

Vantagens

- Feedback rápido;
- Maior segurança em alterações e novas funcionalidades;
- Código mais limpo;
- Produtividade.

#### BDD (Behavior Drive Development)

Técnica de desenvolvimento ágil que visa integrar regras de negócio com linguagens de programação.

Pilares

- Testes;
- Documentação;
- Exemplos.

Vantanges

- Compartilhamento de conhecimento;
- Documentação dinâmica;
- Visão do todo.

### Aula II - Conheça Mocha, Chai e Sinon

#### Mocha

```javascript
// inicializando
// criando o projeto testes
npm init -y
// adicionando o mocha
npm i --save-dev mocha
// alterar o package.json scripts.test para "mocha"
// para executar os testes
npm run test
```

```javascript
// criar o diretório src
// criar o arquivo math.js

// math.js
class Math {
  sum = function sum(a, b) {
    return a + b;
  }

  multiply = function multiply(a, b) {
    return a * b;
  }
}

module.exports = Math;
```

```javascript
// math.spec.js
// Não possui uma ferramenta de *assert*
// E o *assert* é um pouco limitado, como alternativa temos o *chai*
const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

describe('Math class', function() {
  // hooks
  // permitir reiniciar uma variável antes de cada teste
  beforeEach(function() {
    value = 0;
  })

  // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
  // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
  it('Sum two numbers', function(done) {
    const math = new Math();

    // é possível alterar o timeout do mocha, o padrão é 2000ms.
    this.timeout(3000);

    value = 0;

    math.sum(value, 5, value => {
      assert.equal(value, 10);
      done();
    });
  });

  // mocha permite deixar anotado os testes futuros
  // it('Multiply two numbers');
  
  // mocha executa apenas esse teste
  // it.only('Multiply two numbers', function() {});

  // mocha desconsidera esse teste
  // it.skip('Multiply two numbers', function() {});

  it('Multiply two numbers', function() {
    const math = new Math();

    assert.equal(math.multiply(value, 5), 0);
  });
});
```

### Aula II - Veja como traballha com Chai

### Chai

Ferramenta de *assert* de uma maneira mais descritiva

```javascript
// instalando o chai
npm i --save-dev chai
```

```javascript
// math.spec.js
const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function() {
  // hooks
  // permitir reiniciar uma variável antes de cada teste
  beforeEach(function() {
    value = 0;
  })

  // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
  // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
  it('Sum two numbers', function(done) {
    const math = new Math();

    // é possível alterar o timeout do mocha, o padrão é 2000ms.
    this.timeout(3000);

    value = 5;

    math.sum(value, 5, value => {
      // assert
      // assert.equal(value, 10);

      // chai
      expect(value).to.equal(10);
      done();
    });
  });

  // mocha permite deixar anotado os testes futuros
  // it('Multiply two numbers');
  
  // mocha executa apenas esse teste
  // it.only('Multiply two numbers', function() {});

  // mocha desconsidera esse teste
  // it.skip('Multiply two numbers', function() {});

  it('Multiply two numbers', function() {
    const math = new Math();

    // é possível alterar o timeout do mocha, o padrão é 2000ms.
    this.timeout(5000);
    // assert
    // assert.equal(math.multiply(value, 5), 0);

    // chai
    expect(math.multiply(value, 5)).to.equal(0);
  });

  // chai comparando propriedades de objetos
  it('Compare property name of objects', function() {
    const obj = {
      name: 'Daniel'
    };

    // chai
    expect(obj)
      .to.have.property('name')
      .equal('Daniel');
  });

  // chai comparando objetos
  it.only('Compare objects', function() {
    const obj = {
      name: 'Daniel'
    };

    const obj2 = {
      name: 'Daniel'
    };

    // chai
    expect(obj).to.deep.equal(obj2);
  });
});
```

### Aula IV - Desenvolvendo códigos com Sinon

Ferramenta para *mockar* funções, métodos, API.

```javascript
// instalando o sinon
npm i --save-dev sinon
```

```javascript
// acrescentamos o método printSum

// math.js
class Math {
  sum = function sum(a, b) {
    return a + b;
  }

  multiply = function multiply(a, b) {
    return a * b;
  }

  printSum(req, res, a, b) {
    res.load('index', a + b);
  }
}

module.exports = Math;
```

```javascript
// math.spec.js

const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
  // hooks
  // permitir reiniciar uma variável antes de cada teste
  beforeEach(function() {
    value = 0;
  })

  // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
  // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
  it('Sum two numbers', function(done) {
    const math = new Math();

    // é possível alterar o timeout do mocha, o padrão é 2000ms.
    this.timeout(3000);

    value = 5;

    math.sum(value, 5, value => {
      // assert
      // assert.equal(value, 10);

      // chai
      expect(value).to.equal(10);
      done();
    });
  });

  // mocha permite deixar anotado os testes futuros
  // it('Multiply two numbers');
  
  // mocha executa apenas esse teste
  // it.only('Multiply two numbers', function() {});

  // mocha desconsidera esse teste
  // it.skip('Multiply two numbers', function() {});

  it('Multiply two numbers', function() {
    const math = new Math();

    // é possível alterar o timeout do mocha, o padrão é 2000ms.
    this.timeout(5000);
    // assert
    // assert.equal(math.multiply(value, 5), 0);

    // chai
    expect(math.multiply(value, 5)).to.equal(0);
  });

  // chai comparando propriedades de objetos
  it('Compare property name of objects', function() {
    const obj = {
      name: 'Daniel'
    };

    // chai
    expect(obj)
      .to.have.property('name')
      .equal('Daniel');
  });

  // chai comparando objetos
  it('Compare objects', function() {
    const obj = {
      name: 'Daniel'
    };

    const obj2 = {
      name: 'Daniel'
    };

    // chai
    expect(obj).to.deep.equal(obj2);
  });

  // sinon para mockar função
  it.only('Calls req with sum and index values', function() {
    const req = {};
    const res = {
      // função espiã que diz se a função da classe foi ou não executada
      load: sinon.spy()
    };
    const math = new Math();

    math.printSum(req, res, 5, 5);

    // chai e sinon
    // verifica se função foi chamada
    expect(res.load.calledOnce).to.be.true;

    // chai e sinon
    // verifica se o segundo argumento é o resultado da soma dos dois valores enviados
    // expect(res.load.args[0][1]).to.equal(10);
  });
});
```

#### Exercícios - Módulo V

Caso não seja passada nenhuma configuração de diretórios ao mocha, qual será o diretório na raiz do projeto onde serão buscados os testes?

- test

Ao utilizar o módulo assert do Node.js, quando utilizamos seu método equal para validar dois valores, caso os dois não sejam iguais, qual será o seu comportamento?

- Será disparado um erro contendo informações sobre a asserção incorreta.

Os testes unitários são responsáveis por testar o quê?

- A menor unidade do seu código como funções, métodos e afins.

Os testes funcionais visam:

- Garantir o correto funcionamento de uma funcionalidade de ponta a ponta.

Como aguardamos um código assíncrono finalizar em um teste no mocha?

- Utilizando a função done que vem como parâmetro ao it posteriormente à execução do código assíncrono.

Quais são as etapas que compõem o TDD?

- Escrita do teste descrevendo o comportamento esperado, escrita do código com o comportamento esperado e refatoração.

Qual a maior vantagem de utilizar o chai como ferramenta de asserção?

- Ao escrever asserções utilizando chai, uma das maiores vantagens é a sua escrita muito mais expressiva do comportamento esperado.

Qual é um dos principais objetivos do BDD (desenvolvimento orientado a comportamento)?

- Integrar regras de negócio com linguagens de programação.

A responsabilidade dos testes de integração é:

- Garantir o funcionamento de unidades menores trabalhando em conjunto com outras.

Qual a função do método spy do sinon?

- Criar uma função ou interceptar a execução de uma outra função a fim de obter dados sobre como a mesma foi invocada.

## Módulo VI - Tratamento e exceções

### Aula I - Como identificar os erros

Uma maneira de capturar erros no javascript é utilizando try/catch e também impede que o programa pare sua execução caso ocorra algum erro

```javascript
// erro-1.js

// erro: hoisting para constantes não existe
console.log('Start')
try {
  console.log(name);
  const name = 'Daniel';
} catch (err) {
  console.log('Error: ', err)
}
console.log('End')
```

```javascript
// erro-2.js

// customizando mensagens de erro
try {
  const myError = new Error('Custom message');
  throw myError;
} catch (err) {
  console.log('Error: ', err)
}

```

```javascript
// erro-3.js

// extendendo classe de erro
class CustomError extends Error {
  constructor({message, data}) {
    super(message);
    this.data = data;
  }
}
try {
  const myCustomError = new CustomError({
    message: 'Custom message',
    data: {
      type: 'Server error'
    }
  });

  throw myCustomError;
} catch (err) {
  if (err.data.type === 'Server error') {
    console.log('Error: ', err)
    console.log('Error Data: ', err.data)
  } else {
    console.log('Generic Error: ', err)
  }
}
```

### Aula II - Debugging parte I

Exemplos práticos utilizado o debugger do navegador Chrome

- Console
- Network
- Sources
- Elements
- Breakpoints

### Aula III - Debugging parte II

Exemplos práticos utilizado o debugger do navegador Chrome

- Console
- Network
- Sources
- Elements
- Breakpoints
- Tipos de console
  - console.log('Log normal')
  - console.warning('Alerta')
  - console.error('Erro): Mostrar logs de erro no console do navegador.
  - console.trace: Indica em qual lugar o console está
  - console.group e console.groupEnd: Agrupa informações
  - console.time e console.timeEnd: Exibe tempo de execução de um trecho de código
  - console.table(['Daniel', 'Digital Innovation One']): Formata os dados em tabela
  - console.log('%c style log', 'color: blue'): permitir estilizar a mensagem

#### Exercícios - Módulo VI

O que acontece no Chrome ao incluirmos a declaração debugger dentro de um código JavaScript?

- O código irá parar sua execução ao encontrar a declaração, permitindo o debugging.

Quais as vantagens de estender a classe de erro padrão do JavaScript?

- A possibilidade de adicionar métodos, propriedades e comportamentos ao erro.

Qual o objetivo do método console.assert?

- Exibir uma mensagem de erro no console caso a asserção não passe.

Qual o objetivo da aba styles dentro das ferramentas para desenvolvedor do navegador Chrome?

- Tem o objetivo de mostrar as regras de CSS aplicadas nos elementos, permitindo o debugging dos estilos.

Qual a maneira mais comum para capturar uma exceção no JavaScript?

- Através das declarações try e catch.

Qual o objetivo da função pretty print do navegador Chrome?

- Remover a minificação de um arquivo para possibilitar um debugging melhor.

Qual o objetivo do método console.time e console.timeEnd?

- Marcar o tempo de execução de um trecho de código

Qual o objetivo do método console.error?

- Mostrar logs de erro no console do navegador.

Qual a objetivo da declaração finally após os blocos de try e catch?

- Garantir e deixar explícito que um bloco de código será executado em caso de erro ou não.

Qual o objetivo da aba network dentro das ferramentas para desenvolvedor do Chrome?

- Trazer informações sobre as requisições executadas no navegador.