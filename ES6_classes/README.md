# Classes et Métaprogrammation en JavaScript
Ce document explique les concepts essentiels liés aux classes en JavaScript, ainsi que quelques notions avancées de métaprogrammation.

## 1. Comment définir une classe
En JavaScript, une classe peut être définie à l’aide du mot-clé `class` :
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

- `constructor` est une méthode spéciale appelée lors de la création d’une instance.
- Les propriétés `name` et `age` sont assignées à chaque instance.

## 2. Comment ajouter des méthodes à une classe
Les méthodes permettent aux instances de la classe de réaliser des actions :
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Bonjour, je m'appelle ${this.name}`;
  }
}

const john = new Person('John', 30);
console.log(john.greet()); // Bonjour, je m'appelle John
```

- Les méthodes ajoutées directement dans la classe sont disponibles sur toutes les instances.

## 3. Pourquoi et comment ajouter une méthode statique
Les méthodes statiques sont attachées à la classe elle-même, pas à ses instances. Elles sont utiles pour des fonctions utilitaires liées à la classe.
```js 
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 7)); // 12
```

- `static` indique que la méthode appartient à la classe et non à l’objet.

## 4. Comment étendre une classe depuis une autre
L’héritage permet de créer une nouvelle classe basée sur une classe existante avec le mot-clé extends :
```js
class Animal {
  speak() {
    console.log('L’animal fait un bruit.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Le chien aboie.');
  }
}

const dog = new Dog();
dog.speak(); // Le chien aboie.
```

`extends` crée une sous-classe.
On peut redéfinir (override) les méthodes de la classe parente.

## 5. Métaprogrammation et Symboles
La métaprogrammation permet d’intercepter et de modifier le comportement des objets. Les Symbols sont souvent utilisés comme clés uniques pour des propriétés :
```js
const id = Symbol('id');

class User {
  constructor(name) {
    this.name = name;
    this[id] = Math.floor(Math.random() * 1000);
  }
}

const user = new User('Alice');
console.log(user[id]); // Accès à l’identifiant unique
```

- Les symboles sont uniques et permettent de créer des propriétés “privées”.
- Ils sont utiles en métaprogrammation pour éviter les collisions de noms.

