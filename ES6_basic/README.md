# Introduction à ES6 (ECMAScript 2015)

Ce document présente les principales nouveautés introduites avec **ES6**, une version majeure de JavaScript qui a apporté de nombreuses améliorations pour rendre le langage plus puissant et plus simple à utiliser.

---

## 🚀 Qu'est-ce qu'ES6 ?
ES6, aussi appelé **ECMAScript 2015**, est la 6ème version de la norme ECMAScript.  
Il a introduit plusieurs fonctionnalités modernes qui facilitent le développement, améliorent la lisibilité du code et rendent JavaScript plus cohérent avec les autres langages de programmation.

---

## ✨ Nouvelles fonctionnalités introduites en ES6
- **Constantes et variables avec `let` et `const`**
- **Portée par bloc (block-scoping)**
- **Fonctions fléchées (arrow functions)**
- **Paramètres par défaut**
- **Opérateurs rest (`...args`) et spread (`...array`)**
- **Interpolation de chaînes avec les templates strings**
- **Création d’objets simplifiée**
- **Itérateurs et boucles `for...of`**

---

## 📌 Constantes (`const`) vs Variables (`let`)
- `let` : permet de déclarer une variable dont la valeur peut être réassignée.  
- `const` : déclare une constante, sa valeur ne peut pas être modifiée (mais les objets/arrays restent mutables).  

Exemple :
```js
let age = 25;
age = 26; // ✅ possible

const pi = 3.14;
pi = 3.14159; // ❌ erreur
```

## 📦 Variables à portée de bloc
Contrairement à `var` qui a une portée fonctionnelle ou globale, `let` et `const` sont limités au bloc `{ ... }` où ils sont déclarés.
```js
if (true) {
  let x = 10;
  const y = 20;
}
// console.log(x); ❌ erreur
```

## 🏹 Fonctions fléchées et paramètres par défaut
Les arrow functions permettent une syntaxe plus concise et n’ont pas leur propre `this`.
```js
// Fonction classique
function add(a, b = 0) {
  return a + b;
}

// Fonction fléchée
const addArrow = (a, b = 0) => a + b;
```

## 🌐 Paramètres Rest et Spread
Rest (`...`) permet de regrouper plusieurs arguments en un tableau.
Spread (`...`) permet de décomposer un tableau ou un objet.
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
```

## 📝 String templating en ES6
Les templates strings (backticks `) permettent d’insérer facilement des variables et des expressions.
```js
const name = "Alice";
console.log(`Bonjour, ${name} !`); // Bonjour, Alice !
```

## 🏗️ Création d’objets et propriétés
ES6 simplifie la création et la manipulation d’objets :
```js
const name = "Alice";
const age = 25;

const person = { name, age }; // au lieu de { name: name, age: age }
console.log(person); // { name: "Alice", age: 25 }
```

## 🔄 Itérateurs et boucle for...of
La boucle `for...of` permet d’itérer facilement sur les valeurs d’un tableau, d’une chaîne ou d’un objet itérable.
```js
const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}
// 10
// 20
// 30
```