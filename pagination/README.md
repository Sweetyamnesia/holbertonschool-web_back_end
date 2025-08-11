# REST API Design: Pagination

Ce document explique différentes approches pour implémenter la pagination dans une API REST, en incluant l'utilisation de **HATEOAS** et des stratégies pour rendre la pagination robuste.

## 📄 1. HATEOAS

**HATEOAS** (*Hypermedia As The Engine Of Application State*) est un principe d'API REST où les réponses incluent des liens hypermédias permettant de naviguer facilement entre les ressources.  
Cela permet au client de découvrir dynamiquement les actions possibles sans connaissance préalable des URL.

Exemple de réponse avec HATEOAS :
```json
{
  "data": [...],
  "links": {
    "self": "/items?page=2&page_size=10",
    "next": "/items?page=3&page_size=10",
    "prev": "/items?page=1&page_size=10"
  }
}
```

## 📑 2. Pagination simple : page et page_size
La pagination la plus simple utilise deux paramètres :
page : numéro de la page demandée.
page_size : nombre d’éléments par page.

Exemple d’URL :
```bash
GET /items?page=2&page_size=10
```

Le serveur calcule alors :
```ini
start_index = (page - 1) * page_size
end_index = start_index + page_size
```

Puis renvoie uniquement les éléments dans cet intervalle.

## 🗂 3. Pagination avec métadonnées hypermédias
Au lieu de renvoyer seulement les données, on inclut des informations supplémentaires :
```json
{
  "page_size": 10,
  "page": 2,
  "data": [...],
  "total_pages": 5,
  "total_items": 47,
  "next_page": "/items?page=3&page_size=10",
  "prev_page": "/items?page=1&page_size=10"
}
```

Ces métadonnées aident le client à gérer l’affichage, la navigation et la récupération de données.

## 🛡 4. Pagination résiliente aux suppressions
Dans un système où des éléments peuvent être supprimés, la pagination basée sur `page` et `page_size` peut sauter ou répéter des éléments.
Une solution consiste à utiliser un identifiant de l'élément de départ (cursor-based pagination).

Exemple :
```bash
GET /items?after_id=153&page_size=10
```

Le serveur renvoie les 10 éléments suivant celui dont l'ID est 153.
Cette méthode assure une continuité même si des suppressions ou insertions interviennent dans la liste.

## 📌 Conclusion
- **Simple pagination** → Facile à implémenter, mais sensible aux changements dans la base.
- **Pagination avec hypermédia** → Fournit plus d'informations au client et suit HATEOAS.
- **Pagination résiliente** → Fiable dans les environnements où les données changent fréquemment.