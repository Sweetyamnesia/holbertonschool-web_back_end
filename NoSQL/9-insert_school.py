#!/usr/bin/env python3
"""
This module contains a function that inserts
a new document in a collection.
"""

import pymongo


# establishing connection to the database
client = pymongo.MongoClient("mongodb://localhost:27017/")


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document into a MongoDB collection
    using the provided keyword arguments.

    Args:
        mongo_collection: A PyMongo collection object.
        **kwargs: Keyword arguments representing the fields
        and values for the new document.

    Returns:
        The _id of the newly inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
