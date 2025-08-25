# Manipulation de données en ES6

Ce projet illustre comment manipuler des données en JavaScript moderne (ES6) à l'aide de tableaux, de tableaux typés et de structures de données avancées comme `Set`, `Map` et `WeakMap`.

---

## Tableaux et méthodes fonctionnelles

JavaScript ES6 fournit plusieurs méthodes pour manipuler les tableaux de manière déclarative et fonctionnelle.

### `map`

La méthode `map` crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.

```javascript
const nombres = [1, 2, 3, 4];
const doubles = nombres.map(x => x * 2);
console.log(doubles); // [2, 4, 6, 8]
```

`filter`
La méthode `filter` crée un nouveau tableau contenant uniquement les éléments qui satisfont une condition.

```javascript
const nombres = [1, 2, 3, 4];
const pairs = nombres.filter(x => x % 2 === 0);
console.log(pairs); // [2, 4]
```

`reduce`
La méthode `reduce` permet de réduire un tableau à une seule valeur en appliquant une fonction cumulatrice.

```javascript
const nombres = [1, 2, 3, 4];
const somme = nombres.reduce((acc, val) => acc + val, 0);
console.log(somme); // 10
```

---

## Tableaux typés
Les tableaux typés permettent de stocker des valeurs numériques de manière plus performante. Ils sont utiles pour le traitement de données binaires ou numériques à grande échelle.

```javascript
const buffer = new ArrayBuffer(16); // 16 octets
const int32View = new Int32Array(buffer);

int32View[0] = 42;
console.log(int32View); // Int32Array [42, 0, 0, 0]
```

Types courants : `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`.

---

## Structures de données avancées

`Set`
Un `Set` est une collection de valeurs uniques. Il est utile pour éliminer les doublons.

```javascript
const nombres = [1, 2, 2, 3, 3, 3];
const unique = new Set(nombres);
console.log(unique); // Set { 1, 2, 3 }
```

`Map`
Un `Map` est une collection de paires clé-valeur où les clés peuvent être de n'importe quel type.

```javascript
const map = new Map();
map.set('nom', 'Alice');
map.set('âge', 25);

console.log(map.get('nom')); // Alice
console.log(map.has('âge')); // true
```

`WeakMap``
Un `WeakMap` est similaire à un Map, mais ses clés doivent être des objets et elles sont faibles, ce qui permet au garbage collector de libérer la mémoire si aucune autre référence ne pointe vers l'objet clé.

```javascript
const wm = new WeakMap();
let obj = {};
wm.set(obj, 'donnée associée');

console.log(wm.get(obj)); // 'donnée associée'
obj = null; // L'objet peut maintenant être garbage-collected
```
