# Programmation Asynchrone en Python avec `asyncio`

Ce projet présente les bases de la programmation **asynchrone en Python** en utilisant le module intégré `asyncio`. Vous y découvrirez comment utiliser les mots-clés `async` et `await`, exécuter un programme asynchrone, lancer plusieurs coroutines de manière concurrente, créer des tâches `asyncio`, et utiliser le module `random` dans ce contexte.

---

## 📌 1. Syntaxe `async` / `await`

Python permet de définir des fonctions **asynchrones** avec le mot-clé `async`, et de **suspendre leur exécution** avec `await` :

```python
import asyncio

async def dire_bonjour():
    await asyncio.sleep(1)
    print("Bonjour !")
````

🚀 2. Exécuter un programme asynchrone avec asyncio

Pour exécuter une coroutine asynchrone, on utilise :
```python
asyncio.run(dire_bonjour())
````

Cela démarre la boucle d’événements, exécute la coroutine, puis la boucle se ferme automatiquement à la fin.

⏱️ 3. Exécuter des coroutines de manière concurrente

On peut exécuter plusieurs coroutines en même temps (concurrence) avec asyncio.gather() :
```python
async def tache1():
    await asyncio.sleep(1)
    print("Tâche 1 terminée")

async def tache2():
    await asyncio.sleep(2)
    print("Tâche 2 terminée")

async def main():
    await asyncio.gather(tache1(), tache2())

asyncio.run(main())
````

🧵 4. Créer des tâches asyncio

Les tâches permettent de lancer une coroutine immédiatement, sans attendre son résultat tout de suite :
```python
async def traitement(n):
    await asyncio.sleep(n)
    print(f"Traitement {n} terminé")

async def main():
    t1 = asyncio.create_task(traitement(1))
    t2 = asyncio.create_task(traitement(2))
    await t1
    await t2

asyncio.run(main())
````

Cela est utile pour gérer plusieurs coroutines qui doivent s’exécuter indépendamment.

🎲 5. Utiliser le module random

Le module random peut être utilisé dans une coroutine comme dans une fonction normale. Exemple :
```python
import random

async def afficher_aleatoire():
    valeur = random.randint(1, 10)
    print(f"Nombre aléatoire : {valeur}")
````

Attention : random est synchrone, donc il ne bloque pas la boucle d’événements.

📎 Exemple complet
```python
import asyncio
import random

async def tache(nom):
    delai = random.uniform(0.5, 2.0)
    await asyncio.sleep(delai)
    print(f"{nom} terminée après {delai:.2f} secondes")

async def main():
    t1 = asyncio.create_task(tache("Tâche A"))
    t2 = asyncio.create_task(tache("Tâche B"))
    await asyncio.gather(t1, t2)

asyncio.run(main())
```