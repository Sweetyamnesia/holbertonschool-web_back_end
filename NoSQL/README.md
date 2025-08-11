# Introduction aux bases de données NoSQL

Ce document présente les concepts essentiels autour des bases de données NoSQL, leurs différences avec les bases relationnelles classiques, ainsi qu’une introduction pratique à MongoDB.

---

## Qu’est-ce que le NoSQL ?

NoSQL signifie "Not Only SQL". C’est une famille de systèmes de gestion de bases de données qui ne reposent pas sur le modèle relationnel traditionnel.  
Ces bases sont conçues pour gérer des données volumineuses, non structurées ou semi-structurées, et offrir une meilleure scalabilité horizontale.

---

## Différences entre SQL et NoSQL

| Critère          | SQL                               | NoSQL                                |
|------------------|----------------------------------|------------------------------------|
| Modèle de données| Tables relationnelles (lignes, colonnes) | Documents, clé-valeur, colonnes, graphes |
| Schéma           | Rigide (défini à l’avance)       | Flexible ou sans schéma             |
| Scalabilité      | Verticale (plus de puissance machine) | Horizontale (ajout de serveurs)   |
| Requêtes         | Langage SQL standardisé           | Requêtes spécifiques selon type   |
| Transactions     | Supporte ACID                     | Souvent BASE (plus flexible)       |

---

## Qu’est-ce que ACID ?

ACID est un ensemble de propriétés garantissant la fiabilité des transactions dans une base de données relationnelle :  
- **Atomicité** : La transaction est tout ou rien.  
- **Cohérence** : La base reste dans un état valide avant et après la transaction.  
- **Isolation** : Les transactions concurrentes ne se gênent pas.  
- **Durabilité** : Une fois validée, la transaction est conservée même en cas de panne.

---

## Qu’est-ce que le stockage par documents ?

Le stockage par documents est un type de base NoSQL où les données sont stockées sous forme de documents (généralement JSON ou BSON).  
Chaque document contient des paires clé-valeur pouvant représenter des structures complexes, sans schéma fixe.

---

## Types de bases NoSQL

1. **Bases clé-valeur** : Stockage simple d’associations clé → valeur (ex: Redis).  
2. **Bases documentaires** : Documents flexibles (ex: MongoDB, CouchDB).  
3. **Bases en colonnes** : Stockage optimisé par colonnes (ex: Cassandra).  
4. **Bases graphe** : Données liées avec des relations complexes (ex: Neo4j).

---

## Avantages des bases NoSQL

- **Scalabilité horizontale** pour gérer des millions de requêtes.  
- **Flexibilité** du schéma permettant d’évoluer rapidement.  
- **Performance** accrue pour certains types de données et requêtes.  
- **Adaptées aux données semi-structurées** comme les logs, réseaux sociaux, IoT.

---

## Comment interroger une base NoSQL ?

Les bases NoSQL ont souvent leur propre langage ou API pour récupérer des données, souvent en JSON.  
Par exemple, MongoDB utilise des requêtes en JSON pour filtrer, trier, ou agréger les documents.

---

## Comment insérer, mettre à jour et supprimer dans NoSQL ?

Les opérations CRUD (Create, Read, Update, Delete) sont réalisées via des commandes spécifiques au type de base :  
- **Insertion** : ajouter un nouveau document ou paire clé-valeur.  
- **Mise à jour** : modifier un ou plusieurs champs d’un document.  
- **Suppression** : retirer un document selon un critère.

---

## Introduction à MongoDB

MongoDB est une base NoSQL orientée documents très populaire.  
Elle stocke les données sous forme de documents BSON, permettant des structures imbriquées complexes.  
MongoDB propose :  
- Un shell interactif (`mongo`) pour manipuler la base.  
- Un pilote Python (`pymongo`) pour intégrer MongoDB dans vos applications.

---

## Utiliser MongoDB avec Python

- Installer `pymongo` :  
```bash
pip install pymongo
```
- Connexion à la base :
```python
from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017/')
db = client['ma_base']
collection = db['ma_collection']
````

- Opérations courantes :
```python
# Insérer un document
collection.insert_one({"nom": "Alice", "âge": 30})

# Rechercher des documents
resultats = collection.find({"âge": {"$gt": 25}})

# Mettre à jour un document
collection.update_one({"nom": "Alice"}, {"$set": {"âge": 31}})

# Supprimer un document
collection.delete_one({"nom": "Alice"})
````
