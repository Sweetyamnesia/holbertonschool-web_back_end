# 🌀 Programmation Asynchrone en Python : Générateurs, Compréhensions et Typage

Ce projet explore des concepts avancés de l'asynchrone en Python, notamment les **générateurs asynchrones**, les **compréhensions asynchrones**, et leur **annotation de type**.

---

## ✅ Objectifs

- Comprendre ce qu'est un **générateur asynchrone**
- Savoir utiliser les **compréhensions `async for`**
- Annoter correctement un générateur avec `AsyncGenerator` ou `AsyncIterable`

---

## 🔁 Générateur Asynchrone (`async def` + `yield`)

Un générateur asynchrone permet de produire des valeurs **au fil du temps** de manière **non bloquante**.

### Exemple :

```python
import asyncio
from typing import AsyncGenerator

async def async_counter() -> AsyncGenerator[int, None]:
    for i in range(5):
        await asyncio.sleep(1)
        yield i
````

async def : indique que la fonction est asynchrone
yield : produit une valeur à chaque itération
await : permet de gérer des opérations non bloquantes (comme un sleep)
🔍 Compréhension Asynchrone

Tu peux consommer un générateur asynchrone avec async for :
```python
async def main():
    results = [i async for i in async_counter()]
    print(results)
````

Cela crée une liste à partir des valeurs produites par async_counter()
Syntaxe : [val async for val in async_gen()]

🧠 Typage des Générateurs Asynchrones

Python fournit des types précis dans typing :

AsyncGenerator[yield_type, send_type]
AsyncIterable[yield_type] (si tu ne gères pas send())
Exemple :
```python
from typing import AsyncGenerator

async def numbers() -> AsyncGenerator[int, None]:
    yield 1
    yield 2
````

send_type est souvent None car on ne fait pas gen.asend(...) dans la plupart des cas.

🧪 Tester un Générateur Asynchrone
```python
import asyncio

async def main():
    async for value in numbers():
        print(f"Reçu : {value}")

asyncio.run(main())
```

📚 Résumé
| Concept                   | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `async def` + `yield`     | Crée un générateur asynchrone                          |
| `async for`               | Itère sur un générateur de façon asynchrone            |
| `AsyncGenerator[T, None]` | Type d'un générateur qui produit des `T` sans recevoir |
