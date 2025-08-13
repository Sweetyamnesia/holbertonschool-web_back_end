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
    
    """
    documents = list(mongo_collection.find({}))

