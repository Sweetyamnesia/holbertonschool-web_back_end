# 🚀 Apprendre Node.js & Express

Ce projet a pour objectif d'apprendre les bases de **Node.js**, l'utilisation de ses **modules**, la création de **serveurs HTTP** simples et avancés avec **Express.js**, ainsi que l'utilisation d'outils modernes pour améliorer le développement.

---

## 📌 Prérequis

- **Node.js** (version ≥ 18 recommandé)  
- **npm** ou **yarn**
- Connaissance de base en **JavaScript**

---

## 🛠 Installation

Clone le projet et installe les dépendances :

```bash
git clone https://github.com/ton-utilisateur/nom-du-projet.git
cd nom-du-projet
npm install
```

## 📂 Fonctionnalités
1. Exécuter du JavaScript avec Node.js
```bash
node script.js
```
Permet d'exécuter des fichiers .js directement depuis le terminal.

2. Utiliser les modules Node.js
Importer des modules natifs comme `fs`, `http`, `path`, etc.
Exemple :
```javascript
const fs = require('fs');
const contenu = fs.readFileSync('fichier.txt', 'utf-8');
console.log(contenu);
```

3. Lire des fichiers avec un module spécifique
Utilisation du module fs pour lire et écrire dans des fichiers.
```javascript
const fs = require('fs');
fs.readFile('fichier.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

4. Utiliser `process` pour accéder aux arguments et à l'environnement
Récupérer les arguments de la ligne de commande :
```javascript
console.log(process.argv);
```

Accéder aux variables d'environnement :
```javascript
console.log(process.env);
```

5. Créer un petit serveur HTTP avec Node.js
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Node.js !');
});

server.listen(3000, () => {
  console.log('Serveur Node démarré sur http://localhost:3000');
});
```

6. Créer un petit serveur HTTP avec Express.js
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express.js !');
});

app.listen(3000, () => {
  console.log('Serveur Express démarré sur http://localhost:3000');
});
```

7. Créer des routes avancées avec Express.js
```javascript
app.get('/user/:id', (req, res) => {
  res.send(`Utilisateur ID : ${req.params.id}`);
});

app.post('/data', (req, res) => {
  res.json({ message: 'Données reçues !' });
});
```

8. Utiliser ES6 avec Node.js grâce à Babel
Installation de Babel :
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
```

Ajoutez un fichier `.babelrc` :
```json
{
  "presets": ["@babel/preset-env"]
}
```

Lancez votre projet avec :
```bash
npx babel-node index.js
```

9. Utiliser Nodemon pour développer plus vite
Installation :
```bash
npm install --save-dev nodemon
```

Ajoutez un script dans package.json :
```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Lancez le projet :
```bash
npm run dev
```

10. Utiliser le module Child Process
```javascript
const { exec } = require('child_process');

exec('ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur : ${error}`);
    return;
  }
  console.log(`Résultat :\n${stdout}`);
});
```

11. Écrire des tests avec Mocha
Installation :
```bash
npm install --save-dev mocha chai
```

Ajoutez dans `package.json` :
```json
"scripts": {
  "test": "mocha"
}
```

Exemple de test `test/app.test.js` :
```javascript
const assert = require('assert');

describe('Exemple de test', () => {
  it('devrait additionner correctement', () => {
    assert.strictEqual(2 + 2, 4);
  });
});
```

Lancer les tests :
```bash
npm test
```