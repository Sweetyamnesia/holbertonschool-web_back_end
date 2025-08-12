#!/usr/bin/env python3
"""
This module contains a function that list
all document in a collection.
"""

import pymongo


# establishing connection to the database
client = pymongo.MongoClient("mongodb://localhost:27017/")


def list_all(mongo_collection):
    """
    List all documents in a MongoDB collection.

    Args:
        mongo_collection: A PyMongo collection object.

    Returns:
        A list of all documents in the collection.
        Returns an empty list if the collection is empty or does not exist.
    """
    documents = list(mongo_collection.find({}))
    return documents
