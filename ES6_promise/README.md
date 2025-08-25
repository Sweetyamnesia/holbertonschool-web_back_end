# Guide des Promises et de l'Asynchrone en JavaScript

Ce guide explique les concepts de **Promises** en JavaScript, pourquoi les utiliser, et comment travailler avec elles et les fonctions asynchrones.

---

## 1. Promises : quoi, pourquoi et comment

Une **Promise** est un objet représentant l’achèvement (ou l’échec) d’une opération asynchrone.  
- **Pourquoi utiliser les Promises ?**  
  - Pour gérer les opérations asynchrones de manière plus lisible que les callbacks imbriqués.  
  - Pour faciliter la gestion des erreurs et la composition d’opérations asynchrones.

- **Comment créer une Promise :**

```javascript
const maPromise = new Promise((resolve, reject) => {
  // Opération asynchrone ici
  if (succès) {
    resolve("Réussi !");
  } else {
    reject("Erreur !");
  }
});
```
---

## 2. Utiliser then, resolve et catch
`then()` : exécute une fonction lorsque la Promise est résolue avec succès.
`catch()` : exécute une fonction lorsque la Promise est rejetée.
`resolve()` : appelé à l’intérieur du constructeur pour indiquer que la Promise est réussie.
`reject()` : appelé à l’intérieur du constructeur pour indiquer que la Promise a échoué.

```javascript
maPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```
---

## 3. Toutes les méthodes de l’objet Promise
`Promise.all([p1, p2, ...])` : attend que toutes les Promises soient résolues, ou échoue si l’une échoue.
`Promise.race([p1, p2, ...])` : renvoie la première Promise qui se termine (résolue ou rejetée).
`Promise.allSettled([p1, p2, ...])` : attend que toutes les Promises soient terminées, retourne le résultat de toutes.
`Promise.any([p1, p2, ...])` : renvoie la première Promise résolue, ignore les rejets.

---

## 4. throw et try
Pour gérer les erreurs de manière synchrone ou dans une fonction async :
```javascript
try {
  // Code qui peut lancer une erreur
  throw new Error("Quelque chose s'est mal passé");
} catch (error) {
  console.error(error);
}
```
---

## 5. L’opérateur await
Utilisé uniquement dans une fonction `async`.
Permet de “pause” l’exécution jusqu’à ce qu’une Promise soit résolue.
```javascript
async function maFonction() {
  const resultat = await maPromise;
  console.log(resultat);
}
```
---

## 6. Fonction async
Une fonction déclarée avec `async` retourne toujours une Promise.
À l’intérieur, on peut utiliser `await` pour attendre des Promises.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur:", error);
  }
}
```
